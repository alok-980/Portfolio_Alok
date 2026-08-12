import { profile, heroBadges } from "../../../../data/data";
import useHero from "../../hooks/useHero";
import HeroBadge from "../components/HeroBadge";

const Hero = () => {
  const { headlineRef, introLeftRef, introRightRef, ctaRef, panelRef, photoRef, role } = useHero();

  return (
    <section id="hero" className="relative bg-[var(--bg)] pt-28 md:pt-32 pb-10 px-4 md:px-8">
      <div className="reveal-mask">
        <h1 ref={headlineRef} className="font-display uppercase text-[15vw] md:text-[9.5vw] leading-[0.88] text-[var(--ink)] px-2">
          {role}
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-16 mt-6 md:mt-8 px-2">
        <p ref={introLeftRef} className="text-[var(--ink-dim)] text-[15px] md:text-base leading-relaxed opacity-0">
          {profile.introLeft}
        </p>
        <div className="flex items-start justify-between gap-6">
          <p className="text-[var(--ink-dim)] text-[15px] md:text-base leading-relaxed opacity-0" ref={introRightRef}>
            {profile.introRight}
          </p>
          <a
            ref={ctaRef}
            href={`mailto:${profile.email}`}
            data-cursor="grow"
            className="shrink-0 hidden sm:inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 decoration-[var(--pink)] hover:text-[var(--pink)] transition-colors whitespace-nowrap opacity-0"
          >
            GET IN TOUCH <span>→</span>
          </a>
        </div>
      </div>

      <div
        ref={panelRef}
        className="relative mt-10 md:mt-12 grid-pattern bg-[var(--panel)] rounded-tl-3xl rounded-bl-3xl rounded-tr-[120px] rounded-br-[120px] md:rounded-tr-[220px] md:rounded-br-[220px] overflow-hidden h-[70vh] md:h-[85vh] opacity-0"
      >
        <div className="absolute inset-0 flex items-end md:items-center justify-center">
          <div ref={photoRef} className="relative w-[62%] md:w-[34%] h-[92%] md:h-[88%] overflow-hidden rounded-t-[100px]">
            <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover grayscale-photo" />
          </div>
        </div>

        <div className="hidden md:block">
          {heroBadges.map((b, i) => (
            <HeroBadge key={i} badge={b} index={i} />
          ))}
        </div>

        <div className="md:hidden absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 justify-center">
          {heroBadges.slice(0, 4).map((b, i) => (
            <span
              key={i}
              style={{ background: `var(--${b.color})` }}
              className="font-display uppercase text-[10px] px-3 py-1.5 rounded-full text-[var(--ink-dark)] shadow-sm"
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
