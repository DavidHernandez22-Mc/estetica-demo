import type { Metadata } from "next";
import Link from "next/link";
import { display, text } from "@/app/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Página no encontrada · Lumen Clínica Estética (demo)",
  description: "Esta página no existe. Vuelve al inicio de la demo de Lumen Clínica Estética.",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={`${display.variable} ${text.variable}`}>
      <body>
        <main className="nf">
          <p className="nf-code" aria-hidden="true">
            404
          </p>
          <h1 className="display h-statement">Esta página no existe.</h1>
          <p className="soft">Puede que el enlace esté incompleto o que la página se haya movido.</p>
          <p className="soft" lang="en">
            This page doesn’t exist. The link may be incomplete or the page may have moved.
          </p>
          <div className="nf-links">
            <Link className="btn btn-solid" href="/">
              Volver al inicio
            </Link>
            <Link className="btn btn-ghost" href="/en/" lang="en">
              Back to home (English)
            </Link>
          </div>
          <p className="small soft nf-demo">Sitio de demostración diseñado por David · Lumen es una clínica ficticia.</p>
        </main>
      </body>
    </html>
  );
}
