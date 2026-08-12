import { useRef } from "react";
import useCursor from "../../hooks/useCursor";

const Cursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    useCursor(dotRef, ringRef);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
};

export default Cursor;
