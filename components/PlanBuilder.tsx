"use client";

import { useMemo, useState } from "react";
import { dicts } from "@/lib/dict";
import { goals as allGoals, procedures, zones as allZones, type Goal, type Zone } from "@/lib/procedures";
import { copRange, toolMessage, usdRange, waLink, type Lang } from "@/lib/site";
import { Icon, WhatsAppGlyph } from "./Icon";

function toggle<T>(list: T[], v: T) {
  return list.includes(v) ? list.filter((x) => x !== v) : [...list, v];
}

export function PlanBuilder({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const [zones, setZones] = useState<Zone[]>(["face"]);
  const [goals, setGoals] = useState<Goal[]>(["rejuvenate"]);

  const results = useMemo(() => {
    if (!zones.length && !goals.length) return [];
    return procedures.filter(
      (p) =>
        (!zones.length || p.zones.some((z) => zones.includes(z))) &&
        (!goals.length || p.goals.some((g) => goals.includes(g))),
    );
  }, [zones, goals]);

  // Zones the chosen goals left without options, with the goals that would cover them.
  const hints = zones
    .filter((z) => goals.length && !results.some((p) => p.zones.includes(z)))
    .map((z) => {
      const fits = allGoals.filter((g) => procedures.some((p) => p.zones.includes(z) && p.goals.includes(g)));
      return t.plan.hint(t.zones[z], fits.map((g) => t.goals[g]).join(" / "));
    });

  const message = toolMessage([
    t.plan.msgTitle,
    `${t.plan.msgZones}: ${zones.map((z) => t.zones[z]).join(", ") || "—"}`,
    `${t.plan.msgGoals}: ${goals.map((g) => t.goals[g]).join(", ") || "—"}`,
    "",
    `${t.plan.msgList}:`,
    ...results.map(
      (p) => `• ${p.name[lang]} (${copRange(p.copMin, p.copMax)} / ${usdRange(p.copMin, p.copMax)})`,
    ),
  ]);

  const empty = !zones.length && !goals.length;

  return (
    <section id="plan" className="section field plan" aria-labelledby="plan-title">
      <div className="plan-intro">
        <h2 id="plan-title" className="display h-section" data-reveal>
          {t.plan.title}
        </h2>
        <p className="plan-lead" data-reveal>
          {t.plan.lead}
        </p>
        <p className="plan-disclaimer" data-reveal>
          <Icon name="shield" />
          <span>{t.plan.disclaimer}</span>
        </p>
      </div>

      <div className="plan-controls">
        <fieldset className="chips" data-reveal>
          <legend>{t.plan.zones}</legend>
          <div className="chip-row">
            {allZones.map((z) => (
              <button
                key={z}
                type="button"
                className="chip"
                aria-pressed={zones.includes(z)}
                onClick={() => setZones((s) => toggle(s, z))}
              >
                <Icon name={z} />
                {t.zones[z]}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="chips" data-reveal>
          <legend>{t.plan.goals}</legend>
          <div className="chip-row">
            {allGoals.map((g) => (
              <button
                key={g}
                type="button"
                className="chip chip-text"
                aria-pressed={goals.includes(g)}
                onClick={() => setGoals((s) => toggle(s, g))}
              >
                {t.goals[g]}
              </button>
            ))}
          </div>
        </fieldset>
        {!empty && (
          <button
            type="button"
            className="link-btn"
            onClick={() => {
              setZones([]);
              setGoals([]);
            }}
          >
            {t.plan.clear}
          </button>
        )}
      </div>

      <div className="plan-results">
        <p className="plan-count" aria-live="polite">
          {empty ? t.plan.empty : results.length ? t.plan.count(results.length) : t.plan.none}
        </p>
        {hints.map((h) => (
          <p key={h} className="plan-hint">
            {h}
          </p>
        ))}
        {results.length > 0 && (
          <ul className="plan-list">
            {results.map((p) => (
              <li key={p.id} className="plan-item">
                <div className="plan-name">
                  <h3>{p.name[lang]}</h3>
                  <p className="plan-kind">{p.line === "surg" ? t.plan.surgical : t.plan.nonSurgical}</p>
                </div>
                <dl>
                  <div>
                    <dt>{t.plan.recovery}</dt>
                    <dd>{p.recovery[lang]}</dd>
                  </div>
                  <div>
                    <dt>{t.plan.sessions}</dt>
                    <dd>{p.sessions[lang]}</dd>
                  </div>
                  <div>
                    <dt>{t.plan.price}</dt>
                    <dd>
                      {copRange(p.copMin, p.copMax)}
                      <br />
                      <span className="soft">
                        {usdRange(p.copMin, p.copMax)} · {p.unit[lang]}
                      </span>
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        )}
        {results.length > 0 && (
          <a className="btn btn-gold btn-wide" href={waLink(message)} target="_blank" rel="noopener noreferrer">
            <WhatsAppGlyph size={20} />
            {t.plan.send}
          </a>
        )}
      </div>
    </section>
  );
}
