import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Idle floating loop + hover-grow interaction for a single hero sticker
 * badge. Phase-shifted per index so badges don't move in sync.
 */
export default function useStickerFloat(rotate, index) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const floatTl = gsap.to(el, {
            y: index % 2 === 0 ? -10 : 10,
            rotate: rotate + (index % 2 === 0 ? 3 : -3),
            duration: 2.4 + (index % 3) * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.15,
        });

        const onEnter = () => gsap.to(el, { scale: 1.12, duration: 0.35, ease: "back.out(2)" });
        const onLeave = () => gsap.to(el, { scale: 1, duration: 0.4, ease: "power3.out" });
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);

        return () => {
            floatTl.kill();
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, [rotate, index]);

    return ref;
}
