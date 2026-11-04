import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { photos } from "@/lib/photos";
import { procedures, type Line } from "@/lib/procedures";
import { cop, TRM_LABEL, usd, type Lang } from "@/lib/site";

function Group({ line, t, lang }: { line: Line; t: Dict; lang: Lang }) {
  const items = procedures.filter((p) => p.line === line);
  const id = `proc-${line}`;
  return (
    <div className="proc-group" data-reveal>
      <h3 id={id} className="proc-group-title">
        {line === "non" ? t.procedures.non : t.procedures.surg}
      </h3>
      <ul className="proc-list" aria-labelledby={id}>
        {items.map((p) => (
          <li key={p.id} className="proc-row">
            <div className="proc-main">
              <h4 className="proc-name">{p.name[lang]}</h4>
              <p className="proc-desc">{p.desc[lang]}</p>
              <dl className="proc-meta">
                <div>
                  <dt>{t.procedures.recovery}</dt>
                  <dd>{p.recovery[lang]}</dd>
                </div>
                <div>
                  <dt>{t.procedures.sessions}</dt>
                  <dd>{p.sessions[lang]}</dd>
                </div>
              </dl>
            </div>
            <p className="proc-price">
              <span className="proc-from">{t.procedures.from}</span>
              <span className="proc-cop">{cop(p.copMin)}</span>
              <span className="proc-usd">≈ {usd(p.copMin)}</span>
              <span className="proc-unit">{p.unit[lang]}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Procedures({ t, lang }: { t: Dict; lang: Lang }) {
  return (
    <section id="procedimientos" className="section procedures" aria-labelledby="proc-title">
      <h2 id="proc-title" className="display h-statement" data-reveal>
        {t.procedures.title}
      </h2>
      <div className="proc-layout">
        <aside className="proc-aside">
          <p className="proc-lead" data-reveal>
            {t.procedures.lead}
          </p>
          <p className="trm" data-reveal>
            <span>{t.procedures.trm}</span>
            <strong>{TRM_LABEL}</strong>
          </p>
          <figure className="proc-photo" data-reveal>
            <Image src={photos.procRoom} alt={t.procedures.alt1} sizes="(max-width: 760px) 60vw, 24vw" />
          </figure>
        </aside>
        <div className="proc-tables">
          <Group line="non" t={t} lang={lang} />
          <Group line="surg" t={t} lang={lang} />
          <p className="risk-note" data-reveal>
            {t.procedures.note}
          </p>
        </div>
      </div>
    </section>
  );
}
