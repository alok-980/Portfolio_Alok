const SkillPill = ({ label, color }) => {
    return (
        <span
            style={{ background: `var(--${color})` }}
            className="skill-pill inline-block text-[var(--ink-dark)] text-xs md:text-sm font-semibold px-3.5 py-2 rounded-full shadow-[2px_3px_0_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:rotate-2 transition-transform duration-200"
        >
            {label}
        </span>
    );
};

export default SkillPill;
