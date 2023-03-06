import React, { RefObject } from "react";
import { IntroComponent } from "@components/Intro/Intro";
import { AboutComponent } from "@components/About/About";
import { SkillsComponent } from "@components/Skills/Skills";
import { ProjectsComponent } from "@components/Projects/Projects";
import { ResumeComponent } from "@components/Resume/Resume";

type Props = {
  foregroundRef: RefObject<HTMLElement> | null;
  setDisplayed: Function;
};

export const FooterComponent = ({ foregroundRef, setDisplayed }: Props) => {
  const displays = {
    intro: {
      component: <IntroComponent />,
      coord: 0,
    },
    skills: {
      component: <SkillsComponent />,
      coord: 300,
    },
    projects: {
      component: <ProjectsComponent />,
      coord: 600,
    },
    resume: {
      component: <ResumeComponent />,
      coord: 900,
    },
    about: {
      component: <AboutComponent />,
      coord: 1200,
    },
  };

  const handleClick = (componentId) => {
    const el = foregroundRef?.current;
    setDisplayed(displays[componentId].component);
    el.scrollTo({
      left: displays[componentId].coord,
      behavior: "smooth",
    });
  };

  return (
    <section className='overflow-hidden bg-sky-300 grid grid-cols-5 gap-4 absolute bottom-0 left-0 w-full'>
      <h4 onClick={() => handleClick("intro")}>Home</h4>
      <h4 onClick={() => handleClick("skills")}>Skills</h4>
      <h4 onClick={() => handleClick("projects")}>Projects</h4>
      <h4 onClick={() => handleClick("resume")}>Resume</h4>
      <h4 onClick={() => handleClick("about")}>About Me</h4>
    </section>
  );
};
