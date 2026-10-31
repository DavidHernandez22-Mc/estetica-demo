import type { Lang } from "./site";

export type Zone = "face" | "skin" | "body" | "bust" | "eyelids" | "nose";
export type Goal = "rejuvenate" | "harmonize" | "contour" | "skin";
export type Line = "non" | "surg";

type L = Record<Lang, string>;

export type Milestone = { day: string; title: L; text: L };

export type Procedure = {
  id: string;
  line: Line;
  name: L;
  desc: L;
  recovery: L;
  sessions: L;
  /** What the price refers to (per session, per syringe…). */
  unit: L;
  copMin: number;
  copMax: number;
  zones: Zone[];
  goals: Goal[];
  /** Recommended stay in Medellín for visitors, in days. */
  stay: [number, number];
  timeline: Milestone[];
};

const assess: Milestone = {
  day: "1",
  title: { es: "Valoración presencial", en: "In-person consultation" },
  text: {
    es: "Examen, preguntas sin afán y, si hace falta, exámenes de laboratorio.",
    en: "Examination, unhurried questions and lab tests if they are needed.",
  },
};

export const procedures: Procedure[] = [
  {
    id: "botox",
    line: "non",
    name: { es: "Toxina botulínica", en: "Botulinum toxin" },
    desc: {
      es: "Relaja los músculos que marcan arrugas de expresión en frente, entrecejo y patas de gallo. Bien dosificada, suaviza sin quitarte gestos.",
      en: "Relaxes the muscles behind expression lines on the forehead, frown area and crow’s feet. Dosed with restraint, it softens without freezing your face.",
    },
    recovery: {
      es: "Vida normal el mismo día; sin ejercicio intenso por 24 h",
      en: "Back to normal the same day; no hard exercise for 24 h",
    },
    sessions: {
      es: "1 sesión; dura de 4 a 6 meses",
      en: "1 session; lasts 4 to 6 months",
    },
    unit: { es: "por zona tratada", en: "per area treated" },
    copMin: 900_000,
    copMax: 1_600_000,
    zones: ["face"],
    goals: ["rejuvenate", "harmonize"],
    stay: [2, 3],
    timeline: [
      assess,
      {
        day: "1",
        title: { es: "Aplicación", en: "Treatment" },
        text: { es: "Unos 20 minutos, con anestesia tópica si la necesitas.", en: "About 20 minutes, with numbing cream if you want it." },
      },
      {
        day: "2–3",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "Puedes volar al día siguiente. El control de los 15 días se hace por video.", en: "You can fly the next day. The 15-day check-in happens by video." },
      },
    ],
  },
  {
    id: "fillers",
    line: "non",
    name: { es: "Rellenos de ácido hialurónico", en: "Hyaluronic acid fillers" },
    desc: {
      es: "Devuelven volumen o definen labios, pómulos, mentón u ojeras. Es reabsorbible: el cuerpo lo elimina con el tiempo.",
      en: "Restore volume or define lips, cheeks, chin or under-eyes. It is reabsorbable: your body clears it over time.",
    },
    recovery: {
      es: "Posible inflamación o morados por 2 a 5 días",
      en: "Possible swelling or bruising for 2 to 5 days",
    },
    sessions: {
      es: "1 sesión y un retoque opcional a las 3 semanas",
      en: "1 session, optional touch-up at 3 weeks",
    },
    unit: { es: "por jeringa", en: "per syringe" },
    copMin: 1_200_000,
    copMax: 2_400_000,
    zones: ["face"],
    goals: ["harmonize", "rejuvenate"],
    stay: [3, 5],
    timeline: [
      assess,
      {
        day: "1–2",
        title: { es: "Aplicación", en: "Treatment" },
        text: { es: "Entre 30 y 45 minutos según las zonas.", en: "30 to 45 minutes depending on the areas." },
      },
      {
        day: "3",
        title: { es: "Revisión", en: "Follow-up" },
        text: { es: "Revisamos inflamación y simetría antes de que te vayas.", en: "We check swelling and symmetry before you leave." },
      },
      {
        day: "3–5",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "El retoque, si hace falta, puede esperar a tu próxima visita.", en: "Any touch-up can wait for your next visit." },
      },
    ],
  },
  {
    id: "nose-filler",
    line: "non",
    name: { es: "Rinomodelación con ácido hialurónico", en: "Non-surgical nose reshaping" },
    desc: {
      es: "Corrige pequeñas irregularidades del dorso o la punta sin cirugía. No reduce el tamaño de la nariz y no reemplaza una rinoplastia.",
      en: "Smooths small bumps on the bridge or lifts the tip without surgery. It cannot make a nose smaller and does not replace rhinoplasty.",
    },
    recovery: { es: "Leve inflamación 1 a 3 días", en: "Mild swelling for 1 to 3 days" },
    sessions: { es: "1 sesión; dura de 9 a 12 meses", en: "1 session; lasts 9 to 12 months" },
    unit: { es: "por sesión", en: "per session" },
    copMin: 1_500_000,
    copMax: 2_300_000,
    zones: ["nose"],
    goals: ["harmonize"],
    stay: [3, 4],
    timeline: [
      assess,
      {
        day: "1–2",
        title: { es: "Aplicación", en: "Treatment" },
        text: { es: "Unos 30 minutos con anestesia tópica.", en: "About 30 minutes with numbing cream." },
      },
      {
        day: "3–4",
        title: { es: "Revisión y alta", en: "Check and clearance" },
        text: { es: "Control presencial y luego seguimiento por video.", en: "An in-person check, then follow-up by video." },
      },
    ],
  },
  {
    id: "biostim",
    line: "non",
    name: { es: "Bioestimuladores de colágeno", en: "Collagen biostimulators" },
    desc: {
      es: "Estimulan a tu piel para que produzca colágeno propio. El cambio es gradual, de 2 a 3 meses, y se nota en firmeza más que en volumen.",
      en: "Prompt your skin to make its own collagen. The change is gradual, over 2 to 3 months, and shows as firmness rather than volume.",
    },
    recovery: { es: "Inflamación leve 1 a 3 días", en: "Mild swelling for 1 to 3 days" },
    sessions: { es: "2 o 3 sesiones, cada 4 a 6 semanas", en: "2 or 3 sessions, 4 to 6 weeks apart" },
    unit: { es: "por sesión", en: "per session" },
    copMin: 1_800_000,
    copMax: 3_400_000,
    zones: ["face", "skin", "body"],
    goals: ["rejuvenate", "skin", "contour"],
    stay: [3, 5],
    timeline: [
      assess,
      {
        day: "2",
        title: { es: "Primera sesión", en: "First session" },
        text: { es: "Las siguientes pueden hacerse en otro viaje o en tu país.", en: "Later sessions can happen on another trip or back home." },
      },
      {
        day: "3–5",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "Te vas con un plan escrito para las sesiones pendientes.", en: "You leave with a written plan for the remaining sessions." },
      },
    ],
  },
  {
    id: "laser",
    line: "non",
    name: { es: "Láser y luz pulsada", en: "Laser and IPL" },
    desc: {
      es: "Trabaja manchas, textura, poros y vasitos visibles. El tipo de láser depende de tu piel; no todos sirven para pieles morenas.",
      en: "Treats pigmentation, texture, pores and visible veins. The right device depends on your skin — not every laser is safe for darker skin tones.",
    },
    recovery: {
      es: "Enrojecimiento de 1 a 7 días según la intensidad",
      en: "Redness for 1 to 7 days depending on intensity",
    },
    sessions: { es: "3 a 5 sesiones, cada 4 semanas", en: "3 to 5 sessions, 4 weeks apart" },
    unit: { es: "por sesión", en: "per session" },
    copMin: 650_000,
    copMax: 2_200_000,
    zones: ["skin", "face"],
    goals: ["skin", "rejuvenate"],
    stay: [4, 7],
    timeline: [
      assess,
      {
        day: "2",
        title: { es: "Sesión", en: "Session" },
        text: { es: "Con protección ocular y enfriamiento de la piel.", en: "With eye protection and skin cooling." },
      },
      {
        day: "4–7",
        title: { es: "Revisión y alta", en: "Check and clearance" },
        text: { es: "Verificamos la piel antes de exponerla al sol del viaje.", en: "We check your skin before it meets travel sun." },
      },
    ],
  },
  {
    id: "peel",
    line: "non",
    name: { es: "Peeling químico", en: "Chemical peel" },
    desc: {
      es: "Renueva las capas superficiales de la piel para mejorar manchas, acné leve y textura. La profundidad se elige según tu piel y tu agenda.",
      en: "Renews the outer layers of skin to improve pigmentation, mild acne and texture. Depth is chosen for your skin and your schedule.",
    },
    recovery: { es: "Descamación de 0 a 5 días", en: "Flaking for 0 to 5 days" },
    sessions: { es: "3 a 6 sesiones, cada 2 a 4 semanas", en: "3 to 6 sessions, 2 to 4 weeks apart" },
    unit: { es: "por sesión", en: "per session" },
    copMin: 350_000,
    copMax: 900_000,
    zones: ["skin"],
    goals: ["skin"],
    stay: [3, 6],
    timeline: [
      assess,
      {
        day: "1–2",
        title: { es: "Sesión", en: "Session" },
        text: { es: "De 30 a 40 minutos.", en: "30 to 40 minutes." },
      },
      {
        day: "3–6",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "Cuando la piel termina de descamar.", en: "Once the skin has finished flaking." },
      },
    ],
  },
  {
    id: "skincare",
    line: "non",
    name: { es: "Tratamientos médicos de piel", en: "Medical skin treatments" },
    desc: {
      es: "Skinboosters, microagujas y radiofrecuencia para hidratación, firmeza y cicatrices de acné. Resultados progresivos y discretos.",
      en: "Skin boosters, microneedling and radiofrequency for hydration, firmness and acne scarring. Gradual, discreet results.",
    },
    recovery: { es: "De 0 a 2 días de enrojecimiento", en: "0 to 2 days of redness" },
    sessions: { es: "3 a 4 sesiones, cada 4 semanas", en: "3 to 4 sessions, 4 weeks apart" },
    unit: { es: "por sesión", en: "per session" },
    copMin: 450_000,
    copMax: 1_500_000,
    zones: ["skin", "face", "body"],
    goals: ["skin", "rejuvenate"],
    stay: [2, 4],
    timeline: [
      assess,
      {
        day: "2",
        title: { es: "Sesión", en: "Session" },
        text: { es: "Entre 45 y 60 minutos.", en: "45 to 60 minutes." },
      },
      {
        day: "2–4",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "Con una rutina de cuidado escrita para casa.", en: "With a written at-home skincare routine." },
      },
    ],
  },
  {
    id: "rhinoplasty",
    line: "surg",
    name: { es: "Rinoplastia", en: "Rhinoplasty" },
    desc: {
      es: "Cambia la forma de la nariz y, si hace falta, mejora la respiración. La inflamación de la punta tarda en irse: el resultado final se ve hacia los 12 meses.",
      en: "Reshapes the nose and, where needed, improves breathing. Tip swelling is slow to settle: the final result shows at around 12 months.",
    },
    recovery: {
      es: "Férula 7 días; vida social a las 2–3 semanas",
      en: "Splint for 7 days; socially comfortable at 2–3 weeks",
    },
    sessions: { es: "1 cirugía, 2 a 3 horas", en: "1 surgery, 2 to 3 hours" },
    unit: { es: "honorarios, clínica y anestesia", en: "surgeon, facility and anaesthesia" },
    copMin: 13_000_000,
    copMax: 21_000_000,
    zones: ["nose"],
    goals: ["harmonize"],
    stay: [10, 14],
    timeline: [
      assess,
      {
        day: "2",
        title: { es: "Cirugía", en: "Surgery" },
        text: { es: "Con anestesiólogo presente de principio a fin.", en: "With an anaesthesiologist present from start to finish." },
      },
      {
        day: "3",
        title: { es: "Primer control", en: "First check-up" },
        text: { es: "La enfermera te visita en tu alojamiento.", en: "Your nurse visits you where you are staying." },
      },
      {
        day: "8",
        title: { es: "Retiro de férula", en: "Splint off" },
        text: { es: "Primer vistazo, todavía con inflamación.", en: "A first look, still swollen." },
      },
      {
        day: "10–14",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "Controles siguientes por video a 1, 3, 6 y 12 meses.", en: "Further check-ins by video at 1, 3, 6 and 12 months." },
      },
    ],
  },
  {
    id: "blepharoplasty",
    line: "surg",
    name: { es: "Blefaroplastia", en: "Eyelid surgery" },
    desc: {
      es: "Retira exceso de piel o bolsas de los párpados superiores, inferiores o ambos. Abre la mirada; no cambia la forma de tus ojos.",
      en: "Removes excess skin or bags from the upper lids, lower lids or both. It opens up the eyes without changing their shape.",
    },
    recovery: {
      es: "Puntos a los 5–7 días; morados hasta 2 semanas",
      en: "Stitches out at 5–7 days; bruising up to 2 weeks",
    },
    sessions: { es: "1 cirugía, 1 a 2 horas", en: "1 surgery, 1 to 2 hours" },
    unit: { es: "honorarios, clínica y anestesia", en: "surgeon, facility and anaesthesia" },
    copMin: 6_500_000,
    copMax: 11_000_000,
    zones: ["eyelids"],
    goals: ["rejuvenate"],
    stay: [8, 10],
    timeline: [
      assess,
      {
        day: "2",
        title: { es: "Cirugía", en: "Surgery" },
        text: { es: "Ambulatoria: duermes en tu alojamiento.", en: "Outpatient: you sleep at your accommodation." },
      },
      {
        day: "3",
        title: { es: "Primer control", en: "First check-up" },
        text: { es: "Revisión de inflamación y cuidados de los ojos.", en: "Swelling check and eye-care instructions." },
      },
      {
        day: "7",
        title: { es: "Retiro de puntos", en: "Stitches out" },
        text: { es: "Rápido, con poca molestia.", en: "Quick, with little discomfort." },
      },
      {
        day: "8–10",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "Gafas oscuras recomendadas para el viaje.", en: "Sunglasses recommended for the flight." },
      },
    ],
  },
  {
    id: "breast",
    line: "surg",
    name: { es: "Mamoplastia", en: "Breast surgery" },
    desc: {
      es: "Aumento, reducción o levantamiento según lo que buscas y lo que tu cuerpo permite. Los implantes no son para siempre: te contamos cuándo revisarlos.",
      en: "Augmentation, reduction or lift, depending on your goals and what your body allows. Implants are not lifelong — we explain when to review them.",
    },
    recovery: {
      es: "Trabajo de oficina a los 7–10 días; ejercicio a las 6 semanas",
      en: "Desk work at 7–10 days; exercise at 6 weeks",
    },
    sessions: { es: "1 cirugía, 2 a 3 horas", en: "1 surgery, 2 to 3 hours" },
    unit: { es: "honorarios, clínica y anestesia", en: "surgeon, facility and anaesthesia" },
    copMin: 14_000_000,
    copMax: 24_000_000,
    zones: ["bust"],
    goals: ["contour", "harmonize"],
    stay: [10, 14],
    timeline: [
      assess,
      {
        day: "2",
        title: { es: "Cirugía", en: "Surgery" },
        text: { es: "Una noche de observación si tu cirujano lo indica.", en: "One night of observation if your surgeon advises it." },
      },
      {
        day: "3–4",
        title: { es: "Primer control", en: "First check-up" },
        text: { es: "Revisión de drenajes y del brasier posquirúrgico.", en: "Drain and post-op bra check." },
      },
      {
        day: "8",
        title: { es: "Retiro de puntos", en: "Stitches out" },
        text: { es: "Empiezas a caminar más y a moverte con libertad.", en: "You start walking more and moving freely." },
      },
      {
        day: "10–14",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "Con medias de compresión y pausas para caminar en el vuelo.", en: "With compression socks and walking breaks on the flight." },
      },
    ],
  },
  {
    id: "tummy",
    line: "surg",
    name: { es: "Abdominoplastia", en: "Tummy tuck" },
    desc: {
      es: "Retira piel sobrante y repara la pared abdominal, frecuente tras embarazos o grandes pérdidas de peso. Deja una cicatriz baja que tarda meses en aclarar.",
      en: "Removes loose skin and repairs the abdominal wall, often after pregnancy or major weight loss. It leaves a low scar that takes months to fade.",
    },
    recovery: {
      es: "Trabajo de oficina a las 2–3 semanas; ejercicio a las 6–8",
      en: "Desk work at 2–3 weeks; exercise at 6–8",
    },
    sessions: { es: "1 cirugía, 3 a 4 horas", en: "1 surgery, 3 to 4 hours" },
    unit: { es: "honorarios, clínica y anestesia", en: "surgeon, facility and anaesthesia" },
    copMin: 16_000_000,
    copMax: 26_000_000,
    zones: ["body"],
    goals: ["contour"],
    stay: [14, 21],
    timeline: [
      assess,
      {
        day: "2",
        title: { es: "Cirugía", en: "Surgery" },
        text: { es: "Con una noche de hospitalización.", en: "With one night in hospital." },
      },
      {
        day: "3–5",
        title: { es: "Controles", en: "Check-ups" },
        text: { es: "Enfermera diaria, drenajes y caminatas cortas.", en: "Daily nurse visits, drains and short walks." },
      },
      {
        day: "10",
        title: { es: "Retiro de puntos", en: "Stitches out" },
        text: { es: "Revisión de la cicatriz y de la faja.", en: "Scar and compression garment check." },
      },
      {
        day: "14–21",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "Solo con aprobación del cirujano y del riesgo de trombosis evaluado.", en: "Only with your surgeon’s sign-off and a clot-risk assessment." },
      },
    ],
  },
  {
    id: "lipo",
    line: "surg",
    name: { es: "Liposucción", en: "Liposuction" },
    desc: {
      es: "Reduce depósitos de grasa localizada que no ceden con dieta y ejercicio. No es un método para bajar de peso y no trata la flacidez.",
      en: "Reduces stubborn fat pockets that don’t respond to diet and exercise. It is not a weight-loss method and does not tighten loose skin.",
    },
    recovery: {
      es: "Faja de 4 a 6 semanas; trabajo de oficina a los 7–10 días",
      en: "Compression for 4 to 6 weeks; desk work at 7–10 days",
    },
    sessions: { es: "1 cirugía, 2 a 4 horas", en: "1 surgery, 2 to 4 hours" },
    unit: { es: "honorarios, clínica y anestesia", en: "surgeon, facility and anaesthesia" },
    copMin: 11_000_000,
    copMax: 22_000_000,
    zones: ["body"],
    goals: ["contour"],
    stay: [10, 14],
    timeline: [
      assess,
      {
        day: "2",
        title: { es: "Cirugía", en: "Surgery" },
        text: { es: "Volumen extraído dentro de márgenes seguros.", en: "Volume removed within safe limits." },
      },
      {
        day: "3–7",
        title: { es: "Controles", en: "Check-ups" },
        text: { es: "Enfermera, faja y drenaje linfático indicado.", en: "Nurse visits, compression and prescribed lymphatic drainage." },
      },
      {
        day: "10–14",
        title: { es: "Alta para volar", en: "Cleared to fly" },
        text: { es: "Con medias de compresión y pausas para caminar.", en: "With compression socks and walking breaks." },
      },
    ],
  },
];

export const zones: Zone[] = ["face", "skin", "body", "bust", "eyelids", "nose"];
export const goals: Goal[] = ["rejuvenate", "harmonize", "contour", "skin"];

export function getProcedure(id: string) {
  return procedures.find((p) => p.id === id);
}
