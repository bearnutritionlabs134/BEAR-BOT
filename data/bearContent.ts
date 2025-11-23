
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
    title: 'Introduction & Philosophy',
    icon: Info,
    description: 'The Bear King Method: A comprehensive recovery program.',
    sections: [
      {
        heading: 'About the Author: Leonardo Bear',
        body: `Leonardo Bear is a specialist in anxiety, depression, and personal conflict management. He created **THE BEAR KING** method to boost integral evolution across physical, mental, spiritual, and social dimensions. He is the founder of **BEAR NUTRITION LABS** and developer of GLUCOFAT.

*Disclaimer: This guide is based on scientific studies but any intervention must be guided by a qualified medical professional.*`
      },
      {
        heading: 'The Bear Cycle (9 Pillars)',
        body: `The "Healthy Life Cycle" is based on nine interconnected pillars:
1.  **Hormonal Intervention**
2.  **Psychological & Emotional Balance**
3.  **Regular Physical Activity**
4.  **Restorative Sleep**
5.  **Optimized Nutrition**
6.  **Hepatic Balance (Liver)**
7.  **Healthy Gut Microbiota**
8.  **Body Alkalinization**
9.  **Adequate Hydration**

*Note: Neglecting one area burdens the others. You are a complete being.*`
      },
      {
        heading: 'Core Philosophy',
        body: `**"You May Not Be to Blame, But You Are Responsible"**
True recovery begins by taking responsibility for your reaction. Shift from "Why me?" to "What can I do now?".

**"The Primacy of Self-Care"**
Focusing on oneself is crucial. Exclusive dedication to others leads to exhaustion. To care for others sustainably, your own well-being must be the priority.`
      }
    ]
  },
  {
    id: 'hormones',
    title: '1. Hormonal Intervention',
    icon: Activity,
    description: 'Understanding hormonal decline and replacement strategies.',
    sections: [
      {
        heading: 'Why Intervene?',
        body: `With aging (especially after 45), hormone production naturally declines (Menopause/Andropause).
*   **Women:** Hot flashes, insomnia, mood swings, loss of libido, depression.
*   **Men:** Low energy, loss of muscle mass, irritability.
*   **Benefits:** Reduces risk of osteoporosis and heart disease, aids insulin control, improves memory/concentration.`
      },
      {
        heading: 'Key Hormones & Compounds',
        body: `*   **DHEA:** Adrenal hormone. Precursor to testosterone/estrogen. Vitality & immunity.
*   **Testosterone:** Libido, energy, muscle strength, bone density.
*   **Estrogen/Progesterone:** Bone health, mood, metabolism.
*   **Growth Hormone (GH):** Cell regeneration, metabolism.
*   **MK-677 (Ibutamoren):** Oral compound stimulating GH secretion. (Experimental: muscle mass, sleep, fat burning).
*   **GH-related Peptides:** Stimulate natural GH release (Medical supervision required).`
      },
      {
        heading: 'WARNING',
        body: `Hormone replacement or use of modulators **MUST be individualized and supervised by an endocrinologist**. Indiscriminate use carries severe risks.`,
        highlight: true
      }
    ]
  },
  {
    id: 'psych',
    title: '2. Psychological Balance',
    icon: Brain,
    description: 'Managing depression, anxiety, and building resilience.',
    sections: [
      {
        heading: 'Sadness vs. Depression',
        body: `**Temporary Sadness:**
*   Short-lived, specific trigger.
*   Maintains hope and ability to feel pleasure.
*   Mild physical symptoms.
*   *Treatment:* Time, social support, self-care.

**Clinical Depression:**
*   Persistent (>2 weeks), intense.
*   Hopelessness, anhedonia (no pleasure), excessive guilt.
*   Severe physical symptoms (pain, sleep/appetite changes).
*   *Treatment:* **Professional intervention (Therapy/Meds) is required.**`
      },
      {
        heading: 'The Morning Routine',
        body: `1.  **Get up promptly:** Avoid "snooze" to preserve energy.
2.  **Positive Intentions:** Uplifting music, optimistic mindset immediately.
3.  **Anticipate Decisions:** Prepare clothes/breakfast the night before (reduce cognitive load).
4.  **Consolidate Ritual:** Consistency establishes healthy habits.
5.  **Focus on the Present:** Experience each day individually.`
      },
      {
        heading: 'Mental Techniques',
        body: `*   **"5 Minutes" Technique:** Commit to just 5 mins of a task to break procrastination.
*   **The Chaos Technique:** Create programmed discomfort (e.g., dump a drawer) to force immediate organizing action.
*   **Step-by-Step:** Focus *only* on the next micro-step (e.g., "put on shoes").
*   **Metabolic Activation:** Exercise to stimulate neurotransmitters and overcome apathy.
*   **Thought Journaling:** Record negative thoughts, trigger situations, and restructure them into realistic affirmations.
*   **Gratitude Practice:** Dedicate minutes daily to recognize blessings; mitigates negativity.`
      },
      {
        heading: 'Anxiety Crisis Management',
        body: `*   **Neural Reset:** Cover left eye, look up/right with right eye, deep breath. Activates prefrontal cortex.
*   **Box Breathing:** Inhale 4s, Hold 4s, Exhale 4s, Hold 4s.
*   **4-7-8 Breathing:** Inhale 4s, Hold 7s, Exhale 8s ("whoosh").
*   **Sensory Maneuver (Dive Reflex):** Splash face with ice water or hold ice cube. Stimulates vagus nerve, slows heart.
*   **The 5 Senses:** Name 5 things you see, 4 touch, 3 hear, 2 smell, 1 taste.`
      }
    ]
  },
  {
    id: 'activity',
    title: '3. Regular Physical Activity',
    icon: Dumbbell,
    description: 'Movement as medicine for body and mind.',
    sections: [
      {
        heading: 'Morning Stretching Routine (5 mins)',
        body: `1.  **Cervical Stretch:** Tilt head side to side to release neck tension.
2.  **Arm Stretch:** Cross arm over chest, pull gently (shoulder/arm muscles).
3.  **Spinal Twist:** Seated, rotate torso to each side (spinal mobility).`
      },
      {
        heading: 'Essential Exercises',
        body: `*   **Walking/Marching:** 10-20 mins daily. Deep breathing. Improves circulation.
*   **Gentle Squats:** 3 sets of 10 reps. Feet shoulder-width, push hips back.
*   **Leg Raises:** 2 sets of 15 reps/leg. Lying on back, raise extended leg.
*   **Child's Pose:** Kneel, lean forward, forehead on floor (30s).
*   **Seated Spinal Twist:** Legs extended, cross one over, twist.`
      },
      {
        heading: 'Post-COVID Rehab',
        body: `*   **Respiratory:** Diaphragmatic breathing, Prolonged exhalation, Incentive spirometer.
*   **Fatigue:** Use "Pacing" (alternate activity/rest). Do not push to exhaustion.
*   **Cognitive:** Puzzles, reading, memory games to fight "Brain Fog".`
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
        body: `*   **Schedule:** Consistent bed/wake times.
*   **Environment:** Dark, Cool (18-22°C), Silent.
*   **Avoid:** Screens (blue light), Caffeine/Nicotine, Heavy meals before bed.
*   **Pre-Sleep:** Warm bath (salts/chamomile) or 4-7-8 Breathing.`
      },
      {
        heading: 'Supplement Protocol (Consult Doctor)',
        body: `*   **L-Theanine:** Relaxation without sedation (Green tea).
*   **GABA:** Inhibitory neurotransmitter (Tranquility).
*   **5-HTP:** Serotonin precursor -> Melatonin.
*   **Inositol:** Brain function/anxiety reduction.
*   **Ashwagandha KSM-66:** Reduces cortisol.
*   **Valerian/Passionflower:** Calming herbs.
*   **Glycine:** Lowers body temp for sleep onset.
*   **Melatonin:** Regulates circadian rhythm.`
      }
    ]
  },
  {
    id: 'nutrition',
    title: '5. Optimized Nutrition',
    icon: Utensils,
    description: 'Intermittent Fasting & Metabolic Accelerators.',
    sections: [
      {
        heading: 'Weekly Fasting Plan: 16/8 (Standard)',
        body: `**Window:** Eat 12 PM - 8 PM.
*   **Mon:** Salad + Chicken + Brown Rice | Fruit Snack | Veggie Soup + Fish.
*   **Tue:** Omelet (Spinach/Mushrooms) | Yogurt + Chia | Lean Meat + Roast Veg.
*   **Wed:** Chickpea Salad + Tuna | Green Smoothie | Shredded Chicken + Pumpkin.
*   **Thu:** Rice + Lentils + Salad | Avocado | Grilled Fish + Broccoli.
*   **Fri:** Quinoa Salad + Chicken | Berries | Veggie Omelet.
*   **Sat:** Mediterranean Salad | Nuts | Lean Meat + Grilled Veg.
*   **Sun:** Chicken Curry + Rice | Tropical Smoothie | Light Soup.`
      },
      {
        heading: 'Weekly Fasting Plan: Night-Time (16/8)',
        body: `**Window:** Eat 10 AM - 6 PM (Skip Dinner).
*   **Mon:** Scrambled Eggs + Avocado | Salad + Chicken | Berries.
*   **Tue:** Green Smoothie | Baked Fish + Veg | Yogurt + Chia.
*   **Wed:** Veggie Omelet | Rice + Lentils | Avocado.
*   **Thu:** Boiled Eggs | Lean Meat + Pumpkin | Fruit Smoothie.
*   **Fri:** Whole-wheat Bread + Chickpea Paste | Chicken Curry | Nuts.
*   **Sat:** Protein Smoothie | Mediterranean Salad | Fruit.
*   **Sun:** Scrambled Eggs | Grilled Fish | Pineapple/Mint Smoothie.`
      },
      {
        heading: 'Advanced Protocol',
        body: `*   **Mon/Thu/Sat:** Classic 16/8.
*   **Tue/Sun:** Moderate 14/10.
*   **Wed:** Full 24h Fast (Liquids only).
*   **Fri:** 5:2 (Calorie restriction 500kcal).`
      },
      {
        heading: 'Supplements (Metabolic & Appetite)',
        body: `*   **Alpha-Lipoic Acid:** Insulin sensitivity.
*   **Zinc/Magnesium (ZMA):** Hormonal balance/Sleep.
*   **Chromium Picolinate:** Reduces sweet cravings.
*   **Spirulina/Glucomannan:** Satiety fibers.
*   **Apple Cider Vinegar:** 2 tbsp in water (Blood sugar control).
*   **Okralin:** Fat binder.
*   **L-Carnitine/CLA/Safflower Oil:** Fat metabolism.
*   **Yohimbine/Berberine:** Fat mobilization/Insulin sensitivity.`
      }
    ]
  },
  {
    id: 'liver',
    title: '6. Hepatic Balance',
    icon: Droplet,
    description: 'Detox protocols for the liver.',
    sections: [
      {
        heading: 'Detox Protocol',
        body: `*   **Hydration:** 3L water/day.
*   **Sweating:** Sauna/Exercise.
*   **Cleansing Drink:** 5ml Apple Cider Vinegar + 1/2 Lemon + 300ml Honey Water (3x/day).
*   **Juices:** Green (Kale/Apple), Purple (Beet/Carrot), Digestive (Pineapple/Mint).`
      },
      {
        heading: 'Weekly Liver Routine',
        body: `*   **Mon:** Warm lemon water + Green Juice.
*   **Tue:** ACV Protocol + Purple Juice + Sauna.
*   **Wed:** Aloe Vera Juice + Cucumber/Mint Juice.
*   **Thu:** Dandelion Tea + Pineapple/Turmeric Juice.
*   **Fri:** Lemon/Ginger Water + Watermelon/Mint Juice.
*   **Sat:** Green/Boldo Tea + Kiwi/Spinach Juice.
*   **Sun:** Turmeric/Honey Water + Carrot/Orange Juice.`
      },
      {
        heading: 'Supplements',
        body: `Milk Thistle (Silymarin), Dandelion, Chlorella/Spirulina, Curcumin.`
      }
    ]
  },
  {
    id: 'gut',
    title: '7. Gut Microbiota',
    icon: Microscope,
    description: 'Heal the gut, heal the body.',
    sections: [
      {
        heading: 'Repair Protocol',
        body: `1.  **Probiotics:** Kefir, Yogurt, Kombucha, Sauerkraut.
2.  **Prebiotics:** Garlic, Onion, Banana, Oats, Flaxseed.
3.  **Repair:** Glutamine, Zinc, Collagen, Omega-3.
4.  **Protect:** Red berries, Green tea, Turmeric.`
      },
      {
        heading: 'Weekly Meal Plan (Microbiota)',
        body: `*   **Mon:** Yogurt+Kefir+Berries | Salad+Chicken | Veggie Soup+Turmeric.
*   **Tue:** Green Smoothie | Quinoa+Chickpeas | Fish+Sweet Potato.
*   **Wed:** Whole-wheat Bread+Avocado | Lentils+Rice | Spinach Omelet.
*   **Thu:** Kefir+Banana+Oats | Mediterranean Salad | Pumpkin Soup.
*   **Fri:** Pineapple/Mint Smoothie | Beans+Rice+Meat | Veggie Soup.
*   **Sat:** Yogurt+Granola | Quinoa+Salmon | Sweet Potato Cream.
*   **Sun:** Beet Smoothie | Rice+Lentils | Light Soup+Chamomile.`
      },
      {
        heading: 'Parasite Cleanse',
        body: `**Foods:** Garlic, Pumpkin Seeds, Papaya Seeds, Coconut Oil.
**Herbs:** Wormseed (Mastruz), Artemisia, Black Walnut, Clove, Oregano Oil.
**Colloidal Silver:** Antimicrobial (Strict supervision).
**Medical:** Annual broad-spectrum antiparasitic drugs.`
      }
    ]
  },
  {
    id: 'alkaline',
    title: '8. Body Alkalinization',
    icon: BatteryCharging,
    description: 'Balancing pH for health.',
    sections: [
      {
        heading: 'Methods',
        body: `*   **Sun-Charged Water:** Glass bottle, covered with cloth, 6 hours in sun. Add Himalayan salt + Lemon drops.
*   **Baking Soda:** 1 tsp in water (neutralizes acidity/heartburn). Use moderately.
*   **Cilantro:** Heavy metal detox, dissolves kidney stones.`
      },
      {
        heading: 'Why?',
        body: `Acidosis leads to bone loss (calcium mobilization), muscle loss, inflammation, and immune suppression.`
      }
    ]
  },
  {
    id: 'hydration',
    title: '9. Adequate Hydration',
    icon: Waves,
    description: 'The foundation of all pillars.',
    sections: [
      {
        heading: 'Strategy',
        body: `*   **Goal:** 2.5L - 3L daily.
*   **Warning:** Thirst is a late sign of dehydration.
*   **Benefits:** Prevents blood thickening (Stroke/Thrombosis risk), aids digestion/kidneys, improves cognitive function.`
      }
    ]
  }
];

export const BEAR_METHOD_SUMMARY = pillars.map(p => 
  `${p.title}\n${p.sections.map(s => `### ${s.heading}\n${s.body}`).join('\n')}`
).join('\n\n');
