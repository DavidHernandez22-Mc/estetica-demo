import { dicts } from "@/lib/dict";
import { procedures } from "@/lib/procedures";
import { SITE_URL, type Lang } from "@/lib/site";
import { Assessment } from "./Assessment";
import { Contact, Faq, Footer, WhatsAppFloat } from "./Closing";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PlanBuilder } from "./PlanBuilder";
import { Procedures } from "./Procedures";
import { Reveal } from "./Reveal";
import { SafeClinic } from "./SafeClinic";
import { Stories } from "./Stories";
import { Team } from "./Team";
import { TravelPlanner } from "./TravelPlanner";

function jsonLd(lang: Lang) {
  const t = dicts[lang];
  const url = lang === "es" ? `${SITE_URL}/` : `${SITE_URL}/en/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_URL}/#clinic`,
        name: lang === "es" ? "Lumen Clínica Estética (demo)" : "Lumen Aesthetic Clinic (demo)",
        description: t.meta.description,
        url,
        image: `${SITE_URL}/og.jpg`,
        inLanguage: lang,
        medicalSpecialty: ["PlasticSurgery", "Dermatology"],
        availableLanguage: ["es", "en"],
        priceRange: "$$$",
        currenciesAccepted: "COP, USD",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Medellín",
          addressRegion: "Antioquia",
          addressCountry: "CO",
        },
        areaServed: ["CO", "US", "CA", "EU"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
        ],
        availableService: procedures.map((p) => ({
          "@type": p.line === "surg" ? "MedicalProcedure" : "MedicalTherapy",
          name: p.name[lang],
          description: p.desc[lang],
        })),
      },
      {
        "@type": "FAQPage",
        inLanguage: lang,
        mainEntity: t.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function HomePage({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)).replace(/</g, "\\u003c") }}
      />
      <a href="#main" className="skip">
        {lang === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <Header lang={lang} />
      <main id="main" tabIndex={-1}>
        <Hero t={t} />
        <Procedures t={t} lang={lang} />
        <PlanBuilder lang={lang} />
        <SafeClinic t={t} />
        <TravelPlanner lang={lang} />
        <Team t={t} />
        <Stories t={t} />
        <Assessment lang={lang} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppFloat t={t} />
      <Reveal />
    </>
  );
}
