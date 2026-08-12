import { education, achievements } from "../../../../data/data";
import useEducation from "../../hooks/useEducation";
import EducationItem from "../components/EducationItem";
import AchievementItem from "../components/AchievementItem";

const YEAR_COLORS = ["teal", "yellow", "orange", "pink", "green"];

const Education = () => {
  const { sectionRef, eduRefs, achRefs, headingRef1, headingRef2 } = useEducation();

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative bg-[var(--bg)] px-4 md:px-8 py-24 md:py-32 border-t hairline-dark grid md:grid-cols-2 gap-16"
    >
      <div>
        <div className="overflow-hidden">
          <p ref={headingRef1} className="font-display uppercase text-sm tracking-wide text-[var(--ink-dim)] mb-10">
            <span className="text-[var(--pink)]">05</span>
            <span className="inline-block text-[10vw] md:text-[6vw]">/ Education</span>
          </p>
        </div>
        <div className="space-y-8">
          {education.map((e, i) => (
            <EducationItem key={i} item={e} itemRef={(el) => (eduRefs.current[i] = el)} />
          ))}
        </div>
      </div>

      <div>
        <div className="overflow-hidden">
          <p ref={headingRef2} className="font-display uppercase text-sm tracking-wide text-[var(--ink-dim)] mb-10">
            <span className="text-[var(--pink)]">06</span>
            <span className="inline-block text-[10vw] md:text-[6vw]">/ Achievements</span>
          </p>
        </div>
        <div className="space-y-4">
          {achievements.map((a, i) => (
            <AchievementItem
              key={i}
              item={a}
              color={YEAR_COLORS[i % YEAR_COLORS.length]}
              itemRef={(el) => (achRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
