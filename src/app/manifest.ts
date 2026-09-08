import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SyncroTime — Generador de Horarios Escolares y Universitarios",
    short_name: "SyncroTime",
    description:
      "Plataforma de generación automática de horarios escolares y universitarios sin conflictos mediante optimización algorítmica.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F5F7",
    theme_color: "#007AFF",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
