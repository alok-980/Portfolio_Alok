import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useEducationAnimation() {
    const sectionRef = useRef(null);
    const eduRefs = useRef([]);
    const achRefs = useRef([]);
    const headingRef1 = useRef(null);
    const headingRef2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (headingRef1.current) {
                gsap.fromTo(
                    headingRef1.current,
                    { x: "-100%", opacity: 0 },
                    {
                        x: "0%",
                        opacity: 1,
                        ease: "power2.out(1.2)",
                        scrollTrigger: {
                            trigger: headingRef1.current,
                            start: "top 90%",
                            end: "top 50%",
                            scrub: 1,
                        },
                    }
                );
            }

            gsap.fromTo(
                eduRefs.current,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 40%",
                        end: "top 40%",
                        scrub: 1,
                    },
                }
            );

            if (headingRef2.current) {
                gsap.fromTo(
                    headingRef2.current,
                    { x: "-100%", opacity: 0 },
                    {
                        x: "0%",
                        opacity: 1,
                        ease: "power2.out(1.2)",
                        scrollTrigger: {
                            trigger: headingRef2.current,
                            start: "top 90%",
                            end: "top 50%",
                            scrub: 1,
                        },
                    }
                );
            }

            gsap.fromTo(
                achRefs.current,
                { opacity: 0, y: 30, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 40%",
                        end: "top 30%",
                        scrub: 1,
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return { sectionRef, eduRefs, achRefs, headingRef1, headingRef2 };
}