import { display, text } from "@/app/fonts";
import { buildMetadata } from "@/lib/meta";
import "@/app/globals.css";

export { viewport } from "@/lib/meta";
export const metadata = buildMetadata("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`} id="top" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
