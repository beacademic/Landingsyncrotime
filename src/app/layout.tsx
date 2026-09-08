import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SyncroTime - Generador de Horarios Escolares y Universitarios",
    template: "%s | SyncroTime",
  },
  description:
    "Optimiza los horarios de tu institución educativa en minutos con nuestro motor de optimización algorítmica y combinatoria. Cero choques de docentes, salas o asignaturas.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
