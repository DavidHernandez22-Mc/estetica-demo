import type { Metadata, Viewport } from "next";
import { dicts } from "./dict";
import { SITE_URL, type Lang } from "./site";

export const viewport: Viewport = {
  themeColor: "#133621",
  width: "device-width",
  initialScale: 1,
};

export function buildMetadata(lang: Lang): Metadata {
  const t = dicts[lang];
  const path = lang === "es" ? "/" : "/en/";
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: "Lumen",
    alternates: {
      canonical: path,
      languages: { es: "/", en: "/en/", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${path}`,
      siteName: "Lumen",
      title: t.meta.title,
      description: t.meta.description,
      locale: lang === "es" ? "es_CO" : "en_US",
      alternateLocale: lang === "es" ? ["en_US"] : ["es_CO"],
      images: [{ url: `${SITE_URL}/og.jpg`, width: 1200, height: 630, alt: t.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [`${SITE_URL}/og.jpg`],
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false, email: false, address: false },
  };
}
