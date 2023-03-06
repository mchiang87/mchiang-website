import { useRef, useEffect, useState } from "react";
import { IntroComponent } from "@components/Intro/Intro";
import { AboutComponent } from "@components/About/About";
import { SkillsComponent } from "@components/Skills/Skills";
import { ProjectsComponent } from "@components/Projects/Projects";
import { ResumeComponent } from "@components/Resume/Resume";

export function useHorizontalScroll(setDisplayed: Function) {
  const elRef = useRef(null);
  let displayIndex = 0;
  const displays = [
    <IntroComponent />,
    <SkillsComponent />,
    <ProjectsComponent />,
    <ResumeComponent />,
    <AboutComponent />,
  ];
  useEffect(() => {
    const el: any = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + 3 * e.deltaY,
          behavior: "smooth",
        });
        if (
          displayIndex >= 0 &&
          displayIndex < 4 &&
          Math.sign(e.deltaY) !== -1
        ) {
          displayIndex += e.deltaY / 100;
        } else if (displayIndex > 0 && Math.sign(e.deltaY) === -1) {
          displayIndex += e.deltaY / 100;
        }
        setDisplayed(displays[displayIndex]);
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
