import { useCallback } from "react";
import gsap from "gsap";

export default function useScrollToSection() {
    const scrollTo = useCallback((id) => {
        const target = document.getElementById(id);
        if (!target) return;
        gsap.to(window, {
            duration: 1.1,
            scrollTo: { y: target, offsetY: 0 },
            ease: "power2.inOut",
        });
    }, []);

    return scrollTo;
}
