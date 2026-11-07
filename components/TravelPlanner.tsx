"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { dicts } from "@/lib/dict";
import { photos } from "@/lib/photos";
import { getProcedure, procedures } from "@/lib/procedures";
import { toolMessage, waLink, type Lang } from "@/lib/site";
import { Icon, WhatsAppGlyph } from "./Icon";
import { PrivacyNote } from "./PrivacyNote";

const includeIcons = ["car", "nurse", "speech", "video"];

export function TravelPlanner({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const [id, setId] = useState("rhinoplasty");
  const [country, setCountry] = useState("");
  const [month, setMonth] = useState("");
  const [progress, setProgress] = useState(0);
  const rowRef = useRef<HTMLOListElement>(null);
  const p = getProcedure(id) ?? procedures[0];

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 1);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [id]);

  const scrollBy = (dir: number) => {
    const el = rowRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * 312, behavior: reduce ? "auto" : "smooth" });
  };

  const monthLabel = month
    ? new Date(`${month}-15`).toLocaleDateString(lang === "es" ? "es-CO" : "en-US", {
        month: "long",
        year: "numeric",
      })
    : t.travel.pending;

  const message = toolMessage([
    t.travel.msgTitle,
    `${t.travel.msgProc}: ${p.name[lang]}`,
    `${t.travel.msgStay}: ${p.stay[0]}–${p.stay[1]} ${t.travel.days}`,
    `${t.travel.msgCountry}: ${country.trim() || t.travel.pending}`,
    `${t.travel.msgMonth}: ${monthLabel}`,
  ]);

  return (
    <section id="viaje" className="section travel" aria-labelledby="travel-title">
      <figure className="travel-band">
        <div className="band-frame">
          <Image src={photos.bandAirport} alt={t.travel.bandAlt} sizes="100vw" className="drift" />
        </div>
        <figcaption>{t.travel.bandCap}</figcaption>
      </figure>

      <div className="travel-head">
        <div>
          <h2 id="travel-title" className="display h-section" data-reveal>
            {t.travel.title}
          </h2>
          <p className="travel-lead" data-reveal>
            {t.travel.lead}
          </p>
        </div>
        <div className="travel-pick" data-reveal>
          <label htmlFor="travel-proc">{t.travel.choose}</label>
          <div className="select">
            <select id="travel-proc" value={id} onChange={(e) => setId(e.target.value)}>
              {procedures.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.name[lang]}
                </option>
              ))}
            </select>
            <Icon name="chevron" size={20} />
          </div>
          <p className="stay" aria-live="polite">
            {t.travel.stay(p.stay[0], p.stay[1])}
          </p>
          <p className="soft small">{t.travel.stayNote}</p>
        </div>
      </div>

      <div className="moments">
        <div className="moments-top">
          <h3 className="h-small">{t.travel.timeline}</h3>
          <div className="moments-btns">
            <button type="button" className="sq-btn" onClick={() => scrollBy(-1)} aria-label={t.travel.prev}>
              <Icon name="arrowLeft" />
            </button>
            <button type="button" className="sq-btn" onClick={() => scrollBy(1)} aria-label={t.travel.next}>
              <Icon name="arrow" />
            </button>
          </div>
        </div>
        <div className="moments-bar" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(0.08, progress)})` }} />
        </div>
        <ol className="moments-row" ref={rowRef} tabIndex={0} aria-label={`${t.travel.timeline}: ${p.name[lang]}`}>
          {p.timeline.map((m, i) => (
            <li key={`${p.id}-${i}`} className="moment" style={{ "--gap": `${[24, 72, 40, 96, 56][i % 5]}px` } as React.CSSProperties}>
              <p className="moment-day">
                {t.travel.day} {m.day}
              </p>
              <h4>{m.title[lang]}</h4>
              <p>{m.text[lang]}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="travel-foot">
        <div className="includes">
          <h3 className="h-small">{t.travel.includesTitle}</h3>
          <ul>
            {t.travel.includes.map(([a, b], i) => (
              <li key={a}>
                <Icon name={includeIcons[i]} size={28} />
                <div>
                  <strong>{a}</strong>
                  <span>{b}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="soft small">{t.travel.includesNote}</p>
        </div>
        <form className="travel-form" onSubmit={(e) => e.preventDefault()}>
          <div className="field-row">
            <label htmlFor="travel-country">{t.travel.country}</label>
            <input
              id="travel-country"
              type="text"
              autoComplete="country-name"
              placeholder={t.travel.countryPh}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="field-row">
            <label htmlFor="travel-month">{t.travel.month}</label>
            <input id="travel-month" type="month" value={month} onChange={(e) => setMonth(e.target.value)} />
          </div>
          <a className="btn btn-solid btn-wide" href={waLink(message)} target="_blank" rel="noopener noreferrer">
            <WhatsAppGlyph size={20} />
            {t.travel.send}
          </a>
          <PrivacyNote t={t} />
        </form>
      </div>
    </section>
  );
}
