import { useRef } from "react";
import { profile } from "../../../data/data";
import useLoader from "../../hooks/useLoader";

const Loader = ({ onDone }) => {
  const rootRef = useRef(null);
  const nameRef = useRef(null);
  const counterRef = useRef(null);
  const barWrapRef = useRef(null);
  const barRef = useRef(null);
  const panelTopRef = useRef(null);
  const panelBottomRef = useRef(null);

  useLoader({ rootRef, nameRef, counterRef, barRef, barWrapRef, panelTopRef, panelBottomRef, onDone });

  return (
    <div ref={rootRef} className="fixed inset-0 z-[9998]">
      <div ref={panelTopRef} className="absolute inset-x-0 top-0 h-1/2 bg-[var(--bg)] flex items-end justify-center overflow-hidden">
        <div className="pb-4">
          <p ref={nameRef} className="font-display uppercase text-2xl md:text-4xl text-[var(--ink)] tracking-wide opacity-0">
            {profile.name}
          </p>
        </div>
      </div>
      <div ref={panelBottomRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-[var(--bg)] flex items-start justify-center overflow-hidden">
        <div className="pt-4 text-center w-48">
          <p ref={counterRef} className="font-display text-3xl md:text-4xl text-[var(--ink)] opacity-0">
            000
          </p>
          <div ref={barWrapRef} className="w-full h-[3px] bg-[var(--line)] mt-3 overflow-hidden rounded-full opacity-0">
            <div ref={barRef} className="h-full bg-[var(--pink)] origin-left scale-x-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;