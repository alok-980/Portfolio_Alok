import { useEffect } from "react";
import gsap from "gsap";

export function useNavbarEntrance(navRef) {
    useEffect(() => {
        gsap.fromTo(navRef.current, { yPercent: -100 }, { yPercent: 0, duration: 1, ease: "power3.out", delay: 2.4 });
    }, [navRef]);
}

export function useMenuTransition(menuRef, open) {
    useEffect(() => {
        const el = menuRef.current;
        if (!el) return;
        if (open) {
            gsap.set(el, { display: "flex" });
            gsap.fromTo(el, { yPercent: -100 }, { yPercent: 0, duration: 0.6, ease: "power3.inOut" });
            gsap.fromTo(
                el.querySelectorAll(".menu-link"),
                { y: 60, opacity: 0, rotate: -4 },
                { y: 0, opacity: 1, rotate: 0, duration: 0.7, stagger: 0.07, delay: 0.2, ease: "back.out(1.6)" }
            );
        } else {
            gsap.to(el, { yPercent: -100, duration: 0.5, ease: "power3.in", onComplete: () => gsap.set(el, { display: "none" }) });
        }
    }, [menuRef, open]);
}
