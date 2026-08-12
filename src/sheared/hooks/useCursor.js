import { useEffect } from "react";
import gsap from "gsap";

export default function useCursor(dotRef, ringRef) {
    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: ringPos.x, y: ringPos.y };

        gsap.set(dot, { xPercent: -50, yPercent: -50 });
        gsap.set(ring, { xPercent: -50, yPercent: -50 });

        const onMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            gsap.to(dot, { x: mouse.x, y: mouse.y, duration: 0.1, ease: "power2.out" });
        };
        window.addEventListener("mousemove", onMove);

        const ticker = gsap.ticker.add(() => {
            ringPos.x += (mouse.x - ringPos.x) * 0.15;
            ringPos.y += (mouse.y - ringPos.y) * 0.15;
            gsap.set(ring, { x: ringPos.x, y: ringPos.y });
        });

        const growTargets = "a, button, [data-cursor='grow']";
        const onEnter = () => gsap.to(ring, { scale: 2.4, duration: 0.35, ease: "power3.out" });
        const onLeave = () => gsap.to(ring, { scale: 1, duration: 0.35, ease: "power3.out" });

        const attach = () => {
            document.querySelectorAll(growTargets).forEach((el) => {
                el.addEventListener("mouseenter", onEnter);
                el.addEventListener("mouseleave", onLeave);
            });
        };
        attach();
        const observer = new MutationObserver(attach);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMove);
            gsap.ticker.remove(ticker);
            observer.disconnect();
        };
    }, [dotRef, ringRef]);
}
