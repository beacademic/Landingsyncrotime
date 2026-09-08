import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RootNotFound() {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#F5F5F7] dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center justify-center p-6 font-sans antialiased">
        <div className="max-w-md w-full text-center p-8 rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 shadow-xl">
          <div className="text-6xl font-extrabold text-[#007AFF] mb-4 font-mono">404</div>
          <h1 className="text-2xl font-bold mb-2">Página no encontrada</h1>
          <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] mb-6">
            La página que buscas no existe o ha sido movida.
          </p>
          <Link
            href="/es/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white font-semibold text-sm shadow-md hover:opacity-95 transition-all"
          >
            <ArrowLeft size={16} />
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
