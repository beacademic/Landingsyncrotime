import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Scale } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/request";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const baseUrl = (process.env.NEXT_PUBLIC_LANDING_URL || "https://syncrotime.com").replace(/\/$/, "");

  const titleByLocale: Record<string, string> = {
    es: "Términos de Servicio | SyncroTime",
    en: "Terms of Service | SyncroTime",
    pt: "Termos de Serviço | SyncroTime",
  };

  const title = titleByLocale[locale] || titleByLocale.es;

  return {
    title,
    description: "Términos y condiciones de uso de la plataforma SyncroTime.",
    alternates: {
      canonical: `${baseUrl}/${locale}/terms/`,
      languages: {
        es: `${baseUrl}/es/terms/`,
        en: `${baseUrl}/en/terms/`,
        pt: `${baseUrl}/pt/terms/`,
        "x-default": `${baseUrl}/es/terms/`,
      },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-200">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-[20px] border-b border-black/5 dark:border-white/10">
        <Link href={`/${locale}/`} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-1.5 shadow-sm flex items-center justify-center">
            <Image src="/logo.png" alt="SyncroTime" width={22} height={22} className="object-contain" />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#1D1D1F] dark:text-white font-heading">
            Syncro<span className="text-[#007AFF] dark:text-[#52A6FF]">Time</span>
          </span>
        </Link>
        <Link
          href={`/${locale}/`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 transition-all text-[#1D1D1F] dark:text-white"
        >
          <ArrowLeft size={16} />
          <span>Volver al Inicio</span>
        </Link>
      </nav>

      {/* ─── Header ─── */}
      <header className="pt-32 pb-12 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center mx-auto mb-4 text-[#007AFF] dark:text-[#52A6FF]">
            <Scale size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 font-heading">
            Condiciones de Servicio
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
            Última actualización: 1 de junio de 2026
          </p>
        </div>
      </header>

      {/* ─── Content ─── */}
      <main className="pb-24 px-4 max-w-4xl mx-auto">
        <article className="rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="space-y-8 text-sm text-[#515154] dark:text-[#A1A1A6] leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                1. Aceptación de los Términos
              </h2>
              <p>
                Al registrarse, acceder o utilizar la plataforma <strong>SyncroTime</strong> (en adelante, &quot;el Servicio&quot;), provista por BeAcademic Limitada (en adelante, &quot;la Empresa&quot;), usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar el servicio.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                2. Descripción del Servicio y Uso de Cuenta
              </h2>
              <p className="mb-2">
                SyncroTime es una herramienta SaaS (Software as a Service) dedicada a la optimización algorítmica de horarios para instituciones académicas.
              </p>
              <p>
                Usted es responsable de mantener la seguridad y confidencialidad de sus credenciales de acceso. Cualquier actividad realizada bajo su cuenta se considerará de su exclusiva responsabilidad.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                3. Periodo de Prueba y Restricciones
              </h2>
              <p className="mb-2">
                El Servicio ofrece un periodo de prueba gratuito tras el registro. Durante este lapso de prueba:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>El usuario tiene acceso a las herramientas de configuración académica y simulación.</li>
                <li>Los informes y horarios generados en formato PDF exportable contendrán un sello de agua indicando que corresponden a un periodo de prueba.</li>
                <li>El sello de agua se removerá de manera automática tras la contratación de cualquiera de los planes de pago disponibles.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                4. Pagos, Precios y Facturación
              </h2>
              <p className="mb-2">
                Para la gestión de pagos, procesamiento de tarjetas y facturación, SyncroTime utiliza a <strong>Paddle.com</strong> como nuestro distribuidor autorizado (<em>Merchant of Record</em>). Al procesar un pago, usted entra en una relación comercial directa con Paddle, sujeta a los términos y condiciones de este procesador.
              </p>
              <p>
                Las suscripciones se ofrecen en modalidades mensuales (USD $42) y anuales (USD $400). Salvo que se cancele antes del término del ciclo de facturación actual, su plan se renovará automáticamente usando el mismo método de pago.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                5. Limitación de Responsabilidad
              </h2>
              <p>
                El motor de optimización procesa los datos y restricciones configurados por el usuario. La Empresa no garantiza que la salida matemática generada cumpla en el 100% de los casos con la totalidad de los criterios subjetivos de la institución y no se hace responsable por perjuicios derivados de planificaciones académicas causadas por restricciones mal ingresadas en la plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                6. Ley Aplicable y Jurisdicción
              </h2>
              <p>
                Estos Términos de Servicio se regirán e interpretarán de conformidad con las leyes de la República de Chile. Cualquier disputa relacionada con estos términos quedará bajo la exclusiva competencia de los tribunales de justicia de Santiago de Chile.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* ─── Footer ─── */}
      <footer className="py-8 px-4 border-t border-black/5 dark:border-white/10 text-center text-xs text-[#8E8E93]">
        <p className="mb-2">© {new Date().getFullYear()} SyncroTime · Todos los derechos reservados</p>
        <div className="flex justify-center gap-4">
          <Link href={`/${locale}/terms/`} className="hover:text-[#007AFF] transition-colors">Términos</Link>
          <Link href={`/${locale}/privacy/`} className="hover:text-[#007AFF] transition-colors">Privacidad</Link>
          <Link href={`/${locale}/refunds/`} className="hover:text-[#007AFF] transition-colors">Reembolsos</Link>
        </div>
      </footer>
    </div>
  );
}
