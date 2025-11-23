
import { 
  Activity, Brain, Dumbbell, Moon, Utensils, 
  Droplet, Microscope, BatteryCharging, Waves, 
  Info
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
    description: 'The Bear King Method: A comprehensive recovery program.',
    sections: [
      {
        heading: 'About the Author',
        body: `**Leonardo Bear** is a specialist in the areas of anxiety, depression, and personal conflict management. He is the creator of the exclusive **THE BEAR KING** method, designed to boost integral evolution across physical, mental, spiritual, and social dimensions. He is also the founder of **BEAR NUTRITION LABS**.

_Disclaimer: This guide is based on rigorous scientific studies but implies that any intervention should be made under the guidance of a qualified medical professional._`
      },
      {
        heading: 'The Mission',
        body: `Originally developed for **Post-COVID** recovery (Long COVID), this methodology is universally applicable. It aims to re-establish balance and vitality.
        
**Core Philosophy:**
*   **Active Responsibility:** "You may not be to blame, but you are responsible." Shift from "Why did this happen?" to "What can I do now?".
*   **Self-Care:** "Focusing on oneself is crucial... To ensure genuine care for others, your own well-being is the priority."
*   **Holistic View:** You are a complete being. Neglecting one area burdens the others.`
      }
    ]
  },
  {
    id: 'hormones',
    title: '1. Hormonal Intervention',
    icon: Activity,
    description: 'Vitality, balance, and replacement strategies.',
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
*   **GH-related Peptides:** Molecules that stimulate natural GH release. Require strict medical supervision.
*   **MK-677 (Ibutamoren):** Oral compound stimulating GH secretion. Experimental use for muscle mass, sleep, and fat burning. Side effects may include fluid retention.`
      },
      {
        heading: 'Medical Warning',
        body: `Hormone replacement or use of modulators **must be individualized and supervised by an endocrinologist**. Indiscriminate use carries cardiovascular, hepatic, and hormonal risks.`,
        highlight: true
      }
    ]
  },
  {
    id: 'psych',
    title: '2. Psychological Balance',
    icon: Brain,
    description: 'Mental strategies, depression vs. sadness, and anxiety management.',
    sections: [
      {
        heading: 'Depression vs. Sadness',
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
2.  **Positive Intentions:** Listen to uplifting music immediately; cultivate optimism.
3.  **Anticipate Decisions:** Prepare clothes and plan breakfast the night before to reduce cognitive load.
4.  **Consolidate Ritual:** Consistency reprograms the mindset.
5.  **Focus on the Present:** Live one day at a time. Avoid dwelling on negative feelings.`
      },
      {
        heading: 'Productivity & Mental Techniques',
        body: `*   **"5 Minutes" Technique:** Commit to just 5 mins of a task to break procrastination (Flywheel effect).
*   **The Chaos Technique:** Deliberately create a mess (e.g., dump a drawer) to force immediate action.
*   **Step-by-Step:** Focus *only* on the immediate next micro-step (e.g., "I'll just put on my shoes").
*   **Metabolic Activation:** Exercise to stimulate neurotransmitters and overcome apathy.
*   **Behavioral Activation:** Do it even if you don't feel like it. Action precedes motivation.
*   **Power Pose:** Expansive postures (shoulders back) raise self-confidence.`
      },
      {
        heading: 'Anxiety & Stress Strategies',
        body: `*   **Neural Reset:** Cover your left eye with your hand, look up to the right with your right eye, and take a deep breath. Activates the prefrontal cortex to interrupt anxious thoughts.
*   **Box Breathing:** Inhale 4s, Hold 4s, Exhale 4s, Hold 4s. Regulates the nervous system.
*   **4-7-8 Breathing:** Inhale 4s, Hold 7s, Exhale 8s (whoosh sound). Promotes sleep and calm.
*   **Sensory Maneuver:** Hold an ice cube or splash face with ice water to activate the **Dive Reflex** (stimulates vagus nerve, slows heart rate).
*   **The 5 Senses:** Name 5 things you see, 4 touch, 3 hear, 2 smell, 1 taste.`
      },
      {
        heading: 'Colloidal Gold: Focus & Energy',
        body: `*   **Cognitive Enhancement:** Stimulates neural activity, aids in reducing mental fatigue and attention deficit.
*   **Vitality:** Optimizes biological energy capacity and physical endurance.
*   *Target:* Students, professionals, athletes, and those with chronic fatigue.`
      }
    ]
  },
  {
    id: 'activity',
    title: '3. Regular Physical Activity',
    icon: Dumbbell,
    description: 'Recovery, strengthening, and mobility protocols.',
    sections: [
      {
        heading: 'Morning Stretching Routine (5 mins)',
        body: `1.  **Cervical Stretch:** Gently tilt head side to side to release neck tension.
2.  **Arm Stretch:** Cross one arm over chest and gently pull it, targeting the shoulder and arm muscles.
3.  **Spinal Twist:** While seated, rotate torso to each side. Promotes spinal mobility and flexibility.`
      },
      {
        heading: 'Essential Habits for Recovery',
        body: `*   **Walking/Marching in Place:** 10-20 mins daily. Deep breathing. Improves circulation and stress relief.
*   **Light Strengthening:**
    *   *Gentle Squats:* 3 sets of 10 repetitions. Keep feet shoulder-width, push hips back.
    *   *Leg Raises:* 2 sets of 15 repetitions per leg (lying on back).
*   **Mobility:**
    *   *Child's Pose:* Kneel, lean forward, arms extended (30s-1min).
    *   *Seated Spinal Twist:* Legs extended, cross one leg, twist torso.`
      },
      {
        heading: 'Post-COVID Rehabilitation',
        body: `*   **Respiratory Exercises:** Diaphragmatic breathing, Prolonged exhalation, Incentive spirometers.
*   **Fatigue Management:** "Pacing" - alternate activity with rest. Do not push to exhaustion.
*   **Cognitive Rehab:** Puzzles, memory games, and reading to fight "Brain Fog".`
      }
    ]
  },
  {
    id: 'sleep',
    title: '4. Restorative Sleep',
    icon: Moon,
    description: 'Sleep hygiene and supplementation strategies.',
    sections: [
      {
        heading: 'Optimized Sleep Routine',
        body: `*   **Consistency:** Same bed/wake times (including weekends).
*   **Naps:** Limit to 20-30 mins max.
*   **Environment:** Total darkness, Cool (18-22°C), Silence (or white noise).
*   **Avoid:** Screens (blue light), Caffeine/Nicotine, Heavy meals before bed.
*   **Preparation:** Warm bath with salts/chamomile (15-20 mins) or 4-7-8 Breathing.`
      },
      {
        heading: 'Key Sleep Supplements',
        body: `*   **L-Theanine:** Relaxation without sedation. Found in green tea.
*   **GABA:** Inhibitory neurotransmitter. Induces tranquility.
*   **5-HTP:** Precursor of serotonin -> Melatonin.
*   **Inositol:** Supports brain function, reduces anxiety.
*   **Ashwagandha KSM-66:** Reduces cortisol (stress hormone).
*   **Valerian/Passionflower:** Calming effects for mental agitation.
*   **Glycine:** Lowers core body temperature to facilitate sleep onset.
*   **Melatonin:** Regulates circadian rhythm.`
      }
    ]
  },
  {
    id: 'nutrition',
    title: '5. Optimized Nutrition',
    icon: Utensils,
    description: 'Intermittent fasting plans, metabolic accelerators, and supplements.',
    sections: [
      {
        heading: 'Weekly Fasting Plan: 16/8 Method (Standard)',
        body: `**Fasting Window:** 8 PM to 12 PM (Next Day). **Eating Window:** 12 PM to 8 PM.

*   **Mon:** *Lunch:* Green salad + grilled chicken + brown rice. *Snack:* Fruits w/ oilseeds. *Dinner:* Veggie soup + baked fish.
*   **Tue:** *Lunch:* Omelet w/ spinach + mushrooms. *Snack:* Natural yogurt w/ chia. *Dinner:* Lean meat + roasted veg.
*   **Wed:** *Lunch:* Chickpea salad w/ tuna. *Snack:* Green smoothie (kale/apple/ginger). *Dinner:* Shredded chicken + pumpkin puree.
*   **Thu:** *Lunch:* Brown rice + lentils + salad. *Snack:* Avocado w/ lemon. *Dinner:* Grilled fish + steamed broccoli.
*   **Fri:** *Lunch:* Quinoa salad w/ chicken. *Snack:* Berries. *Dinner:* Veggie omelet + salad.
*   **Sat:** *Lunch:* Mediterranean salad (olive oil/tomato/cucumber/light cheese). *Snack:* Nuts/seeds. *Dinner:* Lean meat + grilled veg.
*   **Sun:** *Lunch:* Chicken curry w/ brown rice + salad. *Snack:* Tropical fruit smoothie. *Dinner:* Light vegetable soup.`
      },
      {
        heading: 'Weekly Fasting Plan: Night-Time Version (16/8)',
        body: `**Strategy:** Dinner early (6-7 PM), Break fast at breakfast (10-11 AM).

*   **Mon:** Fast 6 PM - 10 AM. *Break:* Scrambled eggs + avocado. *Lunch:* Salad + grilled chicken. *Snack:* Berries.
*   **Tue:** Fast 7 PM - 11 AM. *Break:* Green smoothie. *Lunch:* Baked fish + veg. *Snack:* Yogurt w/ chia.
*   **Wed:** Fast 6 PM - 10 AM. *Break:* Veggie omelet. *Lunch:* Brown rice + lentils. *Snack:* Avocado.
*   **Thu:** Fast 7 PM - 11 AM. *Break:* Boiled eggs. *Lunch:* Lean meat + pumpkin. *Snack:* Fruit smoothie.
*   **Fri:** Fast 6 PM - 10 AM. *Break:* Whole-wheat bread w/ chickpea paste. *Lunch:* Chicken curry + rice.
*   **Sat:** Fast 7 PM - 11 AM. *Break:* Protein smoothie (banana/oats). *Lunch:* Mediterranean salad.
*   **Sun:** Fast 6 PM - 10 AM. *Break:* Scrambled eggs. *Lunch:* Grilled fish. *Snack:* Pineapple/mint smoothie.`
      },
      {
        heading: 'Advanced Protocol (Variable)',
        body: `*   **Mon:** Classic 16/8.
*   **Tue:** Moderate 14/10 (Fast 7 PM - 9 AM).
*   **Wed:** Full 24h Fast (Dinner to Dinner). Water/Tea/Coffee only.
*   **Thu:** Classic 16/8 (Recovery).
*   **Fri:** 5:2 (Calorie Restriction - 500-600 kcal).
*   **Sat:** Classic 16/8.
*   **Sun:** Light 14/10.`
      },
      {
        heading: 'Natural Metabolic Accelerators',
        body: `*   **Alpha-Lipoic Acid (ALA):** Optimizes insulin sensitivity (300-600mg/day).
*   **Zinc & Magnesium (ZMA):** Hormonal production balance and sleep quality.
*   **Eggplant Flour:** Rich in soluble fiber, reduces hunger, aids weight loss.
*   **Probiotics:** Reduces inflammatory processes, regulates appetite.`
      },
      {
        heading: 'Appetite & Fat Control Supplements',
        body: `*   **Chromium Picolinate:** Reduces sweet/carb cravings (200-400mcg).
*   **Spirulina:** High protein algae, promotes satiety (1-3g).
*   **Glucomannan:** Soluble fiber, expands in stomach (1-4g before meals).
*   **Apple Cider Vinegar:** 2 tbsp in water. Regulates blood sugar/triglycerides.
*   **Okralin:** Binds to dietary fat (up to 40g), reduces calorie absorption.
*   **L-Carnitine:** Transports fatty acids to energy (pre-aerobic).
*   **Safflower Oil / CLA:** Reduces abdominal fat, preserves lean muscle.
*   **Yohimbine:** Mobilizes resistant fat (Use caution: raises BP/anxiety).
*   **Berberine:** Metabolic optimization, insulin sensitivity (500mg before meals).`
      }
    ]
  },
  {
    id: 'liver',
    title: '6. Hepatic Balance',
    icon: Droplet,
    description: 'Detoxification protocols and liver support.',
    sections: [
      {
        heading: 'Core Strategy',
        body: `*   **Hydration:** 3 Liters/day.
*   **Sweating:** Sauna or exercise to eliminate toxins.
*   **Cleansing Protocol:** 5ml Apple Cider Vinegar + 1/2 Lemon + 300ml Honey Water (3x/day).
*   **Detox Juices:** Green (Apple/Kale), Purple (Beet/Carrot), Digestive (Pineapple/Mint).`
      },
      {
        heading: 'Weekly Liver Routine',
        body: `*   **Mon:** Warm lemon water + Green Juice + Light walk.
*   **Tue:** ACV Protocol + Purple Juice + Sauna/Hot bath.
*   **Wed:** Aloe Vera Juice + Cucumber/Lemon/Mint Juice + Jogging.
*   **Thu:** Dandelion Tea + Pineapple/Celery/Turmeric Juice + Yoga.
*   **Fri:** Lemon/Ginger water + Watermelon/Mint juice + Functional training.
*   **Sat:** Green/Boldo Tea + Kiwi/Spinach/Green Apple Juice + Outdoor walk.
*   **Sun:** Turmeric/Honey water + Carrot/Ginger/Orange Juice + Meditation.`
      },
      {
        heading: 'Hepatic Supplements',
        body: `*   **Milk Thistle (Silymarin):** Hepatoprotective, liver cell regeneration.
*   **Dandelion:** Stimulates bile production.
*   **Chlorella/Spirulina:** Chlorophyll for heavy metal elimination.
*   **Curcumin:** Anti-inflammatory liver protection.`
      }
    ]
  },
  {
    id: 'gut',
    title: '7. Gut Microbiota',
    icon: Microscope,
    description: 'Gut repair, weekly meal plan, and parasite cleanse.',
    sections: [
      {
        heading: 'Gut Health Pillars',
        body: `1.  **Probiotics:** Kefir, Natural Yogurt, Kombucha, Sauerkraut (Repopulate).
2.  **Prebiotics:** Garlic, Onion, Banana, Oats, Flaxseed (Feed bacteria).
3.  **Restorative:** Glutamine (Strengthens barrier), Zinc, Collagen, Omega-3.
4.  **Antioxidants:** Red berries, Green tea, Turmeric.`
      },
      {
        heading: 'Weekly Nutrition Plan for Microbiota',
        body: `*   **Mon:** *Breakfast:* Yogurt + Kefir + Berries + Chia. *Lunch:* Green salad + Chicken + Rice. *Dinner:* Veggie soup + Turmeric.
*   **Tue:** *Breakfast:* Green smoothie (Kale/Apple/Ginger). *Lunch:* Quinoa + Chickpeas + Tomato/Cucumber. *Dinner:* Baked fish + Sweet potato.
*   **Wed:** *Breakfast:* Whole-wheat bread + Avocado + Green tea. *Lunch:* Lentils + Brown rice + Beet. *Dinner:* Spinach omelet + Salad.
*   **Thu:** *Breakfast:* Kefir + Banana + Oats. *Lunch:* Mediterranean salad + Grilled chicken. *Dinner:* Pumpkin soup + Ginger.
*   **Fri:** *Breakfast:* Pineapple/Mint smoothie. *Lunch:* Beans + Rice + Lean meat. *Dinner:* Veggie soup + Whole-wheat toast.
*   **Sat:** *Breakfast:* Yogurt + Granola + Fruit. *Lunch:* Quinoa salad + Salmon. *Dinner:* Sweet potato cream + Turmeric.
*   **Sun:** *Breakfast:* Purple smoothie (Beetroot). *Lunch:* Brown rice + Lentils + Leafy greens. *Dinner:* Light soup + Chamomile tea.`
      },
      {
        heading: 'Parasite Cleanse & "Leaky Gut"',
        body: `**Leaky Gut:** Inflammation damages intestinal tight junctions, allowing toxins into the bloodstream.
        
**Antiparasitic Strategy:**
*   **Foods:** Garlic, Pumpkin Seeds (paralyzes worms), Papaya Seeds (Papain), Coconut Oil (Antifungal).
*   **Herbs:** Wormseed (Mastruz), Artemisia, Black Walnut, Clove, Neem, Oregano Oil.
*   **Colloidal Silver:** Antimicrobial (Inhibits cellular respiration of microorganisms). *Strict supervision required.*
*   **Medical:** Consult a doctor for annual broad-spectrum antiparasitic drugs.`
      }
    ]
  },
  {
    id: 'alkaline',
    title: '8. Body Alkalinization',
    icon: BatteryCharging,
    description: 'Reducing acidosis for bone and immune health.',
    sections: [
      {
        heading: 'The Danger of Acidosis',
        body: `Excess acidity leads to bone demineralization (Osteoporosis), muscle loss, chronic inflammation, immune suppression, and premature aging. Ideal blood pH is 7.35-7.45.`
      },
      {
        heading: 'Alkalizing Methods',
        body: `1.  **Sun-Charged Water:**
    *   Place filtered water in a glass bottle.
    *   Cover opening with fine cloth (allow chlorine/fluoride evaporation).
    *   Expose to sunlight for ~6 hours.
    *   Add a pinch of **Himalayan salt** and drops of **fresh lemon**.
    *   *Drink throughout the day, especially on an empty stomach.*

2.  **Baking Soda:**
    *   1 teaspoon in water.
    *   Neutralizes acidity, relieves heartburn/bloating/gas.
    *   *Use moderately.*

3.  **Cilantro:** Heavy metal detox, anti-inflammatory, dissolves kidney stones.`
      }
    ]
  },
  {
    id: 'hydration',
    title: '9. Adequate Hydration',
    icon: Waves,
    description: 'Water as the foundation of health.',
    sections: [
      {
        heading: 'The Power of Water',
        body: `Thirst is a late sign of dehydration. Chronic dehydration links to headaches, fatigue, renal dysfunction, and even cardiovascular risks (stroke/thrombosis).`
      },
      {
        heading: 'Benefits of 2.5L - 3L Daily',
        body: `*   **Cardiovascular:** Prevents blood thickening.
*   **Digestion:** Facilitates absorption, prevents constipation.
*   **Kidneys:** Dilutes stone-causing substances, eliminates toxins.
*   **Cognitive:** The brain is sensitive to dehydration; water improves focus/memory.
*   **Skin:** Prevents dryness and wrinkles.`
      },
      {
        heading: 'Strategy',
        body: `Cultivate the habit of drinking water regularly *before* feeling thirsty. Use teas (Hibiscus/Green) and natural juices as supplements to water intake.`
      }
    ]
  }
];

export const BEAR_METHOD_SUMMARY = pillars.map(p => 
  `${p.title}\n${p.sections.map(s => `### ${s.heading}\n${s.body}`).join('\n')}`
).join('\n\n');
