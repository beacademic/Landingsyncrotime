"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Zap, Calendar } from "lucide-react";

export function SchedulePreviewDemo() {
  const t = useTranslations("landing.preview");
  const [selectedView, setSelectedView] = useState<"course" | "teacher">("course");

  const scheduleGrid = [
    {
      period: "08:00 - 09:30",
      mon: { subject: "Matemáticas", teacher: "Prof. Ramírez", room: "Sala 101", color: "bg-[#007AFF]/10 text-[#007AFF] dark:text-[#52A6FF] border-[#007AFF]/20" },
      tue: { subject: "Lenguaje", teacher: "Prof. Vega", room: "Sala 101", color: "bg-[#5856D6]/10 text-[#5856D6] dark:text-[#8B5CF6] border-[#5856D6]/20" },
      wed: { subject: "Historia", teacher: "Prof. Castillo", room: "Sala 101", color: "bg-[#FF9500]/10 text-[#FF9500] dark:text-[#FF9F0A] border-[#FF9500]/20" },
      thu: { subject: "Ciencias", teacher: "Prof. Soto", room: "Lab Química", color: "bg-[#34C759]/10 text-[#34C759] border-[#34C759]/20" },
      fri: { subject: "Inglés", teacher: "Prof. Smith", room: "Sala 101", color: "bg-[#007AFF]/10 text-[#007AFF] dark:text-[#52A6FF] border-[#007AFF]/20" },
    },
    {
      period: "09:45 - 11:15",
      mon: { subject: "Ciencias", teacher: "Prof. Soto", room: "Lab Química", color: "bg-[#34C759]/10 text-[#34C759] border-[#34C759]/20" },
      tue: { subject: "Matemáticas", teacher: "Prof. Ramírez", room: "Sala 101", color: "bg-[#007AFF]/10 text-[#007AFF] dark:text-[#52A6FF] border-[#007AFF]/20" },
      wed: { subject: "Educación Física", teacher: "Prof. Morales", room: "Gimnasio", color: "bg-[#FF2D55]/10 text-[#FF2D55] border-[#FF2D55]/20" },
      thu: { subject: "Lenguaje", teacher: "Prof. Vega", room: "Sala 101", color: "bg-[#5856D6]/10 text-[#5856D6] dark:text-[#8B5CF6] border-[#5856D6]/20" },
      fri: { subject: "Historia", teacher: "Prof. Castillo", room: "Sala 101", color: "bg-[#FF9500]/10 text-[#FF9500] dark:text-[#FF9F0A] border-[#FF9500]/20" },
    },
    {
      period: "11:30 - 13:00",
      mon: { subject: "Artes Visuales", teacher: "Prof. Silva", room: "Taller Arte", color: "bg-[#AF52DE]/10 text-[#AF52DE] border-[#AF52DE]/20" },
      tue: { subject: "Inglés", teacher: "Prof. Smith", room: "Sala 101", color: "bg-[#007AFF]/10 text-[#007AFF] dark:text-[#52A6FF] border-[#007AFF]/20" },
      wed: { subject: "Matemáticas", teacher: "Prof. Ramírez", room: "Sala 101", color: "bg-[#007AFF]/10 text-[#007AFF] dark:text-[#52A6FF] border-[#007AFF]/20" },
      thu: { subject: "Tecnología", teacher: "Prof. Herrera", room: "Lab Info", color: "bg-[#34C759]/10 text-[#34C759] border-[#34C759]/20" },
      fri: { subject: "Música", teacher: "Prof. Rivas", room: "Sala Música", color: "bg-[#5856D6]/10 text-[#5856D6] dark:text-[#8B5CF6] border-[#5856D6]/20" },
    },
  ];

  return (
    <div className="w-full rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-5 sm:p-7 shadow-lg hover:shadow-xl dark:shadow-black/20 backdrop-blur-xl overflow-hidden relative group transition-all duration-300">
      {/* Resplandor ambiental superior */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-60 dark:opacity-40 blur-2xl"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(0, 122, 255, 0.12), transparent 70%)" }}
      />
      {/* Línea de brillo sutil en el borde superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/15 to-transparent" />

      {/* Header bar of the preview */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/5 dark:border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#34C759]/10 border border-[#34C759]/25 text-[#34C759] text-xs font-semibold">
            <CheckCircle2 size={13} />
            <span>{t("conflictFree")}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/25 text-[#007AFF] dark:text-[#52A6FF] text-xs font-semibold">
            <Zap size={13} />
            <span>{t("liveTag")}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-full p-1 border border-black/5 dark:border-white/10 text-xs">
            <button
              onClick={() => setSelectedView("course")}
              className={`px-3 py-1 rounded-full transition-all font-semibold ${
                selectedView === "course"
                  ? "bg-[#007AFF] text-white shadow-sm"
                  : "text-[#515154] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white"
              }`}
            >
              1º Medio A
            </button>
            <button
              onClick={() => setSelectedView("teacher")}
              className={`px-3 py-1 rounded-full transition-all font-semibold ${
                selectedView === "teacher"
                  ? "bg-[#007AFF] text-white shadow-sm"
                  : "text-[#515154] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white"
              }`}
            >
              Prof. Ramírez
            </button>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#6E6E73] dark:text-[#A1A1A6] bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full border border-black/5 dark:border-white/10 font-medium">
            <Calendar size={12} />
            Periodo 2026
          </span>
        </div>
      </div>

      {/* Timetable Matrix Grid */}
      <div className="mt-4 overflow-x-auto relative z-10">
        <table className="w-full min-w-[620px] text-left border-collapse">
          <thead>
            <tr className="border-b border-black/5 dark:border-white/10">
              <th className="py-2.5 px-3 text-[11px] font-bold text-[#8E8E93] dark:text-[#636366] uppercase tracking-wider w-28">
                Bloque
              </th>
              <th className="py-2.5 px-3 text-[11px] font-bold text-[#515154] dark:text-[#A1A1A6] uppercase tracking-wider">
                {t("days.mon")}
              </th>
              <th className="py-2.5 px-3 text-[11px] font-bold text-[#515154] dark:text-[#A1A1A6] uppercase tracking-wider">
                {t("days.tue")}
              </th>
              <th className="py-2.5 px-3 text-[11px] font-bold text-[#515154] dark:text-[#A1A1A6] uppercase tracking-wider">
                {t("days.wed")}
              </th>
              <th className="py-2.5 px-3 text-[11px] font-bold text-[#515154] dark:text-[#A1A1A6] uppercase tracking-wider">
                {t("days.thu")}
              </th>
              <th className="py-2.5 px-3 text-[11px] font-bold text-[#515154] dark:text-[#A1A1A6] uppercase tracking-wider">
                {t("days.fri")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5 dark:divide-white/5">
            {scheduleGrid.map((row, idx) => (
              <tr key={idx} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-3 text-xs font-semibold text-[#6E6E73] dark:text-[#A1A1A6] whitespace-nowrap align-top font-mono">
                  {row.period}
                </td>
                {[row.mon, row.tue, row.wed, row.thu, row.fri].map((cell, cIdx) => (
                  <td key={cIdx} className="p-1.5 align-top">
                    <div
                      className={`p-2.5 rounded-2xl border transition-all hover:scale-[1.02] cursor-default shadow-xs ${cell.color}`}
                    >
                      <div className="font-bold text-xs leading-tight">
                        {cell.subject}
                      </div>
                      <div className="text-[11px] opacity-80 mt-0.5">
                        {selectedView === "course" ? cell.teacher : cell.room}
                      </div>
                      <div className="text-[10px] opacity-65 mt-0.5 flex items-center justify-between">
                        <span>{cell.room}</span>
                        <span className="font-mono text-[9px] bg-black/5 dark:bg-black/20 px-1 rounded">2h</span>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom status indicator */}
      <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#34C759]" />
            100% Carga pedagógica cubierta
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#007AFF]" />
            0 Ventanas docentes
          </span>
        </div>
        <span className="text-[11px] text-[#007AFF] dark:text-[#52A6FF] font-semibold">
          Optimizado en 12.4 segundos ⚡
        </span>
      </div>
    </div>
  );
}
