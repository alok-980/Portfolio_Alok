import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useExperienceAnimation() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const lineRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((item) => {
        if (!item) return;

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

        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", end: "bottom 60%", scrub: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return { sectionRef, itemRefs, lineRef, headingRef };
}