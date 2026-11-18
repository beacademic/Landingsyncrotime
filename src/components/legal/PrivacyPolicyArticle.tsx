import type { ReactNode } from "react";
import { PRIVACY_EMAIL, policyFor } from "@/lib/privacyPolicy";

/**
 * Dibuja la política de privacidad (src/lib/privacyPolicy.ts) en el idioma pedido.
 * ESTE ARCHIVO ES IDÉNTICO EN LOS REPOSITORIOS LandingSyncrotime Y SyncroTime.
 */
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|[\w.+-]+@[\w-]+\.[\w.]*\w)/g;

export function inline(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i} className="text-[#1D1D1F] dark:text-white">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    if (part.startsWith("`")) return <code key={i} className="rounded bg-black/5 dark:bg-white/10 px-1 py-0.5 text-xs">{part.slice(1, -1)}</code>;
    if (part === PRIVACY_EMAIL) {
      return (
        <a key={i} href={`mailto:${part}`} className="font-semibold text-[#007AFF] dark:text-[#52A6FF] underline underline-offset-2">
          {part}
        </a>
      );
    }
    return part;
  });
}

export function PrivacyPolicyArticle({ locale }: { locale: string }) {
  const policy = policyFor(locale);
  const heading = "text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading";

  return (
    <article className="rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-6 sm:p-12 shadow-sm relative overflow-hidden">
      <div className="space-y-8 text-sm text-[#515154] dark:text-[#A1A1A6] leading-relaxed">
        <div className="space-y-2">
          {policy.intro.map((text) => (
            <p key={text}>{inline(text)}</p>
          ))}
        </div>

        {policy.sections.map((section) => (
          <section key={section.title}>
            <h2 className={heading}>{section.title}</h2>
            <div className="space-y-3">
              {section.blocks.map((block, i) =>
                "p" in block ? (
                  <p key={i}>{inline(block.p)}</p>
                ) : (
                  <ul key={i} className="list-disc pl-5 space-y-1.5">
                    {block.ul.map((item) => (
                      <li key={item}>{inline(item)}</li>
                    ))}
                  </ul>
                ),
              )}
              {section.table && (
                <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-white/10">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <caption className="sr-only">{section.title}</caption>
                    <thead className="bg-black/5 dark:bg-white/5 text-[#1D1D1F] dark:text-white">
                      <tr>
                        {policy.tableHead.map((h) => (
                          <th key={h} scope="col" className="px-3 py-2 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5 dark:divide-white/10">
                      {policy.treatments.map((t) => (
                        <tr key={t.purpose}>
                          <th scope="row" className="px-3 py-2 align-top font-semibold text-[#1D1D1F] dark:text-white">{t.purpose}</th>
                          <td className="px-3 py-2 align-top">{t.data}</td>
                          <td className="px-3 py-2 align-top">{t.basis}</td>
                          <td className="px-3 py-2 align-top">{t.recipients}</td>
                          <td className="px-3 py-2 align-top">{t.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
