import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { credits, photos } from "@/lib/photos";
import { WA_GENERAL, waLink } from "@/lib/site";
import { Icon, WhatsAppGlyph } from "./Icon";

export function Faq({ t }: { t: Dict }) {
  return (
    <section id="preguntas" className="section faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="display h-statement" data-reveal>
        {t.faq.title}
      </h2>
      <div className="faq-list">
        {t.faq.items.map((f) => (
          <details key={f.q} className="faq-item" data-reveal>
            <summary>
              <span>{f.q}</span>
              <Icon name="chevron" />
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Contact({ t }: { t: Dict }) {
  return (
    <section className="section contact" aria-label={t.contact.question}>
      <p className="contact-sentence" data-reveal>
        {t.contact.sentence}
      </p>
      <figure className="contact-photo" data-reveal>
        <Image src={photos.contactCorridor} alt={t.contact.alt} sizes="(max-width: 760px) 96px, 170px" />
      </figure>
      <div className="contact-links" data-reveal>
        <p className="contact-q">{t.contact.question}</p>
        <a href="#valoracion">
          {t.contact.virtual}
          <Icon name="arrow" size={18} />
        </a>
        <a href={waLink(WA_GENERAL)} target="_blank" rel="noopener noreferrer">
          {t.contact.wa}
          <Icon name="arrow" size={18} />
        </a>
        <p className="small soft">{t.contact.city}</p>
      </div>
    </section>
  );
}

export function Footer({ t }: { t: Dict }) {
  const nav = [
    ["#procedimientos", t.nav.procedures],
    ["#plan", t.nav.plan],
    ["#seguridad", t.safe.title],
    ["#viaje", t.nav.travel],
    ["#equipo", t.nav.team],
    ["#valoracion", t.nav.cta],
    ["#preguntas", t.nav.faq],
  ];
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <h2 className="f-title">{t.footer.place[0]}</h2>
          <p>
            {t.footer.place[1]}
            <br />
            {t.footer.place[2]}
          </p>
          <h2 className="f-title f-gap">{t.footer.hoursTitle}</h2>
          <p>
            {t.footer.hours[0]}
            <br />
            {t.footer.hours[1]}
          </p>
        </div>
        <nav aria-label={t.footer.navTitle}>
          <h2 className="f-title">{t.footer.navTitle}</h2>
          <ul>
            {nav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="f-title">{t.footer.noticeTitle}</h2>
          <ul>
            {t.footer.notice.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <a className="f-wa" href={waLink(WA_GENERAL)} target="_blank" rel="noopener noreferrer">
            <WhatsAppGlyph size={18} />
            {t.demo.ask}
          </a>
        </div>
        <details className="credits">
          <summary>
            <h2 className="f-title">{t.footer.creditsTitle}</h2>
            <Icon name="chevron" size={18} />
          </summary>
          <p className="small">{t.footer.creditsNote}</p>
          <ul className="small">
            {credits.map((c) => (
              <li key={c.url}>
                {c.what}:{" "}
                <a href={c.url} target="_blank" rel="noopener noreferrer" lang="en">
                  {c.author}
                </a>
                , {c.source},{" "}
                <a href={c.licenceUrl} target="_blank" rel="noopener noreferrer" lang="en">
                  {c.licence}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
      <p className="footer-wordmark" aria-hidden="true">
        Lumen
      </p>
      <div className="footer-legal">
        <p>
          © 2026 · {t.footer.legal}
        </p>
        <a href="#top">{t.footer.top}</a>
      </div>
    </footer>
  );
}

export function WhatsAppFloat({ t }: { t: Dict }) {
  return (
    <a className="wa-float" href={waLink(WA_GENERAL)} target="_blank" rel="noopener noreferrer" aria-label={t.wa.float}>
      <WhatsAppGlyph size={28} />
    </a>
  );
}
