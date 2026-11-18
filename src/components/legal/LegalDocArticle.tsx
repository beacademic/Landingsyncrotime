import type { LegalDoc } from "@/lib/legalDocs";
import { inline } from "./PrivacyPolicyArticle";

/**
 * Dibuja un documento legal (términos o reembolsos, de src/lib/legalDocs.ts) con el mismo estilo que la política
 * de privacidad. ESTE ARCHIVO ES IDÉNTICO EN LOS REPOSITORIOS LandingSyncrotime Y SyncroTime.
 */
export function LegalDocArticle({ doc }: { doc: LegalDoc }) {
  const heading = "text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 font-heading";

  return (
    <article className="rounded-3xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 p-6 sm:p-12 shadow-sm relative overflow-hidden">
      <div className="space-y-8 text-sm text-[#515154] dark:text-[#A1A1A6] leading-relaxed">
        {doc.intro.length > 0 && (
          <div className="space-y-2">
            {doc.intro.map((text) => (
              <p key={text}>{inline(text)}</p>
            ))}
          </div>
        )}

        {doc.sections.map((section) => (
          <section key={section.title} id={section.id} className="scroll-mt-28">
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
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
