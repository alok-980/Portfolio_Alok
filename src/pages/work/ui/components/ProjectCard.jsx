const ProjectCard = ({ project, badgeColor }) => {
    return (
        <a
            href={project.link}
            data-cursor="grow"
            className="project-card group relative shrink-0 w-[82vw] md:w-[40vw] h-[60vh] md:h-[64vh] rounded-[32px] overflow-hidden bg-[var(--panel)] block"
        >
            <img
                src={project.image}
                alt={project.title}
                className="project-img absolute inset-0 object-cover grayscale-photo opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
            />
            <div
                style={{ background: `var(--${badgeColor})` }}
                className="absolute top-5 left-5 w-14 h-14 rounded-full flex items-center justify-center font-display text-lg text-[var(--ink-dark)] shadow-[2px_3px_0_rgba(0,0,0,0.25)] rotate-[-6deg]"
            >
                {project.id}
            </div>
            <span className="absolute top-5 right-5 font-mono text-xs bg-[var(--bg)] text-[var(--ink)] px-3 py-1.5 rounded-full">
                {project.year}
            </span>

            <div className="absolute inset-x-0 bottom-0 bg-[var(--panel)] p-6 md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-dark-dim)] mb-2">{project.category}</p>
                <h3 className="font-display uppercase text-3xl md:text-4xl text-[var(--ink-dark)] mb-3 leading-none">{project.title}</h3>
                <p className="max-w-md text-sm md:text-[15px] text-[var(--ink-dark-dim)] mb-4 leading-snug">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="font-mono text-[10px] uppercase tracking-wide border border-[var(--ink-dark)]/30 text-[var(--ink-dark)] rounded-full px-3 py-1">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
