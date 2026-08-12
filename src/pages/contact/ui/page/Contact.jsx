import { profile } from "../../../../data/data";
import useContact from "../../hooks/useContact";

const Contact = () => {
  const { sectionRef, labelRef, headingRef, btnRef, linksRef, ghost1Ref, ghost2Ref } = useContact();

  return (
    <section id="contact" ref={sectionRef} className="relative bg-[var(--bg)] px-4 md:px-8 py-28 md:py-40 border-t hairline-dark text-center">
      <p ref={labelRef} className="font-display uppercase text-sm tracking-wide text-[var(--ink-dim)] mb-8">
        <span className="text-[var(--pink)]">07</span><span className="inline-block text-[10vw] md:text-[3vw]">/ Contact</span> — {profile.availability}
      </p>

      <div ref={headingRef}>
        <h2 className="font-display uppercase text-[14vw] md:text-[7vw] leading-[0.92]">
          Let's build
          <br />
          <span className="text-[var(--pink)]">something great</span>
        </h2>
      </div>

      <div className="flex justify-center mt-14 relative">
        {/* ghost trail copies — behind the real button, same shape, faded */}
        <div ref={ghost1Ref} aria-hidden className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full pointer-events-none" style={{ background: "var(--yellow)", opacity: 0 }} />
        <div ref={ghost2Ref} aria-hidden className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full pointer-events-none" style={{ background: "var(--yellow)", opacity: 0 }} />

        <a
          ref={btnRef}
          href={`mailto:${profile.email}`}
          data-cursor="grow"
          style={{ background: "var(--yellow)" }}
          className="relative w-44 h-44 md:w-56 md:h-56 rounded-full text-[var(--ink-dark)] flex items-center justify-center font-display uppercase text-sm text-center hover:scale-105 transition-transform duration-300 shadow-[4px_6px_0_rgba(0,0,0,0.35)]"
        >
          Say hello
          <br />
          &darr;
        </a>
      </div>

      <div ref={linksRef} className="mt-20 flex flex-wrap justify-center gap-8 text-sm font-semibold">
        <a data-cursor="grow" href={profile.github} target="_blank" rel="noreferrer" className="border-b border-transparent hover:border-[var(--pink)] hover:text-[var(--pink)] pb-1">GitHub</a>
        <a data-cursor="grow" href={profile.linkedin} target="_blank" rel="noreferrer" className="border-b border-transparent hover:border-[var(--pink)] hover:text-[var(--pink)] pb-1">LinkedIn</a>
        <a data-cursor="grow" href={profile.twitter} target="_blank" rel="noreferrer" className="border-b border-transparent hover:border-[var(--pink)] hover:text-[var(--pink)] pb-1">Twitter</a>
        <a data-cursor="grow" href={profile.resumeUrl} download className="border-b border-transparent hover:border-[var(--pink)] hover:text-[var(--pink)] pb-1">Resume</a>
      </div>
    </section>
  );
};

export default Contact;