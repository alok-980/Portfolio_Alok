import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useAboutAnimation() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const slashRef = useRef(null);
  const counterRef = useRef(null);
  const arrowRef = useRef(null);
  const quoteRef = useRef(null);
  const statusRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 30%",
          scrub: 1,
        },
      });

      tl.fromTo(slashRef.current, { yPercent: 120, rotate: -18 }, { yPercent: 0, rotate: -14, ease: "power2.out" })
        .fromTo(headingRef.current, { yPercent: 120 }, { yPercent: 0, ease: "power2.out" }, "<0.1")
        .fromTo(counterRef.current, { opacity: 0 }, { opacity: 1, ease: "none" }, "<0.2")
        .fromTo(
          arrowRef.current,
          { opacity: 0, scale: 0.4, rotate: -45, x: -20, y: 20 },
          { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0, ease: "power2.out" },
          "<0.2"
        )
        .fromTo(quoteRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, ease: "power2.out" }, "<0.2")
        .fromTo(statusRef.current, { opacity: 0 }, { opacity: 1, ease: "none" }, "<0.2");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        once: true,
        onEnter: () => {
          gsap.to(arrowRef.current, { y: -6, x: 6, duration: 1.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
        },
      });

      statRefs.current.forEach((el) => {
        if (!el) return;
        const target = { val: 0 };
        const final = Number(el.dataset.value);
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.fromTo(el, { scale: 0, rotate: -10 }, { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(2)" });
            gsap.to(target, {
              val: final,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                const numEl = el.querySelector(".stat-num");
                if (numEl) numEl.textContent = Math.floor(target.val);
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef, headingRef, slashRef, counterRef, arrowRef, quoteRef, statusRef, statRefs };
}