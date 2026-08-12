const TimelineItem = ({ job, dotColor, itemRef }) => {
    return (
        <div ref={itemRef} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 relative">
            <div
                style={{ background: `var(--${dotColor})` }}
                className="hidden md:block absolute -left-[3.65rem] top-0.5 w-4 h-4 rounded-full"
            />
            <div>
                <p className="font-mono text-sm text-[var(--ink-dim)]">{job.period}</p>
                <p className="text-xs uppercase tracking-[0.1em] text-[var(--ink-dim)]/70 mt-1">{job.location}</p>
            </div>
            <div>
                <h3 className="font-display uppercase text-2xl md:text-3xl mb-1">{job.role}</h3>
                <p className="font-medium text-[var(--ink-dim)] mb-4">{job.company}</p>
                <ul className="space-y-2">
                    {job.points.map((pt, j) => (
                        <li key={j} className="flex gap-3 text-base leading-snug text-[var(--ink)]">
                            <span className="text-[var(--pink)] mt-1">—</span>
                            <span>{pt}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TimelineItem;
