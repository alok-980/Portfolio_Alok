import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Cursor from "./sheared/ui/components/Cursor";
import AppRoute from "./routes/AppRoute";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <Cursor />
      <AppRoute />
    </>
  );
};

export default App;
