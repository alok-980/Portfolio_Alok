import { profile } from "../../../data/data";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg)] px-4 md:px-8 py-8 border-t hairline-dark flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs text-[var(--ink-dim)]">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p className="text-xs text-[var(--ink-dim)]">Built with React · Tailwind · GSAP</p>
    </footer>
  );
};

export default Footer;
