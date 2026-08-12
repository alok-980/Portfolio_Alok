const AchievementItem = ({ item, color, itemRef }) => {
    return (
        <div ref={itemRef} className="flex items-center gap-4 border-b hairline-dark pb-4">
            <span
                style={{ background: `var(--${color})` }}
                className="shrink-0 font-display text-xs text-[var(--ink-dark)] w-14 h-14 rounded-full flex items-center justify-center rotate-[-4deg]"
            >
                {item.year}
            </span>
            <div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-[var(--ink-dim)]">{item.org}</p>
            </div>
        </div>
    );
};

export default AchievementItem;
