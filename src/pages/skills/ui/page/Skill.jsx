import { skills } from "../../../../data/data";
import useSkills from "../../hooks/useSkills";
import SkillPill from "../components/SkillPill";

const COLORS = ["teal", "yellow", "orange", "pink", "green"];

const Skill = () => {
  const { sectionRef, trackRef, catRefs, marqueeItems, headingRef } = useSkills();

  return (
    <section id="skills" ref={sectionRef} className="relative bg-[var(--bg)] py-24 md:py-32 border-t hairline-dark overflow-hidden">
      <div className="px-4 md:px-8 mb-14 overflow-hidden">
        <p ref={headingRef} className="font-display uppercase text-sm tracking-wide text-[var(--ink-dim)]">
          <span className="text-[var(--pink)]">02</span>
          <span className="inline-block text-[16vw] md:text-[8vw]">/ Skills</span>
        </p>
      </div>

      <div className="no-scrollbar mb-16 md:mb-20 border-y hairline-dark py-5 -rotate-1 bg-[var(--pink)]">
        <div ref={trackRef} className="flex gap-8 w-max whitespace-nowrap">
          {marqueeItems.map((s, i) => (
            <span key={i} className="font-display uppercase text-3xl md:text-5xl text-[var(--ink)] flex items-center gap-8">
              {s} <span className="text-[var(--yellow)]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 grid md:grid-cols-4 gap-10 md:gap-8">
        {skills.categories.map((cat, i) => (
          <div key={i} ref={(el) => (catRefs.current[i] = el)}>
            <h3 className="font-display uppercase text-xs tracking-wide text-[var(--ink-dim)] mb-4">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, j) => (
                <SkillPill key={j} label={item} color={COLORS[(i + j) % COLORS.length]} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
