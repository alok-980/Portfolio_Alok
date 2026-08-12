import Hero from "./../hero/ui/page/Hero";
import About from "./../about/ui/page/About";
import Skill from "./../skills/ui/page/Skill";
import Project from "./../work/ui/page/Project";
import Experience from "./../experience/ui/page/Experience";
import Education from "./../education/ui/page/Education";
import Contact from "./../contact/ui/page/Contact";

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

export default Landing;
