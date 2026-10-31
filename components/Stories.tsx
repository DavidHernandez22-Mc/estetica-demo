import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { photos } from "@/lib/photos";

export function Stories({ t }: { t: Dict }) {
  const [main, ...rest] = t.stories.items;
  return (
    <section id="testimonios" className="section stories" aria-labelledby="stories-title">
      <h2 id="stories-title" className="sr-only">
        {t.stories.title}
      </h2>
      <div className="story-main">
        <figure className="story-portrait" data-reveal>
          <Image src={photos.reading} alt={t.stories.alt} sizes="(max-width: 760px) 72vw, 32vw" />
          <figcaption>{t.stories.photoNote}</figcaption>
        </figure>
        <figure className="story-quote" data-reveal>
          <blockquote>
            <p>“{main.quote}”</p>
          </blockquote>
          <figcaption>
            <strong>{main.who}</strong> · {main.place}
            <br />
            <span className="soft">{main.proc}</span>
            <span className="tag">{t.stories.label}</span>
          </figcaption>
        </figure>
      </div>
      <div className="story-more">
        <figure className="story-small-photo" data-reveal>
          <Image src={photos.balcony} alt={t.stories.altSmall} sizes="(max-width: 760px) 44vw, 16vw" />
        </figure>
        {rest.map((s) => (
          <figure key={s.who} className="story-mini" data-reveal>
            <blockquote>
              <p>“{s.quote}”</p>
            </blockquote>
            <figcaption>
              <strong>{s.who}</strong> · {s.place}
              <br />
              <span className="soft">{s.proc}</span>
              <span className="tag">{t.stories.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
