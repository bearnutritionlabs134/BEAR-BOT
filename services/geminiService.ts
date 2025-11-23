import { GoogleGenAI } from "@google/genai";
import { BEAR_METHOD_SUMMARY } from "../data/bearContent";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (userMessage: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  try {
    const model = "gemini-3-pro-preview";
    
    const systemInstruction = `
      You are "BearBot", an expert AI wellness companion based on Leonardo Bear's "The Bear King" method.
      
      Your goal is to help users improve their PHYSICAL and PSYCHOLOGICAL health using the specific principles from the guide.
      
      CORE KNOWLEDGE BASE:
      ${BEAR_METHOD_SUMMARY}
      
      GUIDELINES:
      1. Always reference the "Bear Cycle" pillars when relevant.
      2. Be empathetic, encouraging, and practical.
      3. If asked about supplements or medical advice, ALWAYS provide the information from the guide BUT strictly add a disclaimer to consult a doctor.
      4. Keep answers concise and readable (use bullet points).
      5. If the user asks something completely unrelated to health/wellness, politely steer them back to the Bear King method.
      6. Speak in a tone that is supportive but firm about taking responsibility (a core tenet of the method).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error interacting with Gemini:", error);
    throw error;
  }
};