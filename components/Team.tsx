import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { photos } from "@/lib/photos";

const teamPhotos = [
  { src: photos.teamLight, position: "28% 50%" },
  { src: photos.teamSyringe, position: "62% 50%" },
  { src: photos.teamDermatoscope, position: "24% 60%" },
  { src: photos.teamAnesthesia, position: "50% 60%" },
];

export function Team({ t }: { t: Dict }) {
  return (
    <section id="equipo" className="section team" aria-labelledby="team-title">
      <div className="team-pin">
        <h2 id="team-title" className="display h-giant">
          {t.team.title}
        </h2>
        <p className="soft small team-note">{t.team.note}</p>
      </div>
      <ul className="team-list">
        {t.team.people.map((m, i) => (
          <li key={m.name} className="person" data-reveal>
            <figure>
              <Image
                src={teamPhotos[i].src}
                alt={t.team.alts[i]}
                sizes="(max-width: 760px) 72vw, 28vw"
                style={{ objectPosition: teamPhotos[i].position }}
              />
            </figure>
            <h3 className="person-name">{m.name}</h3>
            <p className="person-role">{m.role}</p>
            <blockquote className="person-quote">
              <p>“{m.quote}”</p>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
