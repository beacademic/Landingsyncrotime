import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = (process.env.NEXT_PUBLIC_LANDING_URL || "https://syncrotime.com").replace(/\/$/, "");

/*
 * Raíz de syncrotime.com. El sitio es una exportación estática (GitHub Pages), sin redirecciones de
 * servidor, y redirect() de Next generaba una página de error vacía con código 200. Esta página:
 * - envía al visitante a su idioma (es / en / pt) según el navegador;
 * - sin JavaScript, redirige a /es/ con meta refresh (Google lo trata como redirección permanente);
 * - declara canonical y hreflang hacia las versiones de idioma, y deja enlaces visibles a las tres.
 */
export const metadata: Metadata = {
  title: "SyncroTime: generador de horarios escolares y universitarios",
  description:
    "Generador de horarios escolares y universitarios en español, inglés y portugués. School & university timetable generator. Gerador de horários escolares.",
  alternates: {
    canonical: `${baseUrl}/es/`,
    languages: {
      es: `${baseUrl}/es/`,
      en: `${baseUrl}/en/`,
      pt: `${baseUrl}/pt/`,
      "x-default": `${baseUrl}/es/`,
    },
  },
};

const languageRedirect = `(function(){try{var l=((navigator.languages&&navigator.languages[0])||navigator.language||"es").toLowerCase();var t=l.indexOf("pt")===0?"pt":l.indexOf("en")===0?"en":"es";location.replace("/"+t+"/"+location.search+location.hash);}catch(e){location.replace("/es/");}})();`;

export default function RootPage() {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="refresh" content="0; url=/es/" />
        <script dangerouslySetInnerHTML={{ __html: languageRedirect }} />
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", textAlign: "center" }}>
        <p>SyncroTime</p>
        <nav aria-label="Idioma / Language / Idioma">
          <Link href="/es/" hrefLang="es">Español</Link>
          {" · "}
          <Link href="/en/" hrefLang="en">English</Link>
          {" · "}
          <Link href="/pt/" hrefLang="pt">Português</Link>
        </nav>
      </body>
    </html>
  );
}
