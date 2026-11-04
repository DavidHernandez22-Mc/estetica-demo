import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { photos } from "@/lib/photos";
import { Icon } from "./Icon";

const rowPhotos = [
  { src: photos.safeLoupes, shape: "r-portrait" },
  { src: photos.safeOr, shape: "r-wide" },
  { src: photos.safeAnesthesia, shape: "r-square" },
  { src: photos.safeConsult, shape: "r-wide r-small" },
  { src: photos.safeSupplies, shape: "r-portrait r-small" },
];

export function SafeClinic({ t }: { t: Dict }) {
  return (
    <section id="seguridad" className="section safe" aria-labelledby="safe-title">
      <div className="safe-head">
        <h2 id="safe-title" className="display h-statement" data-reveal>
          {t.safe.title}
        </h2>
        <p className="safe-lead" data-reveal>
          {t.safe.lead}
        </p>
      </div>
      <ul className="safe-rows">
        {t.safe.rows.map((row, i) => (
          <li key={row.t} className="safe-row" data-reveal>
            <Icon name="shield" size={40} className="safe-mark" />
            <div className="safe-text">
              <h3 className="h-row">{row.t}</h3>
              <p>{row.d}</p>
            </div>
            <figure className={`safe-photo ${rowPhotos[i].shape}`}>
              <Image src={rowPhotos[i].src} alt={t.safe.alts[i]} sizes="(max-width: 760px) 70vw, 22vw" />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
