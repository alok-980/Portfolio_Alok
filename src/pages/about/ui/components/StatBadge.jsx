const StatBadge = ({ stat, color, badgeRef }) => {
    return (
        <div
            ref={badgeRef}
            data-value={stat.value}
            style={{ background: `var(--${color})` }}
            className="w-32 h-32 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center text-center text-[var(--ink-dark)] shadow-[3px_4px_0_rgba(0,0,0,0.25)]"
        >
            <p className="font-display text-3xl md:text-4xl">
                <span className="stat-num">0</span>
                {stat.suffix}
            </p>
            <p className="text-[9px] md:text-[10px] uppercase font-semibold tracking-wide mt-1 px-3 leading-tight">{stat.label}</p>
        </div>
    );
};

export default StatBadge;
