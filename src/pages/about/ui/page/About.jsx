import { about, experience } from "../../../../data/data";
import useAbout from "../../hooks/useAbout";
import StatBadge from "../components/StatBadge";

const STAT_COLORS = ["teal", "yellow", "orange", "pink"];

const About = () => {
  const { sectionRef, headingRef, slashRef, counterRef, arrowRef, quoteRef, statusRef, statRefs } = useAbout();
  const current = experience[0];

  return (
    <section id="about" ref={sectionRef} className="relative bg-[var(--bg)] px-4 md:px-8 py-24 md:py-32 border-t hairline-dark overflow-hidden">
      <div className="flex items-start justify-between">
        <h2 className="font-display uppercase leading-[0.82] flex items-start">
          <span className="reveal-mask inline-block mr-1 md:mr-3">
            <span ref={slashRef} className="inline-block text-[16vw] md:text-[8vw] italic origin-bottom-left">/</span>
          </span>
          <span className="reveal-mask inline-block">
            <span ref={headingRef} className="inline-block text-[16vw] md:text-[8vw]">ABOUT</span>
          </span>
        </h2>
        <span ref={counterRef} className="font-mono text-sm md:text-base text-[var(--ink-dim)] mt-3 md:mt-6 opacity-0 shrink-0">
          02/05
        </span>
      </div>

      <div className="grid md:grid-cols-12 gap-6 md:gap-10 mt-10 md:mt-14">
        <div className="md:col-span-3 flex justify-start md:justify-center">
          <svg
            ref={arrowRef}
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            className="w-24 h-24 md:w-36 md:h-36 opacity-0"
          >
            <line x1="24" y1="116" x2="112" y2="28" stroke="var(--ink-dim)" strokeWidth="10" strokeLinecap="round" />
            <path d="M56 28 H112 V84" stroke="var(--ink-dim)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        <div className="md:col-span-9">
          <p ref={quoteRef} className="text-lg md:text-xl leading-relaxed text-[var(--ink)] opacity-0 max-w-3xl">
            &ldquo;{about.paragraphs.join(" ")}&rdquo;
          </p>
          <p ref={statusRef} className="font-mono text-xs md:text-sm uppercase tracking-[0.1em] text-[var(--ink-dim)] mt-6 opacity-0">
            Currently working with {current.company} as a {current.role}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-8 mt-16 md:mt-20 md:pl-[25%]">
        {about.stats.map((s, i) => (
          <StatBadge
            key={i}
            stat={s}
            color={STAT_COLORS[i % STAT_COLORS.length]}
            badgeRef={(el) => (statRefs.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
