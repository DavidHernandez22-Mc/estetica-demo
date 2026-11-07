export type Lang = "es" | "en";

export const SITE_URL = "https://lumen-estetica-demo.vercel.app";
export const WA_NUMBER = "573008564773";
export const PRIVACY_URL = "https://david-web.castrod2207.workers.dev/privacidad/";

/** Reference exchange rate (TRM) used for every USD figure on the site. */
export const TRM = 3160;

export const WA_GENERAL =
  "Hola David, vi tu demo de la clínica estética y me interesa una web así para mi negocio.";
export const WA_TOOL_PREFIX = "Hola David, probé tu demo de la clínica estética:";

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function toolMessage(lines: string[]) {
  return [WA_TOOL_PREFIX, "", ...lines].join("\n");
}

const copFmt = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });
const usdFmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export function cop(value: number) {
  return `$${copFmt.format(value)} COP`;
}

export function usd(value: number) {
  // Round to the nearest 10 USD so the figures read as estimates, not quotes.
  return `US$${usdFmt.format(Math.round(value / TRM / 10) * 10)}`;
}

export function copRange(min: number, max: number) {
  return `$${copFmt.format(min)} – $${copFmt.format(max)} COP`;
}

export function usdRange(min: number, max: number) {
  const r = (v: number) => usdFmt.format(Math.round(v / TRM / 10) * 10);
  return `US$${r(min)} – ${r(max)}`;
}

export const TRM_LABEL = `1 USD = ${copFmt.format(TRM)} COP`;
