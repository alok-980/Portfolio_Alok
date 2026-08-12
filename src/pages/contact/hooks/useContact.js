import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useContactAnimation() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);
  const linksRef = useRef(null);
  const ghost1Ref = useRef(null);
  const ghost2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 25%",
          scrub: 1,
        },
      });

      tl.fromTo(labelRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, ease: "power2.out" })
        .fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: "power2.out" }, "<0.2")
        .fromTo(btnRef.current, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, ease: "power2.out" }, "<0.25")
        .fromTo(linksRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "power2.out" }, "<0.25");

      ScrollTrigger.create({
        trigger: btnRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          const shake = () => {
            const shakeTl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });
            const steps = [
              { x: -10, rotate: -10 },
              { x: 10, rotate: 10 },
              { x: -9, rotate: -9 },
              { x: 9, rotate: 9 },
              { x: -7, rotate: -7 },
              { x: 0, rotate: 0 },
            ];
            const els = [
              { el: btnRef.current, opacity: 1 },
              { el: ghost1Ref.current, opacity: 0.22 },
              { el: ghost2Ref.current, opacity: 0.12 },
            ];

            els.forEach(({ el, opacity }) => {
              if (!el) return;
              const kf = steps.map((s) => ({ ...s, opacity, duration: 0.06 }));
              shakeTl.to(el, { keyframes: kf }, 0);
            });
          };
          shake();
        },
      });
    }, sectionRef);

    const btn = btnRef.current;
    if (!btn) return () => ctx.revert();

    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      ctx.revert();
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return { sectionRef, labelRef, headingRef, btnRef, linksRef, ghost1Ref, ghost2Ref };
}