import useStickerFloat from "../../hooks/useStickerFloat";

const COLOR_MAP = {
    teal: "var(--teal)",
    yellow: "var(--yellow)",
    orange: "var(--orange)",
    pink: "var(--pink)",
    green: "var(--green)",
};

const TEXT_ON = {
    teal: "var(--ink-dark)",
    yellow: "var(--ink-dark)",
    orange: "var(--ink-dark)",
    pink: "var(--panel)",
    green: "var(--ink-dark)",
};

const HeroBadge = ({ badge, index = 0 }) => {
    const ref = useStickerFloat(badge.rotate, index);
    const isCircle = badge.shape === "circle";
    const isWide = badge.shape === "pill-wide";

    return (
        <div
            ref={ref}
            data-cursor="grow"
            style={{
                position: "absolute",
                top: badge.top,
                left: badge.left,
                background: COLOR_MAP[badge.color],
                color: TEXT_ON[badge.color],
                rotate: `${badge.rotate}deg`,
            }}
            className={`select-none shadow-[3px_4px_0_rgba(16,15,12,0.18)] ${isCircle
                    ? "w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center text-center p-3"
                    : isWide
                        ? "px-5 py-3 rounded-2xl max-w-[220px]"
                        : "px-4 py-2.5 rounded-xl max-w-[190px]"
                }`}
        >
            <span className={`font-display uppercase leading-[1.05] ${isCircle ? "text-[11px] md:text-xs" : "text-xs md:text-sm"}`}>
                {badge.sub && (
                    <span className="block font-mono normal-case font-normal text-[9px] opacity-70 mb-0.5 tracking-wide">
                        {badge.sub}
                    </span>
                )}
                {badge.label}
            </span>
        </div>
    );
};

export default HeroBadge;
