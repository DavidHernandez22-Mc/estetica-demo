import type { Dict } from "@/lib/dict";

export function PrivacyNote({ t, className = "" }: { t: Dict; className?: string }) {
  return (
    <p className={`privacy-note small ${className}`.trim()}>
      {t.privacy.before}
      <a href={t.privacy.url} target="_blank" rel="noopener noreferrer">
        {t.privacy.link}
      </a>
      {t.privacy.after}
    </p>
  );
}
