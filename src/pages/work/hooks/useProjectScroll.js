import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "../../../data/data";

gsap.registerPlugin(ScrollTrigger);

export default function useProjectScroll() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const progressRef = useRef(null);
    const headingRef = useRef(null)
    const [active, setActive] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            const section = sectionRef.current;
            if (!track || !section) return;

            const getScrollAmount = () => track.scrollWidth - window.innerWidth;

            if (headingRef.current) {
                gsap.fromTo(
                    headingRef.current,
                    { x: "-100%", opacity: 0 },
                    {
                        x: "0%",
                        opacity: 1,
                        ease: "power2.out(1.2)",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 90%",
                            end: "top 50%",
                            scrub: 1,
                        },
                    }
                );
            }

            const st = ScrollTrigger.create({
                trigger: section,
                start: "top 6%",
                end: () => `+=${getScrollAmount() + window.innerHeight * 0.4}`,
                pin: true,
                scrub: 0.8,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const amount = getScrollAmount();
                    gsap.set(track, { x: -amount * self.progress });
                    if (progressRef.current) gsap.set(progressRef.current, { scaleX: self.progress });
                    setActive(Math.min(projects.length - 1, Math.floor(self.progress * projects.length)));
                },
            });

            return () => st.kill();
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return { sectionRef, trackRef, progressRef, active, headingRef };
}
