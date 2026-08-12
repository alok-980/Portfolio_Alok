import { experience } from "../../../../data/data";
import useExperience from "../../hooks/useExperience";
import TimelineItem from "../components/TimelineItem";

const DOT_COLORS = ["teal", "yellow", "orange"];

const Experience = () => {
  const { sectionRef, itemRefs, lineRef, headingRef } = useExperience();

  return (
    <section id="experience" ref={sectionRef} className="relative bg-[var(--bg)] px-4 md:px-8 py-24 md:py-32 border-t hairline-dark">
      <div className="overflow-hidden">
        <p ref={headingRef} className="font-display uppercase text-sm tracking-wide text-[var(--ink-dim)] mb-14">
          <span className="text-[var(--pink)]">04</span>
          <span className="inline-block text-[16vw] md:text-[8vw]">/ Experience</span>
        </p>
      </div>

      <div className="relative md:pl-14">
        <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-[var(--line)]">
          <div ref={lineRef} className="w-full h-full bg-[var(--pink)]" />
        </div>

        <div className="space-y-16">
          {experience.map((job, i) => (
            <TimelineItem
              key={i}
              job={job}
              dotColor={DOT_COLORS[i % DOT_COLORS.length]}
              itemRef={(el) => (itemRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
