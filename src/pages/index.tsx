import React, { useRef, useState } from "react";
import { ParallaxComponent } from "@Components/Parallax/Parallax";
import { MiniMeComponent } from "@Components/MiniMe/MiniMe";
import { FooterComponent } from "@components/Footer/Footer";
import { IntroComponent } from "@components/Intro/Intro";
import { AboutComponent } from "@components/About/About";
import { SkillsComponent } from "@components/Skills/Skills";
import { ProjectsComponent } from "@components/Projects/Projects";
import { ResumeComponent } from "@components/Resume/Resume";

export default function Home() {
  const elRef = useRef(null);
  const [displayed, setDisplayed] = useState(0);
  const [foregroundRef, setForegroundRef] = useState(null);

  const displays = [
    {
      component: <IntroComponent />,
      coord: 0,
    },
    {
      component: <SkillsComponent />,
      coord: 400,
    },
    {
      component: <ProjectsComponent />,
      coord: 800,
    },
    {
      component: <ResumeComponent />,
      coord: 1200,
    },
    {
      component: <AboutComponent />,
      coord: 1600,
    },
  ];

  // set mouse/coord logic here

  return (
    <div ref={elRef}>
      <ParallaxComponent
        displayed={displayed}
        setDisplayed={setDisplayed}
        setForegroundRef={setForegroundRef}
      >
        <MiniMeComponent objRef={elRef} />
        <section className='w-[800px] sticky left-8 top-0'>
          {displays[displayed].component}
        </section>
      </ParallaxComponent>
      <FooterComponent
        displays={displays}
        foregroundRef={foregroundRef}
        setDisplayed={setDisplayed}
      />
    </div>
  );
}
