import type { Dict } from "@/lib/dict";
import { PRIVACY_URL } from "@/lib/site";

export function PrivacyNote({ t, className = "" }: { t: Dict; className?: string }) {
  return (
    <p className={`privacy-note small ${className}`.trim()}>
      {t.privacy.before}
      <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">
        {t.privacy.link}
      </a>
      {t.privacy.after}
    </p>
  );
}
