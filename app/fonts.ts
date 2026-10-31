import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const display = localFont({
  src: [
    { path: "./fonts/zodiak-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/zodiak-400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const text = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-text",
  display: "swap",
});
