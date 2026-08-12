import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { skills } from "../../../data/data";

gsap.registerPlugin(ScrollTrigger);

export default function useSkillsAnimation() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null)
  const trackRef = useRef(null);
  const catRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (track) {
        const w = track.scrollWidth / 2;
        gsap.to(track, { x: -w, duration: 26, ease: "none", repeat: -1 });
      }

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

      catRefs.current.forEach((cat) => {
        if (!cat) return;
        const pills = cat.querySelectorAll(".skill-pill");

        gsap.fromTo(
          pills,
          { y: 20, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cat,
              start: "top 90%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const marqueeItems = [...skills.marquee, ...skills.marquee];

  return { sectionRef, trackRef, catRefs, marqueeItems, headingRef };
}