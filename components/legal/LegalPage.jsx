import Footer from "../Footer";
import Navbar from "../Navbar";
import { LegalHeading, LegalList, LegalParagraph, LegalTable } from "./LegalBlocks";

export default function LegalPage({ title, intro, sections }) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <section className="premium-gradient py-16 sm:py-20">
        <div className="section-shell">
          <p className="section-label">Shiv Shakti Fashion</p>
          <h1 className="section-title">{title}</h1>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <article className="section-shell soft-card max-w-[1100px] rounded-[2rem] p-6 sm:p-10">
          {intro.map((paragraph) => (
            <LegalParagraph key={paragraph}>{paragraph}</LegalParagraph>
          ))}

          {sections.map((section) => (
            <section key={section.heading} aria-labelledby={section.heading.replaceAll(" ", "-").toLowerCase()}>
              <LegalHeading>{section.heading}</LegalHeading>
              {section.paragraphs?.map((paragraph) => (
                <LegalParagraph key={paragraph}>{paragraph}</LegalParagraph>
              ))}
              {section.list && <LegalList items={section.list} />}
              {section.table && <LegalTable rows={section.table} />}
            </section>
          ))}
        </article>
      </section>
      <Footer />
    </main>
  );
}

