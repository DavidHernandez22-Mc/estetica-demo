# Lumen Clínica Estética — demo

Web de demostración de una clínica ficticia de medicina estética y cirugía plástica en El Poblado, Medellín. Diseñada por David como pieza de portafolio.

**URL:** https://lumen-estetica-demo.vercel.app · versión en inglés en `/en/`

## Qué incluye

- **Arma tu plan**: zonas + objetivos → procedimientos con recuperación, sesiones y rango de precio en COP y USD; envío por WhatsApp.
- **Planea tu viaje**: días recomendados en Medellín, línea de tiempo y acompañamiento para pacientes internacionales; cotización por WhatsApp.
- **Valoración virtual** en 5 pasos que termina en un mensaje de WhatsApp ordenado (sin fotos ni datos médicos).
- Procedimientos con precios «desde», guía «Cómo elegir una clínica segura», equipo, testimonios ilustrativos y preguntas frecuentes.
- SEO: metadatos, Open Graph, hreflang ES/EN, sitemap, robots y datos estructurados `MedicalClinic` + `FAQPage`.

## Stack

Next.js 16 (App Router, páginas estáticas, un layout raíz por idioma), CSS propio, `next/image`, Zodiak (Fontshare, autoalojada) y Hanken Grotesk (`next/font`).

```bash
npm install
npm run dev
```

## Avisos

Clínica, médicos y testimonios son ficticios. No se afirman registros, habilitaciones ni certificaciones. Las fotografías son de Wikimedia Commons, StockSnap y Flickr (licencias libres), con créditos y licencia en el pie de página; ninguna persona fotografiada es paciente ni médico, y los espacios no pertenecen a la clínica. TRM de referencia: 1 USD = 3.160 COP.
