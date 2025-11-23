
import { 
  Activity, Brain, Dumbbell, Moon, Utensils, 
  Droplet, Microscope, BatteryCharging, Waves, 
  Info, Shield, Sparkles, Zap, Heart, Coffee
} from 'lucide-react';

export interface ContentSection {
  heading: string;
  body: string;
  highlight?: boolean;
}

export interface Pillar {
  id: string;
  title: string;
  icon: any;
  description: string;
  sections: ContentSection[];
}

export const pillars: Pillar[] = [
  {
    id: 'intro',
    title: 'Introduction & Mission',
    icon: Info,
    description: 'The Bear King Method and Leonardo Bear.',
    sections: [
      {
        heading: 'About the Author',
        body: `**Leonardo Bear** is a specialist in anxiety, depression, and personal conflict management. He is the creator of the exclusive **THE BEAR KING** method, designed to boost integral evolution across physical, mental, spiritual, and social dimensions. He is also the founder of **BEAR NUTRITION LABS**.

_Disclaimer: This guide is based on rigorous scientific studies but implies that any intervention should be made under the guidance of a qualified medical professional._`
      },
      {
        heading: 'The Mission',
        body: `Originally developed for **Post-COVID** recovery (Long COVID), this methodology is universally applicable. It aims to re-establish balance and vitality.
        
**Core Philosophy:**
*   **Active Responsibility:** "You may not be to blame, but you are responsible." Shift from "Why did this happen?" to "What can I do now?".
*   **Self-Care:** "Focusing on oneself is crucial... To ensure genuine care for others, your own well-being is the priority."
*   **Holistic View:** You are a complete being. Neglecting one area burdens the others.`
      },
      {
        heading: 'The Bear Cycle (9 Pillars)',
        body: `1.  **Hormonal Intervention**
2.  **Psychological & Emotional Balance**
3.  **Regular Physical Activity**
4.  **Restorative Sleep**
5.  **Optimized Nutrition**
6.  **Hepatic Balance**
7.  **Healthy Gut Microbiota**
8.  **Body Alkalinization**
9.  **Adequate Hydration**`
      }
    ]
  },
  {
    id: 'hormones',
    title: '1. Hormonal Intervention',
    icon: Activity,
    description: 'Vitality and balance after age 45.',
    sections: [
      {
        heading: 'Importance & Symptoms',
        body: `With aging, hormone production naturally declines (Menopause/Andropause).
*   **Women:** Hot flashes, insomnia, vaginal dryness, mood swings, loss of libido, depression, fatigue.
*   **Men:** Low energy, decreased libido, loss of muscle mass, irritability.
*   **Benefits of Regulation:** Prevents osteoporosis, heart disease, helps insulin control, preserves lean mass, and improves memory/concentration.`
      },
      {
        heading: 'Key Hormones & Compounds',
        body: `*   **DHEA:** Produced by adrenals. Precursor to testosterone/estrogen. Vitality, immunity, muscle mass, bone density.
*   **Testosterone:** Regulates libido, energy, muscle strength. Essential for men and women.
*   **Estrogen/Progesterone:** Control menstrual cycle, bone health, mood. Sharp decline in menopause.
*   **Growth Hormone (GH):** Stimulates growth, cell regeneration. Loss leads to fat gain/muscle loss.
*   **GH-related Peptides:** Stimulate natural GH release (requires medical supervision).
*   **MK-677 (Ibutamoren):** Oral compound stimulating GH (Experimental - enhances muscle, sleep, fat burning).`
      },
      {
        heading: 'Medical Warning',
        body: `Hormone replacement or use of modulators **must be individualized and supervised by an endocrinologist**. Indiscriminate use carries cardiovascular and hepatic risks.`,
        highlight: true
      }
    ]
  },
  {
    id: 'psych',
    title: '2. Psychological Balance',
    icon: Brain,
    description: 'Depression, Anxiety, and Mental Strategies.',
    sections: [
      {
        heading: 'Sadness vs. Clinical Depression',
        body: `**Temporary Sadness:**
*   Short-lived, specific trigger.
*   Maintains hope and ability to feel pleasure.
*   Mild physical symptoms (mild fatigue).
*   Resolves with self-care/social support.

**Clinical Depression:**
*   Persistent (>2 weeks), intense/debilitating.
*   Hopelessness, anhedonia (inability to feel pleasure), excessive guilt.
*   Severe physical symptoms (body aches, sleep/appetite changes, chronic fatigue).
*   Requires professional intervention (Therapy/Meds).`
      },
      {
        heading: 'Morning Routine (Essential)',
        body: `1.  **Get up promptly:** Avoid the snooze button to preserve energy.
2.  **Positive Intentions:** Listen to uplifting music immediately.
3.  **Anticipate Decisions:** Prepare clothes and plan breakfast the night before.
4.  **Consolidate Ritual:** Consistency reprograms the mindset.
5.  **Focus on the Present:** Live one day at a time. Avoid dwelling on the past.`
      },
      {
        heading: 'Mental Techniques & Hacks',
        body: `*   **"5 Minutes" Technique:** Commit to just 5 mins of a task to break procrastination (Flywheel effect).
*   **The Chaos Technique:** Deliberately create a mess (e.g., dump a drawer) to force immediate action/organization.
*   **Step-by-Step:** Focus *only* on the immediate next micro-step (e.g., "I'll just put on my shoes").
*   **Metabolic Activation:** Exercise to stimulate neurotransmitters and overcome apathy.
*   **Behavioral Activation:** Do it even if you don't feel like it. Action precedes motivation.
*   **Neural Reset:** Cover left eye, look up right, take a deep breath. Activates prefrontal cortex.`
      },
      {
        heading: 'Anxiety & Stress Strategies',
        body: `*   **Box Breathing:** Inhale 4s, Hold 4s, Exhale 4s, Hold 4s.
*   **4-7-8 Breathing:** Inhale 4s, Hold 7s, Exhale 8s (whoosh).
*   **Sensory Maneuver:** Hold an ice cube or splash face with ice water (Dive Reflex - slows heart rate).
*   **The 5 Senses:** Name 5 things you see, 4 touch, 3 hear, 2 smell, 1 taste.
*   **Colloidal Gold:** Suggested strategy for cognitive focus and energy.`
      },
      {
        heading: 'Supplements for Anxiety (Daytime)',
        body: `*   **Magnesium (L-Threonate/Bisglycinate):** Cognition and relaxation.
*   **L-Theanine:** Relaxation without drowsiness (found in green tea).
*   **Taurine:** Neuroprotector, regulates brain activity.
*   **Rhodiola Rosea:** Adaptogen, reduces stress fatigue.
*   **L-Tyrosine:** Precursor to dopamine/norepinephrine (focus).
*   **CoQ10:** Mitochondrial energy.
*   **Vitamin D3/B12/B6:** Mood balance and neurological function.`
      }
    ]
  },
  {
    id: 'activity',
    title: '3. Physical Activity',
    icon: Dumbbell,
    description: 'Movement protocols for recovery and strength.',
    sections: [
      {
        heading: 'Morning Stretching Routine (5 mins)',
        body: `1.  **Cervical Stretch:** Gently tilt head side to side to release neck tension.
2.  **Arm Stretch:** Cross one arm over chest and pull gently. Targets shoulder/arm.
3.  **Spinal Twist:** While seated, rotate torso to each side. Promotes spinal mobility.`
      },
      {
        heading: 'Essential Habits',
        body: `*   **Walking/Marching in Place:** 10-20 mins daily. Focus on deep breathing. Improves circulation and stress relief.
*   **Light Strengthening:**
    *   *Gentle Squats:* 3 sets of 10 repetitions.
    *   *Leg Raises:* 2 sets of 15 repetitions per leg (lying on back).
*   **Mobility:**
    *   *Child's Pose:* Kneel, lean forward, arms extended (30s-1min).
    *   *Seated Spinal Twist:* Legs extended, cross one leg, twist torso.`
      },
      {
        heading: 'Post-COVID Rehabilitation',
        body: `*   **Respiratory Exercises:** Diaphragmatic breathing, Prolonged exhalation, Incentive spirometers.
*   **Pacing:** Alternate activity with rest to manage fatigue.
*   **Cognitive Rehab:** Puzzles, memory games, reading to fight "Brain Fog".`
      }
    ]
  },
  {
    id: 'sleep',
    title: '4. Restorative Sleep',
    icon: Moon,
    description: 'Hygiene and supplements for deep rest.',
    sections: [
      {
        heading: 'Optimized Sleep Routine',
        body: `*   **Consistency:** Same bed/wake times.
*   **Naps:** Limit to 20-30 mins max.
*   **Environment:** Total darkness, Cool (18-22°C), Silence (or white noise).
*   **Avoid:** Screens (blue light), Caffeine/Nicotine, Heavy meals before bed.
*   **Preparation:** Warm bath with salts/chamomile (15-20 mins) or 4-7-8 Breathing.`
      },
      {
        heading: 'Key Sleep Supplements',
        body: `*   **L-Theanine:** Relaxation without sedation.
*   **GABA:** Inhibitory neurotransmitter (tranquility).
*   **5-HTP:** Serotonin precursor -> Melatonin.
*   **Inositol:** Reduces anxiety, restorative sleep.
*   **Ashwagandha KSM-66:** Reduces cortisol (stress hormone).
*   **Valerian/Passionflower:** Calming effects.
*   **Glycine:** Lowers core body temperature.
*   **Melatonin:** Regulates circadian rhythm.`
      }
    ]
  },
  {
    id: 'nutrition',
    title: '5. Optimized Nutrition',
    icon: Utensils,
    description: 'Meal plans, fasting, and metabolic health.',
    sections: [
      {
        heading: 'Intermittent Fasting Protocols',
        body: `*   **16/8 Method:** Fast 16h, Eat 8h (Most popular).
*   **14/10 Method:** Fast 14h, Eat 10h (Gentler).
*   **5:2 Method:** Normal eating 5 days, 500-600kcal 2 days.
*   **24h Fast:** Once/twice a week (Advanced).`
      },
      {
        heading: 'Weekly Plan: 16/8 Method (Standard)',
        body: `*   **Fasting:** 8 PM to 12 PM next day.
*   **Eating:** 12 PM to 8 PM.
*   **Mon:** Lunch (Green salad, grilled chicken, brown rice) | Dinner (Veggie soup, baked fish).
*   **Tue:** Lunch (Omelet with spinach) | Dinner (Lean meat, roasted veg).
*   **Wed:** Lunch (Chickpea salad w/ tuna) | Dinner (Shredded chicken, pumpkin puree).
*   **Thu:** Lunch (Brown rice, lentils, salad) | Dinner (Grilled fish, steamed broccoli).
*   **Fri:** Lunch (Quinoa salad w/ chicken) | Dinner (Veggie omelet).
*   **Sat:** Lunch (Mediterranean salad) | Dinner (Lean meat, grilled veg).
*   **Sun:** Lunch (Chicken curry w/ brown rice) | Dinner (Light veg soup).`
      },
      {
        heading: 'Weekly Plan: Night-Time Version (16/8)',
        body: `*Designed for early dinner eaters.*
*   **Mon/Wed/Fri:** Fast 6 PM to 10 AM.
*   **Tue/Thu/Sat:** Fast 7 PM to 11 AM.
*   **Meals:** Focus on scrambled eggs/smoothies for breakfast break-fast; Light dinners (soups/salads).`
      },
      {
        heading: 'Supplements for Metabolism & Weight',
        body: `*   **Appetite Control:** Chromium Picolinate, Spirulina (satiety), Glucomannan (fiber).
*   **Absorption Blockers:** Apple Cider Vinegar (2 tbsp in water), Okralin (fat binder).
*   **Stimulants:** Green Tea (Catechins), Caffeine (Thermogenic).
*   **Fat Metabolism:** L-Carnitine (Transport fat to energy), Safflower Oil, CLA.
*   **Accelerators:** Alpha-Lipoic Acid (Insulin sensitivity), ZMA (Hormonal balance), Eggplant Flour (Fiber).`
      },
      {
        heading: 'Foods to Avoid',
        body: `*   **Processed Foods:** Sugar, trans fats.
*   **Gluten:** Inflammation/Autoimmunity trigger.
*   **Dairy:** Lactose/Inflammatory proteins.
*   **Xenoestrogens:** Plastics (BPA) heated with food.`
      }
    ]
  },
  {
    id: 'liver',
    title: '6. Hepatic Balance',
    icon: Droplet,
    description: 'Weekly detox routine for the liver.',
    sections: [
      {
        heading: 'Liver Strategy',
        body: `*   **Hydration:** 3 Liters/day.
*   **Sweating:** Sauna or exercise.
*   **Cleansing Shot:** 5ml Apple Cider Vinegar + 1/2 Lemon + 300ml Honey Water (3x/day).
*   **Foods:** Beet, Carrot, Ginger, Cucumber, Pineapple, Turmeric.`
      },
      {
        heading: 'Weekly Liver Routine',
        body: `*   **Mon:** Warm lemon water + Green Juice (Apple/Kale/Ginger) + Walk.
*   **Tue:** ACV Protocol + Purple Juice (Beet/Carrot) + Sauna.
*   **Wed:** Aloe Vera Juice + Cucumber/Lemon/Mint Juice + Jogging.
*   **Thu:** Dandelion Tea + Pineapple/Celery/Turmeric Juice + Yoga.
*   **Fri:** Lemon/Ginger water + Watermelon/Mint juice + Functional training.
*   **Sat:** Green/Boldo Tea + Kiwi/Spinach/Green Apple Juice + Outdoor walk.
*   **Sun:** Turmeric/Honey water + Carrot/Ginger/Orange Juice + Meditation.`
      },
      {
        heading: 'Supplements',
        body: `Milk Thistle (Silymarin), Dandelion, Chlorella, Spirulina, Curcumin.`
      }
    ]
  },
  {
    id: 'gut',
    title: '7. Gut Microbiota',
    icon: Microscope,
    description: 'Detailed gut repair and nutrition plan.',
    sections: [
      {
        heading: 'Gut Health Pillars',
        body: `1.  **Probiotics:** Kefir, Yogurt, Kombucha, Sauerkraut (Repopulate).
2.  **Prebiotics:** Garlic, Onion, Banana, Oats (Feed bacteria).
3.  **Restorative:** Glutamine, Zinc, Collagen, Bone Broth (Repair barrier).`
      },
      {
        heading: 'Weekly Gut Nutrition Plan',
        body: `*   **Mon:** Breakfast (Yogurt+Kefir+Berries) | Lunch (Green salad+Chicken) | Dinner (Veggie soup+Turmeric).
*   **Tue:** Breakfast (Green smoothie) | Lunch (Quinoa+Chickpeas) | Dinner (Baked fish+Sweet potato).
*   **Wed:** Breakfast (Avocado toast GF) | Lunch (Lentils+Brown rice) | Dinner (Spinach omelet).
*   **Thu:** Breakfast (Kefir+Banana+Oats) | Lunch (Mediterranean salad) | Dinner (Pumpkin soup+Ginger).
*   **Fri:** Breakfast (Pineapple/Mint smoothie) | Lunch (Beans+Rice+Lean meat) | Dinner (Veggie soup).
*   **Sat:** Breakfast (Yogurt+Granola) | Lunch (Quinoa+Salmon) | Dinner (Sweet potato cream).
*   **Sun:** Breakfast (Purple smoothie) | Lunch (Lentils+Rice) | Dinner (Light soup+Chamomile tea).`
      },
      {
        heading: 'Annual Parasite Cleanse',
        body: `*   **Diet:** Garlic, Pumpkin Seeds, Papaya Seeds, Coconut Oil.
*   **Herbs:** Wormseed (Mastruz), Artemisia, Black Walnut, Clove, Oregano Oil, Neem.
*   **Supplements:** Colloidal Silver (Antimicrobial).
*   **Protocol:** Consult a doctor for broad-spectrum antiparasitic drugs annually.`
      }
    ]
  },
  {
    id: 'alkaline',
    title: '8. Body Alkalinization',
    icon: BatteryCharging,
    description: 'Strategies to reduce acidity.',
    sections: [
      {
        heading: 'Why Alkalize?',
        body: `Excess acidity (Acidosis) leads to bone demineralization, muscle loss, inflammation, immune suppression, and premature aging. Ideal blood pH is 7.35-7.45.`
      },
      {
        heading: 'Alkalizing Methods',
        body: `1.  **Sun-Charged Water:** Glass bottle, sunlight for 6h + pinch of Himalayan salt + lemon drops.
2.  **Baking Soda:** 1 tsp in water. Neutralizes acidity, aids digestion (heartburn/bloating). Use moderately.
3.  **Cilantro:** Heavy metal detox, anti-inflammatory.
4.  **Diet:** Prioritize green vegetables, reduce refined sugars and red meat.`
      }
    ]
  },
  {
    id: 'hydration',
    title: '9. Adequate Hydration',
    icon: Waves,
    description: 'Water as a vital nutrient.',
    sections: [
      {
        heading: 'The Power of Water',
        body: `Thirst is already a sign of dehydration. Chronic dehydration links to headaches, fatigue, and renal dysfunction.`
      },
      {
        heading: 'Benefits',
        body: `*   **Cardiovascular:** Prevents blood thickening (stroke/thrombosis risk).
*   **Digestion:** Prevents constipation.
*   **Kidneys:** Prevents stones and urinary infections.
*   **Cognitive:** Improves focus and memory.`
      },
      {
        heading: 'Guideline',
        body: `Aim for **2.5 to 3 Liters** daily. Drink *before* you feel thirsty.`
      }
    ]
  }
];

export const BEAR_METHOD_SUMMARY = pillars.map(p => 
  `${p.title}\n${p.sections.map(s => `### ${s.heading}\n${s.body}`).join('\n')}`
).join('\n\n');
