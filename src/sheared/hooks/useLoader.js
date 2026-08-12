import { useEffect } from "react";
import gsap from "gsap";

export default function useLoader({ rootRef, nameRef, counterRef, barRef, barWrapRef, panelTopRef, panelBottomRef, onDone }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        const counter = { val: 0 };
        let bounceTween;

        // initial hidden offset — entrance ke liye starting position
        gsap.set([nameRef.current, counterRef.current], { y: 12 });

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = "";
                onDone?.();
            },
        });

        tl.to(barWrapRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
        })
            .to(counterRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            }, "-=0.15")
            .to(nameRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out",
            }, "<")
            .call(() => {
                bounceTween = gsap.to(counterRef.current, {
                    y: -8,
                    duration: 0.28,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            })
            .to(counter, {
                val: 100,
                duration: 1.9,
                ease: "power2.inOut",
                onUpdate: () => {
                    const v = Math.floor(counter.val);
                    if (counterRef.current) counterRef.current.textContent = String(v).padStart(3, "0");
                    if (barRef.current) gsap.set(barRef.current, { scaleX: v / 100 });
                },
            }, "+=0.2")
            .call(() => {
                bounceTween?.kill();
                gsap.set(counterRef.current, { y: 0 });
            })
            .to([nameRef.current, counterRef.current, barWrapRef.current], {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
            }, "+=0.15")
            .to(panelTopRef.current, {
                yPercent: -100,
                duration: 0.85,
                ease: "expo.inOut",
            }, "+=0.05")
            .to(panelBottomRef.current, {
                yPercent: 100,
                duration: 0.85,
                ease: "expo.inOut",
            }, "<");

        return () => {
            bounceTween?.kill();
            tl.kill();
        };
    }, []);
}