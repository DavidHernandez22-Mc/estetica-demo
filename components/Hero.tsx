import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { photos } from "@/lib/photos";
import { Icon } from "./Icon";

export function Hero({ t }: { t: Dict }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-head">
        <div className="hero-words">
          <h1 id="hero-title" className="display hero-title">
            {t.hero.title}
          </h1>
          <p className="hero-kicker">{t.hero.kicker}</p>
        </div>
        <div className="hero-copy">
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a href="#plan" className="btn btn-solid">
              {t.hero.plan}
              <Icon name="arrow" size={20} />
            </a>
            <a href="#valoracion" className="btn btn-ghost">
              {t.hero.virtual}
            </a>
          </div>
          <p className="hero-note">{t.hero.note}</p>
        </div>
      </div>

      <div className="hero-rail">
        <figure className="print print-square">
          <Image src={photos.heroSkin} alt={t.hero.alt3} sizes="(max-width: 760px) 40vw, 16vw" loading="eager" />
        </figure>

        <figure className="print print-tall">
          <div className="shutter">
            <Image
              src={photos.heroPortrait}
              alt={t.hero.alt1}
              sizes="(max-width: 760px) 72vw, 34vw"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <figcaption>{t.hero.cap1}</figcaption>
        </figure>

        <figure className="print print-wide">
          <Image src={photos.valley} alt={t.hero.alt2} sizes="(max-width: 760px) 100vw, 40vw" loading="eager" />
          <figcaption>{t.hero.cap2}</figcaption>
        </figure>
      </div>
    </section>
  );
}
