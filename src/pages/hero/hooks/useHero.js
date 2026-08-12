import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { profile } from "../../../data/data";

gsap.registerPlugin(ScrollTrigger);

export default function useHeroAnimation() {
    const headlineRef = useRef(null);
    const introLeftRef = useRef(null);
    const introRightRef = useRef(null);
    const ctaRef = useRef(null);
    const panelRef = useRef(null);
    const photoRef = useRef(null);
    const roleIndex = useRef(0);
    const [role, setRole] = useState(profile.roles[0]);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 2.6 });
        tl.fromTo(headlineRef.current, { yPercent: 110 }, { yPercent: 0, duration: 1.1, ease: "power4.out" })
            .fromTo(introLeftRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
            .fromTo(introRightRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
            .fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.5")
            .fromTo(panelRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
            .fromTo(photoRef.current, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "power3.out" }, "-=0.7");

        const rotate = () => {
            const wrap = headlineRef.current;
            if (!wrap) return;
            gsap.to(wrap, {
                yPercent: -110,
                duration: 0.5,
                ease: "power3.in",
                onComplete: () => {
                    roleIndex.current = (roleIndex.current + 1) % profile.roles.length;
                    setRole(profile.roles[roleIndex.current]);
                    gsap.set(wrap, { yPercent: 110 });
                    gsap.to(wrap, { yPercent: 0, duration: 0.6, ease: "power3.out" });
                },
            });
        };
        const interval = setInterval(rotate, 3200);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(photoRef.current, {
                yPercent: 8,
                ease: "none",
                scrollTrigger: { trigger: panelRef.current, start: "top bottom", end: "bottom top", scrub: true },
            });
        });
        return () => ctx.revert();
    }, []);

    return { headlineRef, introLeftRef, introRightRef, ctaRef, panelRef, photoRef, role };
}
