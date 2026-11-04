import type { Goal, Zone } from "./procedures";
import type { Lang } from "./site";

const es = {
  meta: {
    title: "Lumen Clínica Estética · Medicina estética y cirugía plástica en Medellín",
    description:
      "Medicina estética y cirugía plástica en El Poblado, Medellín. Precios de referencia en COP y USD, planificador de viaje para pacientes internacionales y valoración virtual. Sitio de demostración.",
    ogAlt: "Lumen Clínica Estética, Medellín",
  },
  demo: {
    text: "Sitio de demostración diseñado por David",
    ask: "¿Quieres una así para tu clínica?",
    cta: "Escríbeme",
  },
  nav: {
    label: "Principal",
    procedures: "Procedimientos",
    plan: "Arma tu plan",
    travel: "Viaje",
    team: "Equipo",
    faq: "Preguntas",
    cta: "Valoración virtual",
    menu: "Menú",
    close: "Cerrar",
    langLabel: "Idioma",
    home: "Lumen, inicio",
  },
  hero: {
    title: "Lo que eres, con mejor luz.",
    kicker: "Medicina estética y cirugía plástica en El Poblado, Medellín.",
    lead:
      "Te decimos qué puede hacer cada procedimiento, qué no puede hacer y cuánto cuesta, antes de que decidas nada.",
    plan: "Arma tu plan",
    virtual: "Valoración virtual",
    cap1: "Retrato ilustrativo de banco libre. No es paciente.",
    cap2: "El valle de Aburrá visto desde El Poblado",
    alt1: "Retrato de una mujer de rostro sereno con gotas de sérum en la mejilla, sobre un fondo color arena",
    alt2: "Vista del valle de Medellín con edificios de El Poblado y montañas al fondo",
    alt3: "Primer plano de la textura natural de la piel",
    note: "Atención en español e inglés · Solo mayores de 18 años",
  },
  procedures: {
    title: "Lo que hacemos y lo que cuesta",
    lead:
      "Precios «desde» con honorarios incluidos, para que llegues a la valoración sabiendo el rango. El valor final lo define tu médico.",
    non: "Medicina estética no quirúrgica",
    surg: "Cirugía plástica",
    from: "Desde",
    recovery: "Recuperación típica",
    sessions: "Sesiones",
    trm: "TRM de referencia",
    note:
      "Todo procedimiento tiene riesgos, incluso los no quirúrgicos, y requiere valoración médica previa. Los precios son orientativos y pueden cambiar.",
    alt1: "Sala de tratamiento luminosa con camilla, espejo iluminado y ventanal hacia un patio con palmeras",
  },
  plan: {
    title: "Arma tu plan",
    lead:
      "Elige las zonas que te interesan y lo que te gustaría lograr. Te mostramos lo que suele considerarse, con tiempos y precios de referencia.",
    zones: "Zonas",
    goals: "Objetivos",
    disclaimer:
      "Esto es una orientación general, no una indicación médica. Solo la valoración con un especialista define qué es adecuado para ti, y a veces la respuesta honesta es no hacer nada.",
    empty: "Elige al menos una zona o un objetivo para ver opciones.",
    none: "Ningún procedimiento coincide con esa combinación. Prueba otra o pide una valoración.",
    count: (n: number) => (n === 1 ? "1 opción para conversar" : `${n} opciones para conversar`),
    recovery: "Recuperación",
    sessions: "Sesiones",
    price: "Rango",
    send: "Enviar mi plan por WhatsApp",
    clear: "Borrar selección",
    msgTitle: "— Arma tu plan —",
    msgZones: "Zonas",
    msgGoals: "Objetivos",
    msgList: "Procedimientos que me interesan",
    hint: (zone: string, goals: string) => `${zone}: con estos objetivos no hay opciones. Prueba con «${goals}».`,
    surgical: "Quirúrgico",
    nonSurgical: "No quirúrgico",
  },
  safe: {
    title: "Cómo elegir una clínica segura",
    lead:
      "Aunque no sea con nosotros. Estas cinco comprobaciones protegen tu salud más que cualquier foto de resultados.",
    rows: [
      {
        t: "Un cirujano plástico de verdad",
        d: "Pide el nombre completo y verifica que su especialidad sea cirugía plástica, no un curso o un diplomado. En Colombia puedes buscarlo en el ReTHUS, el registro público del talento humano en salud.",
      },
      {
        t: "Un quirófano habilitado",
        d: "Una cirugía se hace en una institución habilitada, nunca en un consultorio, un spa o una casa. Pregunta dónde te van a operar y consulta el lugar en el REPS del Ministerio de Salud.",
      },
      {
        t: "Un anestesiólogo presente",
        d: "De principio a fin, dedicado solo a ti. Si te dicen que el mismo cirujano se encarga de sedarte, es una señal para irte.",
      },
      {
        t: "Una valoración antes del precio",
        d: "Nadie puede decirte qué necesitas por una foto. La valoración revisa tu historia clínica y, antes de una cirugía, pide exámenes.",
      },
      {
        t: "Un precio que tenga sentido",
        d: "Un valor muy por debajo del promedio casi siempre significa que algo falta: el anestesiólogo, el quirófano, los controles o la calidad del material.",
      },
    ],
    alts: [
      "Cirujano con mascarilla, gafas de aumento y luz frontal durante un procedimiento",
      "Quirófano iluminado con mesa de cirugía y equipos de monitoreo",
      "Máquina de anestesia junto a una pared verde",
      "Consultorio luminoso con escritorio, sillón amarillo y camilla al fondo",
      "Vitrinas y gabinetes blancos con insumos médicos en una sala de tratamiento",
    ],
  },
  travel: {
    title: "Planea tu viaje",
    lead:
      "Si vienes de Estados Unidos, Canadá o Europa, elige el procedimiento y te mostramos cuántos días suele recomendarse quedarse en Medellín y cómo se reparten.",
    choose: "Procedimiento",
    stay: (a: number, b: number) => `Quédate entre ${a} y ${b} días`,
    stayNote:
      "Es lo habitual. Tu cirujano confirma la fecha de alta para volar después de verte.",
    day: "Día",
    prev: "Anterior",
    next: "Siguiente",
    timeline: "Línea de tiempo",
    includesTitle: "Qué incluye el acompañamiento",
    includes: [
      ["Traslados", "Aeropuerto José María Córdova, alojamiento y clínica, en carro privado."],
      ["Enfermera de seguimiento", "Visitas en tu alojamiento los días después del procedimiento."],
      ["Intérprete", "Inglés en todas las citas. Otros idiomas, con aviso previo."],
      ["Controles a distancia", "Videollamadas con tu médico cuando ya estés en casa."],
    ],
    includesNote:
      "El acompañamiento se cotiza aparte. Vuelos y alojamiento los eliges tú; te sugerimos zonas cercanas a la clínica.",
    country: "¿Desde qué país viajas?",
    countryPh: "Ej.: Estados Unidos",
    month: "Mes tentativo de llegada",
    send: "Pedir cotización por WhatsApp",
    msgTitle: "— Planea tu viaje —",
    msgProc: "Procedimiento",
    msgStay: "Estadía sugerida",
    msgCountry: "País",
    msgMonth: "Llegada tentativa",
    days: "días",
    pending: "Por definir",
    bandCap: "Aeropuerto Internacional José María Córdova, donde empieza el viaje a Medellín.",
    bandAlt: "Terminal y torre de control del aeropuerto José María Córdova bajo un cielo despejado",
  },
  team: {
    title: "Quién te atiende",
    note: "Personajes ficticios para la demo. Cada imagen muestra un instrumento de la especialidad, no a un médico real.",
    people: [
      {
        name: "Dr. Andrés Restrepo",
        role: "Cirujano plástico",
        quote: "Prefiero decir que no en la valoración a prometer algo que una cirugía no puede dar.",
      },
      {
        name: "Dra. Valentina Ochoa",
        role: "Médica estética",
        quote: "Lo mejor es que nadie sepa qué te hiciste. Solo que te ves descansada.",
      },
      {
        name: "Dra. Camila Arango",
        role: "Dermatóloga",
        quote: "La piel tiene memoria. La cuidamos durante meses, no en una sesión.",
      },
      {
        name: "Dr. Santiago Mejía",
        role: "Anestesiólogo",
        quote: "Mi trabajo empieza antes de la cirugía y termina cuando despiertas con calma.",
      },
    ],
    alts: [
      "Mano con guante estéril ajustando un foco quirúrgico",
      "Jeringa con aguja fina en un consultorio",
      "Dermatoscopio de mano sobre un fondo ocre",
      "Máquina de anestesia con monitores en un quirófano",
    ],
  },
  stories: {
    title: "Lo que cuentan",
    label: "Ejemplo ilustrativo para la demo",
    photoNote: "Habitación de recuperación ilustrativa, de banco libre. No pertenece a la clínica.",
    smallNote: "Foto de banco libre. No son pacientes.",
    alt: "Habitación de recuperación con cama, sillón y ventana luminosa",
    altSmall: "Profesional de salud tomando las manos de una paciente mayor",
    items: [
      {
        quote:
          "Llegué con una lista de preguntas y me fui con respuestas honestas sobre lo que mi nariz podía ser y lo que no.",
        who: "Jennifer",
        place: "Houston, Estados Unidos",
        proc: "Rinoplastia",
      },
      {
        quote:
          "Tenía miedo de quedar congelada. La doctora me explicó dosis y tiempos, y me dijo que menos era mejor. A los quince días me revisó otra vez.",
        who: "Mariana",
        place: "Medellín, Colombia",
        proc: "Toxina botulínica",
      },
      {
        quote:
          "Lo que más valoré fue la videollamada de control a las tres semanas, ya en casa, con la misma intérprete.",
        who: "Claire",
        place: "Toronto, Canadá",
        proc: "Blefaroplastia",
      },
    ],
  },
  assess: {
    title: "Valoración virtual",
    lead:
      "Cinco pasos cortos. No te pedimos fotos ni datos médicos: eso lo conversas con el médico. Al final se abre WhatsApp con tu mensaje listo.",
    stepOf: (a: number, b: number) => `Paso ${a} de ${b}`,
    back: "Atrás",
    next: "Continuar",
    send: "Abrir WhatsApp con mi mensaje",
    edit: "Editar respuestas",
    q1: "¿Qué procedimiento te interesa?",
    notSure: "Aún no lo sé, quiero orientación",
    q2: "¿Desde qué país nos escribes?",
    countryPh: "Ej.: Canadá",
    q3: "¿Cuándo piensas venir?",
    from: "Desde",
    to: "Hasta",
    noDates: "Aún no tengo fechas",
    local: "Vivo en Colombia",
    q4: "¿En qué idioma prefieres que te atendamos?",
    langs: ["Español", "English", "Português", "Français", "Otro, con intérprete"],
    q5: "¿Cómo te llamas y cómo te contactamos?",
    name: "Nombre",
    contact: "Correo o número de WhatsApp (opcional)",
    adult: "Confirmo que tengo 18 años o más",
    summary: "Revisa tu mensaje",
    required: "Completa este paso para continuar.",
    adultRequired: "Los servicios son solo para mayores de 18 años.",
    msgTitle: "— Valoración virtual —",
    msgProc: "Procedimiento",
    msgCountry: "País",
    msgDates: "Fechas tentativas",
    msgLang: "Idioma",
    msgName: "Nombre",
    msgContact: "Contacto",
    noPhotos: "Sin fotos ni historia clínica por este medio.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cuántos días debo quedarme en Medellín?",
        a: "Depende del procedimiento: de 2 a 5 días para tratamientos no quirúrgicos y de 8 a 21 días para cirugía. El planificador de viaje te da el rango habitual, y tu cirujano confirma la fecha de alta para volar después de verte.",
      },
      {
        q: "¿Cómo es la recuperación?",
        a: "Los tratamientos no quirúrgicos suelen permitir volver a tu rutina el mismo día o en pocos días. En cirugía hay inflamación, morados y molestia controlada con medicamentos; te damos indicaciones por escrito y una enfermera te acompaña los primeros días.",
      },
      {
        q: "¿Qué riesgos tienen los procedimientos?",
        a: "Todos tienen riesgos. En los no quirúrgicos, morados, asimetrías o reacciones; en cirugía, además, infección, sangrado, trombosis o cicatrices desfavorables. En la valoración revisamos tus riesgos personales y te los explicamos por escrito antes de firmar nada.",
      },
      {
        q: "¿Tienen opciones de financiación?",
        a: "Puedes pagar por etapas y, para pacientes en Colombia, hay opciones de crédito con entidades financieras sujetas a aprobación. Te explicamos las alternativas en la valoración, sin compromiso.",
      },
      {
        q: "¿En qué idiomas atienden?",
        a: "En español e inglés en todas las citas. Para portugués, francés u otros idiomas coordinamos un intérprete con anticipación.",
      },
      {
        q: "¿Puedo hacer los controles a distancia?",
        a: "Sí, después del alta. Los controles de 1, 3, 6 y 12 meses pueden hacerse por videollamada, y si algo requiere revisión presencial te ayudamos a encontrar un especialista cerca de ti.",
      },
      {
        q: "¿Puedo combinar procedimientos?",
        a: "A veces. Combinar alarga la cirugía y la recuperación, y no siempre es lo más seguro. Tu cirujano y el anestesiólogo lo deciden juntos después de revisar tu caso.",
      },
      {
        q: "¿Hay edad mínima?",
        a: "Sí. Todos nuestros servicios son solo para personas mayores de 18 años.",
      },
    ],
  },
  contact: {
    sentence:
      "¿Tienes una pregunta que no está aquí? Escríbenos y te responde una persona, no un bot.",
    question: "¿Por dónde empezamos?",
    virtual: "Hacer la valoración virtual",
    wa: "Escribir por WhatsApp",
    city: "El Poblado, Medellín · Respuesta en horario laboral, hora de Colombia",
    alt: "Pasillo claro de una clínica con puertas de consultorio",
  },
  footer: {
    place: ["Lumen Clínica Estética", "El Poblado, Medellín", "Antioquia, Colombia"],
    hoursTitle: "Horario",
    hours: ["Lunes a viernes, 8:00–18:00", "Sábados, 9:00–13:00"],
    navTitle: "En esta página",
    noticeTitle: "Antes de decidir",
    notice: [
      "Servicios solo para mayores de 18 años.",
      "Todo procedimiento tiene riesgos y requiere valoración médica.",
      "Ningún resultado está garantizado.",
    ],
    creditsTitle: "Créditos de imagen",
    creditsNote:
      "Fotografías ilustrativas de bancos libres, recortadas y redimensionadas para esta web. Los espacios no pertenecen a la clínica, que es ficticia, y ninguna persona que aparece es paciente ni médico de ella.",
    legal:
      "Lumen Clínica Estética es una clínica ficticia. Sitio de demostración diseñado por David. Sin registros, habilitaciones ni certificaciones reales.",
    top: "Volver arriba",
  },
  wa: { float: "Escribir por WhatsApp sobre esta demo" },
  zones: {
    face: "Rostro",
    skin: "Piel",
    body: "Cuerpo",
    bust: "Busto",
    eyelids: "Párpados",
    nose: "Nariz",
  } satisfies Record<Zone, string>,
  goals: {
    rejuvenate: "Rejuvenecer",
    harmonize: "Armonizar",
    contour: "Contorno",
    skin: "Mejorar la piel",
  } satisfies Record<Goal, string>,
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: "Lumen Aesthetic Clinic · Aesthetic medicine and plastic surgery in Medellín",
    description:
      "Aesthetic medicine and plastic surgery in El Poblado, Medellín. Reference prices in USD and COP, a trip planner for international patients and a virtual consultation. Demo website.",
    ogAlt: "Lumen Aesthetic Clinic, Medellín",
  },
  demo: {
    text: "Demo site designed by David",
    ask: "Want one like this for your clinic?",
    cta: "Message me",
  },
  nav: {
    label: "Main",
    procedures: "Treatments",
    plan: "Build your plan",
    travel: "Travel",
    team: "Team",
    faq: "FAQ",
    cta: "Virtual consultation",
    menu: "Menu",
    close: "Close",
    langLabel: "Language",
    home: "Lumen, home",
  },
  hero: {
    title: "You, in a better light.",
    kicker: "Aesthetic medicine and plastic surgery in El Poblado, Medellín.",
    lead:
      "We tell you what each procedure can do, what it can’t, and what it costs — before you decide anything.",
    plan: "Build your plan",
    virtual: "Virtual consultation",
    cap1: "Illustrative stock portrait. Not a patient.",
    cap2: "The Aburrá Valley seen from El Poblado",
    alt1: "Portrait of a calm woman with drops of serum on her cheek, against a sand-coloured background",
    alt2: "View over the Medellín valley with El Poblado buildings and mountains behind",
    alt3: "Close-up of the natural texture of skin",
    note: "Care in English and Spanish · Adults 18+ only",
  },
  procedures: {
    title: "What we do, and what it costs",
    lead:
      "Starting prices with fees included, so you walk into your consultation knowing the range. Your doctor sets the final figure.",
    non: "Non-surgical aesthetic medicine",
    surg: "Plastic surgery",
    from: "From",
    recovery: "Typical recovery",
    sessions: "Sessions",
    trm: "Reference exchange rate",
    note:
      "Every procedure carries risk, non-surgical ones included, and needs a medical consultation first. Prices are a guide and may change.",
    alt1: "Bright treatment room with a treatment chair, lit mirror and a glass wall facing a patio with palm trees",
  },
  plan: {
    title: "Build your plan",
    lead:
      "Pick the areas you’re curious about and what you’d like to achieve. We’ll show what’s usually considered, with reference timings and prices.",
    zones: "Areas",
    goals: "Goals",
    disclaimer:
      "This is general guidance, not medical advice. Only a consultation with a specialist can tell what’s right for you — and sometimes the honest answer is to do nothing.",
    empty: "Choose at least one area or goal to see options.",
    none: "Nothing matches that combination. Try another, or ask for a consultation.",
    count: (n: number) => (n === 1 ? "1 option worth discussing" : `${n} options worth discussing`),
    recovery: "Recovery",
    sessions: "Sessions",
    price: "Range",
    send: "Send my plan on WhatsApp",
    clear: "Clear selection",
    msgTitle: "— Build your plan —",
    msgZones: "Areas",
    msgGoals: "Goals",
    msgList: "Procedures I’m interested in",
    hint: (zone: string, goals: string) => `${zone}: nothing matches these goals. Try “${goals}”.`,
    surgical: "Surgical",
    nonSurgical: "Non-surgical",
  },
  safe: {
    title: "How to choose a safe clinic",
    lead:
      "Even if it isn’t us. These five checks protect your health far more than any results photo.",
    rows: [
      {
        t: "A real plastic surgeon",
        d: "Ask for their full name and confirm their specialty is plastic surgery — not a short course or certificate. Colombia keeps a public register of licensed health professionals called ReTHUS.",
      },
      {
        t: "A licensed operating room",
        d: "Surgery belongs in a licensed facility, never a doctor’s office, spa or private home. Ask where you’ll be operated on and look it up in the Ministry of Health’s REPS register.",
      },
      {
        t: "Specialist anaesthesia",
        d: "From start to finish, focused only on you. If you’re told the surgeon will handle your sedation, that’s your cue to leave.",
      },
      {
        t: "A consultation before a price",
        d: "No one can tell you what you need from a photo. A consultation reviews your medical history and, before surgery, includes lab work.",
      },
      {
        t: "A price that makes sense",
        d: "A quote far below the going rate almost always means something is missing: the anaesthesiologist, the operating room, the follow-up or the quality of materials.",
      },
    ],
    alts: [
      "Surgeon wearing a mask, magnifying loupes and a headlight during a procedure",
      "Brightly lit operating room with a surgical table and monitoring equipment",
      "Anaesthesia machine beside a green wall",
      "Bright consulting room with a desk, yellow armchair and treatment bed behind",
      "White cabinets holding medical supplies in a treatment room",
    ],
  },
  travel: {
    title: "Plan your trip",
    lead:
      "Coming from the US, Canada or Europe? Choose a procedure and see how long people usually stay in Medellín, and how those days unfold.",
    choose: "Procedure",
    stay: (a: number, b: number) => `Plan to stay ${a} to ${b} days`,
    stayNote: "That’s the usual range. Your surgeon confirms when you’re cleared to fly after seeing you.",
    day: "Day",
    prev: "Previous",
    next: "Next",
    timeline: "Timeline",
    includesTitle: "What our patient support includes",
    includes: [
      ["Private transfers", "Between José María Córdova airport, your accommodation and the clinic."],
      ["Follow-up nurse", "Visits where you’re staying in the days after your procedure."],
      ["Interpreter", "English at every appointment. Other languages with advance notice."],
      ["Remote check-ins", "Video calls with your doctor once you’re back home."],
    ],
    includesNote:
      "Patient support is quoted separately. You book your own flights and stay; we’ll suggest neighbourhoods near the clinic.",
    country: "Where are you travelling from?",
    countryPh: "e.g. United States",
    month: "Tentative arrival month",
    send: "Request a quote on WhatsApp",
    msgTitle: "— Plan your trip —",
    msgProc: "Procedure",
    msgStay: "Suggested stay",
    msgCountry: "Country",
    msgMonth: "Tentative arrival",
    days: "days",
    pending: "To be decided",
    bandCap: "José María Córdova International Airport, where the trip to Medellín begins.",
    bandAlt: "Terminal and control tower at José María Córdova airport under a clear sky",
  },
  team: {
    title: "Your care team",
    note: "Fictional characters for this demo. Each image shows a tool of the specialty, not a real doctor.",
    people: [
      {
        name: "Dr. Andrés Restrepo",
        role: "Plastic surgeon",
        quote: "I’d rather say no at the consultation than promise something surgery can’t deliver.",
      },
      {
        name: "Dr. Valentina Ochoa",
        role: "Aesthetic physician",
        quote: "The best outcome is when nobody can tell what you had done — only that you look rested.",
      },
      {
        name: "Dr. Camila Arango",
        role: "Dermatologist",
        quote: "Skin has a memory. We care for it over months, not in a single session.",
      },
      {
        name: "Dr. Santiago Mejía",
        role: "Anaesthesiologist",
        quote: "My work begins well before surgery and ends when you wake up feeling calm.",
      },
    ],
    alts: [
      "Sterile-gloved hand adjusting a surgical light",
      "Syringe with a fine needle in a consulting room",
      "Handheld dermatoscope on an ochre background",
      "Anaesthesia machine with monitors in an operating room",
    ],
  },
  stories: {
    title: "In their words",
    label: "Illustrative example for this demo",
    photoNote: "Illustrative recovery room from a free image library. Not part of the clinic.",
    smallNote: "Stock photo. Not patients.",
    alt: "Recovery room with a bed, armchair and bright window",
    altSmall: "Health professional holding an older patient’s hands",
    items: [
      {
        quote:
          "I came with a list of questions and left with honest answers about what my nose could and couldn’t become.",
        who: "Jennifer",
        place: "Houston, United States",
        proc: "Rhinoplasty",
      },
      {
        quote:
          "I was scared of looking frozen. My doctor walked me through doses and timing and said less was more. She checked on me again two weeks later.",
        who: "Mariana",
        place: "Medellín, Colombia",
        proc: "Botulinum toxin",
      },
      {
        quote:
          "What I valued most was the follow-up video call three weeks later, from home, with the same interpreter.",
        who: "Claire",
        place: "Toronto, Canada",
        proc: "Eyelid surgery",
      },
    ],
  },
  assess: {
    title: "Virtual consultation",
    lead:
      "Five short steps. We won’t ask for photos or medical details — those are for your doctor. At the end, WhatsApp opens with your message ready to send.",
    stepOf: (a: number, b: number) => `Step ${a} of ${b}`,
    back: "Back",
    next: "Continue",
    send: "Open WhatsApp with my message",
    edit: "Edit answers",
    q1: "Which procedure are you interested in?",
    notSure: "I’m not sure yet — I’d like guidance",
    q2: "Which country are you writing from?",
    countryPh: "e.g. Canada",
    q3: "When are you thinking of coming?",
    from: "From",
    to: "To",
    noDates: "I don’t have dates yet",
    local: "I live in Colombia",
    q4: "Which language would you prefer?",
    langs: ["English", "Español", "Português", "Français", "Other, with an interpreter"],
    q5: "What’s your name, and how can we reach you?",
    name: "Name",
    contact: "Email or WhatsApp number (optional)",
    adult: "I confirm I am 18 or older",
    summary: "Review your message",
    required: "Complete this step to continue.",
    adultRequired: "Our services are for adults 18 and over only.",
    msgTitle: "— Virtual consultation —",
    msgProc: "Procedure",
    msgCountry: "Country",
    msgDates: "Tentative dates",
    msgLang: "Language",
    msgName: "Name",
    msgContact: "Contact",
    noPhotos: "No photos or medical records through this channel.",
  },
  faq: {
    title: "Questions people ask",
    items: [
      {
        q: "How long should I stay in Medellín?",
        a: "It depends on the procedure: 2 to 5 days for non-surgical treatments, 8 to 21 days for surgery. The trip planner shows the usual range, and your surgeon confirms when you’re cleared to fly after examining you.",
      },
      {
        q: "What is recovery like?",
        a: "After non-surgical treatments most people return to their routine the same day or within a few days. After surgery expect swelling, bruising and discomfort managed with medication; you get written instructions and a nurse for the first days.",
      },
      {
        q: "What are the risks?",
        a: "Every procedure has them. Non-surgical treatments can cause bruising, asymmetry or reactions; surgery adds infection, bleeding, blood clots and unfavourable scarring. We go through your personal risks in writing before you sign anything.",
      },
      {
        q: "Do you offer financing?",
        a: "You can pay in stages, and patients living in Colombia can apply for credit through financial institutions, subject to approval. We’ll walk you through the options at your consultation, no strings attached.",
      },
      {
        q: "Which languages do you speak?",
        a: "Spanish and English at every appointment. For Portuguese, French or other languages we arrange an interpreter in advance.",
      },
      {
        q: "Can follow-ups happen remotely?",
        a: "Yes, once you’ve been discharged. Check-ins at 1, 3, 6 and 12 months can be done by video, and if anything needs an in-person look we’ll help you find a specialist near home.",
      },
      {
        q: "Can I combine procedures?",
        a: "Sometimes. Combining lengthens surgery and recovery and isn’t always the safest choice. Your surgeon and anaesthesiologist decide together after reviewing your case.",
      },
      {
        q: "Is there a minimum age?",
        a: "Yes. All our services are for adults 18 and over.",
      },
    ],
  },
  contact: {
    sentence: "Have a question that isn’t answered here? Write to us and a person — not a bot — will reply.",
    question: "Where shall we start?",
    virtual: "Start the virtual consultation",
    wa: "Message us on WhatsApp",
    city: "El Poblado, Medellín · Replies during business hours, Colombia time",
    alt: "Bright clinic corridor with consulting-room doors",
  },
  footer: {
    place: ["Lumen Aesthetic Clinic", "El Poblado, Medellín", "Antioquia, Colombia"],
    hoursTitle: "Hours",
    hours: ["Monday to Friday, 8 am–6 pm", "Saturday, 9 am–1 pm"],
    navTitle: "On this page",
    noticeTitle: "Before you decide",
    notice: [
      "Services for adults 18 and over only.",
      "Every procedure carries risk and needs a medical consultation.",
      "No result is guaranteed.",
    ],
    creditsTitle: "Image credits",
    creditsNote:
      "Illustrative photographs from free libraries, cropped and resized for this site. The spaces don’t belong to the clinic, which is fictional, and nobody pictured is its patient or doctor.",
    legal:
      "Lumen Aesthetic Clinic is fictional. Demo website designed by David. It holds no real licences, registrations or certifications.",
    top: "Back to top",
  },
  wa: { float: "Message David on WhatsApp about this demo" },
  zones: {
    face: "Face",
    skin: "Skin",
    body: "Body",
    bust: "Breasts",
    eyelids: "Eyelids",
    nose: "Nose",
  },
  goals: {
    rejuvenate: "Look fresher",
    harmonize: "Balance features",
    contour: "Contour",
    skin: "Better skin",
  },
};

export const dicts: Record<Lang, Dict> = { es, en };
