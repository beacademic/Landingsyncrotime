import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield } from "lucide-react";
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
    es: "Política de Privacidad | SyncroTime",
    en: "Privacy Policy | SyncroTime",
    pt: "Política de Privacidade | SyncroTime",
  };

  const title = titleByLocale[locale] || titleByLocale.es;

  return {
    title,
    description: "Política de privacidad y protección de datos de SyncroTime.",
    alternates: {
      canonical: `${baseUrl}/${locale}/privacy/`,
      languages: {
        es: `${baseUrl}/es/privacy/`,
        en: `${baseUrl}/en/privacy/`,
        pt: `${baseUrl}/pt/privacy/`,
        "x-default": `${baseUrl}/es/privacy/`,
      },
    },
  };
}

export default async function PrivacyPage({
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
          <div className="w-12 h-12 rounded-2xl bg-[#34C759]/10 border border-[#34C759]/20 flex items-center justify-center mx-auto mb-4 text-[#34C759]">
            <Shield size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 font-heading">
            Política de Privacidad
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
                1. Información que Recopilamos
              </h2>
              <p className="mb-2">
                Para el correcto funcionamiento de <strong>SyncroTime</strong>, recopilamos información en dos categorías:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Información de la Cuenta:</strong> Nombre de usuario, dirección de correo electrónico institucional y contraseñas (almacenadas con cifrado seguro).
                </li>
                <li>
                  <strong>Información Académica:</strong> Datos ingresados por los administradores para la generación de horarios, tales como nombres de profesores, asignaturas, cursos, salas de clases y restricciones horarias de disponibilidad.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                2. Uso de la Información
              </h2>
              <p className="mb-2">
                Los datos recolectados se utilizan exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Proveer y mantener el funcionamiento de la plataforma de horarios.</li>
                <li>Ejecutar el algoritmo de procesamiento del Motor Generador.</li>
                <li>Gestionar los accesos y roles de usuario (administradores e instituciones).</li>
                <li>Enviar notificaciones técnicas relevantes del sistema y soporte técnico.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                3. Compartición de Datos y Proveedores
              </h2>
              <p className="mb-2">
                No vendemos ni alquilamos su información personal a terceros. Compartimos información únicamente con proveedores de servicios estrictamente necesarios para la operación:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Paddle:</strong> Proveedor de pasarela de pago. Toda la información financiera y de tarjetas es procesada de forma segura por ellos. SyncroTime nunca almacena los números completos de sus tarjetas de crédito.
                </li>
                <li>
                  <strong>Google Cloud Platform (GCP):</strong> Infraestructura en la nube y colas de tareas asíncronas para el procesamiento del horario.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                4. Cookies y Sesiones
              </h2>
              <p>
                Utilizamos cookies de sesión estrictamente necesarias para el sistema de autenticación de NextAuth, asegurando que el usuario pueda permanecer conectado y seguro mientras trabaja en el panel de control.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                5. Seguridad de los Datos
              </h2>
              <p>
                La seguridad de su información es primordial. Implementamos medidas técnicas como la encriptación de datos en tránsito utilizando protocolos HTTPS/TLS, hashing de contraseñas mediante algoritmos robustos y restricciones estrictas de base de datos para asegurar el aislamiento de información entre diferentes instituciones.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading">
                6. Derechos del Usuario
              </h2>
              <p>
                Usted posee el derecho de acceso, rectificación, limitación de procesamiento o eliminación total de sus datos almacenados. Puede ejercer estos derechos en cualquier momento enviando una solicitud directa por correo electrónico a: <strong>beacademic.ltda@gmail.com</strong>.
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
