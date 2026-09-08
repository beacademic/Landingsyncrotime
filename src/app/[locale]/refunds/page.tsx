import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, RotateCcw } from "lucide-react";
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
    es: "Política de Reembolsos | SyncroTime",
    en: "Refund Policy | SyncroTime",
    pt: "Política de Reembolso | SyncroTime",
  };

  const title = titleByLocale[locale] || titleByLocale.es;

  return {
    title,
    description: "Política de reembolsos y cancelaciones de SyncroTime.",
    alternates: {
      canonical: `${baseUrl}/${locale}/refunds/`,
      languages: {
        es: `${baseUrl}/es/refunds/`,
        en: `${baseUrl}/en/refunds/`,
        pt: `${baseUrl}/pt/refunds/`,
        "x-default": `${baseUrl}/es/refunds/`,
      },
    },
  };
}

export default async function RefundsPage({
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
          <div className="w-12 h-12 rounded-2xl bg-[#FF9500]/10 border border-[#FF9500]/20 flex items-center justify-center mx-auto mb-4 text-[#FF9500]">
            <RotateCcw size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 font-heading">
            Política de Reembolsos
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
                1. Periodo de Prueba Gratuito
              </h2>
              <p>
                Ofrecemos un periodo de prueba completo sin ningún costo ni obligación. No requerimos que ingrese tarjetas de crédito ni métodos de pago para iniciar el periodo de prueba. De esta forma, el usuario puede evaluar y validar la compatibilidad de las salidas de horarios generadas antes de tomar cualquier decisión de compra, eliminando la necesidad de solicitar reembolsos tras el pago inicial.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                2. Cancelaciones de Suscripción
              </h2>
              <p className="mb-2">
                Usted puede cancelar su suscripción a SyncroTime en cualquier momento directamente desde su panel de control del usuario en la pestaña de facturación, o enviando un correo a <strong>beacademic.ltda@gmail.com</strong>.
              </p>
              <p>
                Si cancela su suscripción recurrente, continuará teniendo acceso total al Servicio hasta el final de su ciclo de facturación en curso (mensual o anual). La Empresa no emite reembolsos parciales prorrateados por periodos de facturación no utilizados tras la cancelación voluntaria.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                3. Condiciones y Políticas de Reembolso
              </h2>
              <p className="mb-2">
                Al tratarse de la entrega inmediata de un servicio digital y recursos computacionales destinados al procesamiento de horarios académicos, por regla general todas las transacciones procesadas por nuestro Merchant of Record (Paddle) son <strong>finales y no reembolsables</strong>.
              </p>
              <p className="mb-2">
                Sin embargo, evaluaremos de forma justa y oportuna solicitudes excepcionales de reembolso en los siguientes casos dentro de un límite de catorce (14) días calendario tras la transacción:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Cargos duplicados o accidentales:</strong> Si hubo un cobro duplicado debido a un error técnico en el procesamiento del pago.
                </li>
                <li>
                  <strong>Fallas críticas de servicio:</strong> Si el sistema de optimización de horarios sufre una interrupción ininterrumpida y prolongada (mayor a 48 horas) que le impida generar o exportar su horario dentro del periodo crítico escolar, sin que nuestro soporte técnico logre solventarlo.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                4. Procedimiento para Solicitud de Reembolso
              </h2>
              <p>
                Para solicitar un reembolso por las causales indicadas en la sección 3, póngase en contacto directo con nuestro equipo a través de <strong>beacademic.ltda@gmail.com</strong> detallando la dirección de correo registrada en el plan, el ID de transacción provisto por Paddle y una descripción del problema técnico. Las solicitudes válidas aprobadas serán procesadas y devueltas a través del mismo método de pago utilizado para la suscripción inicial.
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
