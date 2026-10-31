"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dicts } from "@/lib/dict";
import { WA_GENERAL, waLink, type Lang } from "@/lib/site";
import { Icon } from "./Icon";

export function Header({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const [open, setOpen] = useState(false);
  const home = lang === "es" ? "/" : "/en/";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const links = [
    ["#procedimientos", t.nav.procedures],
    ["#plan", t.nav.plan],
    ["#viaje", t.nav.travel],
    ["#equipo", t.nav.team],
    ["#preguntas", t.nav.faq],
  ] as const;

  return (
    <header className="top">
      <div className="demo-bar">
        <p className="demo-text">{t.demo.text}</p>
        <div className="demo-row">
          <p className="demo-ask">{t.demo.ask}</p>
          <a className="demo-cta" href={waLink(WA_GENERAL)} target="_blank" rel="noopener noreferrer">
            {t.demo.cta}
            <span className="sr-only"> (WhatsApp)</span>
          </a>
        </div>
      </div>
      <div className="nav-row">
        <a className="wordmark" href={home} aria-label={t.nav.home}>
          Lumen
        </a>
        <nav aria-label={t.nav.label} className={open ? "nav is-open" : "nav"} id="site-nav">
          <ul>
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
            <li className="nav-cta-mobile">
              <a href="#valoracion" className="btn btn-solid" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav-tools">
          <div className="lang" role="group" aria-label={t.nav.langLabel}>
            <Link href="/" hrefLang="es" lang="es" aria-current={lang === "es" ? "page" : undefined} prefetch={false}>
              ES
            </Link>
            <Link href="/en/" hrefLang="en" lang="en" aria-current={lang === "en" ? "page" : undefined} prefetch={false}>
              EN
            </Link>
          </div>
          <a href="#valoracion" className="btn btn-solid nav-cta">
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
            <span className="sr-only">{open ? t.nav.close : t.nav.menu}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
