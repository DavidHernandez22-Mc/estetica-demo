"use client";

import { useEffect, useRef, useState } from "react";
import { dicts } from "@/lib/dict";
import { procedures } from "@/lib/procedures";
import { toolMessage, waLink, type Lang } from "@/lib/site";
import { Icon, WhatsAppGlyph } from "./Icon";
import { PrivacyNote } from "./PrivacyNote";

const TOTAL = 5;
type DateMode = "dates" | "none" | "local";

export function Assessment({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const a = t.assess;
  const [step, setStep] = useState(1);
  const [proc, setProc] = useState("");
  const [country, setCountry] = useState("");
  const [mode, setMode] = useState<DateMode>("dates");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [language, setLanguage] = useState(a.langs[0]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [adult, setAdult] = useState(false);
  const [error, setError] = useState("");
  const headRef = useRef<HTMLHeadingElement>(null);
  const touched = useRef(false);

  useEffect(() => {
    if (touched.current) headRef.current?.focus();
  }, [step]);

  const fmtMonth = (v: string) =>
    new Date(`${v}-15`).toLocaleDateString(lang === "es" ? "es-CO" : "en-US", { month: "long", year: "numeric" });

  const procLabel = proc === "unsure" ? a.notSure : procedures.find((p) => p.id === proc)?.name[lang] ?? "";
  const datesLabel =
    mode === "none" ? a.noDates : mode === "local" ? a.local : [from, to].filter(Boolean).map(fmtMonth).join(" – ");

  const validate = () => {
    if (step === 1 && !proc) return a.required;
    if (step === 2 && !country.trim()) return a.required;
    if (step === 3 && mode === "dates" && !from) return a.required;
    if (step === 5 && !name.trim()) return a.required;
    if (step === 5 && !adult) return a.adultRequired;
    return "";
  };

  const go = (dir: number) => {
    touched.current = true;
    if (dir > 0) {
      const e = validate();
      setError(e);
      if (e) return;
    } else setError("");
    setStep((s) => Math.min(TOTAL + 1, Math.max(1, s + dir)));
  };

  const message = toolMessage([
    a.msgTitle,
    `${a.msgProc}: ${procLabel}`,
    `${a.msgCountry}: ${country.trim()}`,
    `${a.msgDates}: ${datesLabel}`,
    `${a.msgLang}: ${language}`,
    `${a.msgName}: ${name.trim()}`,
    ...(contact.trim() ? [`${a.msgContact}: ${contact.trim()}`] : []),
  ]);

  const errId = "assess-error";
  const done = step > TOTAL;

  return (
    <section id="valoracion" className="section field assess" aria-labelledby="assess-title">
      <div className="assess-intro">
        <h2 id="assess-title" className="display h-section" data-reveal>
          {a.title}
        </h2>
        <p data-reveal>{a.lead}</p>
        <p className="soft small" data-reveal>
          {a.noPhotos}
        </p>
      </div>

      <form
        className="stepper"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          go(1);
        }}
      >
        <div className="stepper-progress">
          <div className="progress-track" aria-hidden="true">
            <span style={{ transform: `scaleX(${Math.min(step, TOTAL) / TOTAL})` }} />
          </div>
        </div>

        {step === 1 && (
          <fieldset className="step" aria-describedby={error ? errId : undefined}>
            <legend>
              <h3 ref={headRef} tabIndex={-1} className="step-q">
                {a.q1}
              </h3>
            </legend>
            {(["non", "surg"] as const).map((line) => (
              <div key={line} className="option-group">
                <p className="option-group-title">{line === "non" ? t.procedures.non : t.procedures.surg}</p>
                <div className="options">
                  {procedures
                    .filter((p) => p.line === line)
                    .map((p) => (
                      <label key={p.id} className="option">
                        <input type="radio" name="proc" value={p.id} checked={proc === p.id} onChange={() => setProc(p.id)} />
                        <span>{p.name[lang]}</span>
                      </label>
                    ))}
                </div>
              </div>
            ))}
            <label className="option option-wide">
              <input type="radio" name="proc" value="unsure" checked={proc === "unsure"} onChange={() => setProc("unsure")} />
              <span>{a.notSure}</span>
            </label>
          </fieldset>
        )}

        {step === 2 && (
          <div className="step">
            <h3 ref={headRef} tabIndex={-1} className="step-q">
              <label htmlFor="as-country">{a.q2}</label>
            </h3>
            <input
              id="as-country"
              className="input-lg"
              type="text"
              autoComplete="country-name"
              placeholder={a.countryPh}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              aria-describedby={error ? errId : undefined}
              aria-invalid={!!error}
            />
          </div>
        )}

        {step === 3 && (
          <fieldset className="step" aria-describedby={error ? errId : undefined}>
            <legend>
              <h3 ref={headRef} tabIndex={-1} className="step-q">
                {a.q3}
              </h3>
            </legend>
            <div className="options options-inline">
              {(
                [
                  ["dates", `${a.from} / ${a.to}`],
                  ["none", a.noDates],
                  ["local", a.local],
                ] as const
              ).map(([v, label]) => (
                <label key={v} className="option">
                  <input type="radio" name="mode" value={v} checked={mode === v} onChange={() => setMode(v)} />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {mode === "dates" && (
              <div className="date-row">
                <div className="field-row">
                  <label htmlFor="as-from">{a.from}</label>
                  <input id="as-from" type="month" value={from} onChange={(e) => setFrom(e.target.value)} />
                </div>
                <div className="field-row">
                  <label htmlFor="as-to">{a.to}</label>
                  <input id="as-to" type="month" min={from || undefined} value={to} onChange={(e) => setTo(e.target.value)} />
                </div>
              </div>
            )}
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className="step">
            <legend>
              <h3 ref={headRef} tabIndex={-1} className="step-q">
                {a.q4}
              </h3>
            </legend>
            <div className="options options-inline">
              {a.langs.map((l) => (
                <label key={l} className="option">
                  <input type="radio" name="language" value={l} checked={language === l} onChange={() => setLanguage(l)} />
                  <span>{l}</span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {step === 5 && (
          <div className="step">
            <h3 ref={headRef} tabIndex={-1} className="step-q">
              {a.q5}
            </h3>
            <div className="field-row">
              <label htmlFor="as-name">{a.name}</label>
              <input
                id="as-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-describedby={error ? errId : undefined}
                aria-invalid={!!error && !name.trim()}
              />
            </div>
            <div className="field-row">
              <label htmlFor="as-contact">{a.contact}</label>
              <input id="as-contact" type="text" autoComplete="email" value={contact} onChange={(e) => setContact(e.target.value)} />
            </div>
            <label className="option check">
              <input type="checkbox" checked={adult} onChange={(e) => setAdult(e.target.checked)} />
              <span>{a.adult}</span>
            </label>
          </div>
        )}

        {done && (
          <div className="step">
            <h3 ref={headRef} tabIndex={-1} className="step-q">
              {a.summary}
            </h3>
            <pre className="summary">{message}</pre>
          </div>
        )}

        <p id={errId} className="form-error" role="alert">
          {error}
        </p>

        <div className="stepper-nav">
          <p className="small soft step-count" aria-live="polite">
            {done ? a.summary : a.stepOf(step, TOTAL)}
          </p>
          {step > 1 && (
            <button type="button" className="btn btn-ghost" onClick={() => go(-1)}>
              <Icon name="arrowLeft" size={20} />
              {done ? a.edit : a.back}
            </button>
          )}
          {done ? (
            <a className="btn btn-solid" href={waLink(message)} target="_blank" rel="noopener noreferrer">
              <WhatsAppGlyph size={20} />
              {a.send}
            </a>
          ) : (
            <button type="submit" className="btn btn-solid">
              {a.next}
              <Icon name="arrow" size={20} />
            </button>
          )}
        </div>
        <PrivacyNote t={t} />
      </form>
    </section>
  );
}
