import { projects } from "../../../../data/data";
import useProjectScroll from "../../hooks/useProjectScroll";
import ProjectCard from "../components/ProjectCard";

const BADGE_COLORS = ["teal", "yellow", "orange", "pink", "green"];

const Project = () => {
  const { sectionRef, trackRef, progressRef, active, headingRef } = useProjectScroll();

  return (
    <section id="work" ref={sectionRef} className="relative h-screen overflow-hidden border-t hairline-dark bg-[var(--bg)]">
      <div className="absolute top-2 left-4 md:left-8 z-10 flex items-center gap-4 overflow-hidden">
        <p ref={headingRef} className="font-display uppercase text-sm tracking-wide text-[var(--ink-dim)]">
          <span className="text-[var(--pink)]">03</span>
          <span className="inline-block text-[16vw] md:text-[8vw]">/ Work</span>
        </p>
      </div>

      <div className="absolute top-20 right-4 md:right-8 z-10 font-mono text-xs tracking-[0.2em] text-[var(--ink-dim)]">
        <span className="text-[var(--ink)]">{String(active + 1).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}
      </div>

      <div ref={trackRef} className="flex h-full items-center gap-6 md:gap-10 pl-4 pt-18 md:pl-8 pr-[10vw] w-max">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} badgeColor={BADGE_COLORS[i % BADGE_COLORS.length]} />
        ))}
      </div>

      <div className="absolute bottom-14 left-4 right-4 md:left-8 md:right-8 h-1 bg-[var(--line)] rounded-full">
        <div ref={progressRef} className="h-full bg-[var(--pink)] origin-left scale-x-0 rounded-full" />
      </div>
    </section>
  );
};

export default Project;
