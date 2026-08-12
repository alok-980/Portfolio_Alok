import { useRef, useState } from "react";
import { profile } from "../../../data/data";
import useScrollToSection from "../../hooks/useScrollToSection";
import { useNavbarEntrance, useMenuTransition } from "../../hooks/useNavbar";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  useNavbarEntrance(navRef);
  useMenuTransition(menuRef, open);

  const goTo = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 inset-x-0 z-[500] px-6 md:px-10 py-5 flex items-center justify-between bg-[var(--bg)] border-b hairline-dark"
      >
        <button data-cursor="grow" onClick={() => goTo("hero")} className="flex items-center gap-3">
          <span className="w-9 h-6 rounded-full border-2 border-[var(--ink)] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[var(--pink)]" />
          </span>
          <span className="font-display uppercase text-sm md:text-base leading-tight tracking-wide">
            {profile.name}
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-cursor="grow"
              onClick={() => goTo(l.id)}
              className="relative group py-1 text-[var(--ink-dim)] hover:text-[var(--ink)] transition-colors"
            >
              {l.label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-[var(--pink)] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.resumeUrl}
            download
            data-cursor="grow"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold border-b border-[var(--ink)] pb-0.5 hover:text-[var(--pink)] hover:border-[var(--pink)] transition-colors"
          >
            Resume ↓
          </a>
          <button data-cursor="grow" onClick={() => setOpen((o) => !o)} className="md:hidden text-sm font-semibold cursor-pointer">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div ref={menuRef} className="fixed inset-0 z-[400] bg-[var(--bg)] hidden flex-col overflow-y-auto px-6 md:px-16 py-24">
        <div className="flex flex-col gap-1">
          {LINKS.map((l, i) => (
            <div key={l.id} className="reveal-mask">
              <button
                data-cursor="grow"
                onClick={() => goTo(l.id)}
                className="menu-link font-display uppercase text-[15vw] md:text-[6.5vw] leading-[1.02] hover:text-[var(--pink)] transition-colors duration-300 text-left cursor-pointer"
              >
                <span className="font-mono normal-case text-sm align-super mr-4 text-[var(--ink-dim)]">0{i + 1}</span>
                {l.label}
              </button>
            </div>
          ))}
        </div>
        <div className="menu-link mt-14 flex flex-wrap gap-6 text-sm font-medium text-[var(--ink-dim)]">
          <a data-cursor="grow" href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">GitHub</a>
          <a data-cursor="grow" href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">LinkedIn</a>
          <a data-cursor="grow" href={`mailto:${profile.email}`} className="hover:text-[var(--ink)]">Email</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
