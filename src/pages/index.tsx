import React, { useRef, useState } from "react";
import { ParallaxComponent } from "@Components/Parallax/Parallax";
import { MiniMeComponent } from "@Components/MiniMe/MiniMe";
import { FooterComponent } from "@components/Footer/Footer";
import { IntroComponent } from "@components/sections/Intro/Intro";
import { AboutComponent } from "@components/sections/About/About";
import { SkillsComponent } from "@components/sections/Skills/Skills";
import { ProjectsComponent } from "@components/sections/Projects/Projects";
import { ResumeComponent } from "@components/sections/Resume/Resume";

export default function Home() {
  const elRef = useRef(null);
  const [displayed, setDisplayed] = useState(0);
  const [foregroundRef, setForegroundRef] = useState(null);
  const [backgroundRef, setBackgroundRef] = useState(null);

  const displays = [
    {
      component: <IntroComponent />,
      fgCoord: 0,
      bgCoord: 0,
    },
    {
      component: <SkillsComponent />,
      fgCoord: 550,
      bgCoord: 166,
    },
    {
      component: <ProjectsComponent />,
      fgCoord: 1100,
      bgCoord: 332,
    },
    {
      component: <ResumeComponent />,
      fgCoord: 1650,
      bgCoord: 498,
    },
    {
      component: <AboutComponent />,
      fgCoord: 2200,
      bgCoord: 664,
    },
  ];

  // set mouse/coord logic here

  return (
    <div ref={elRef}>
      <ParallaxComponent
        displayed={displayed}
        setBackgroundRef={setBackgroundRef}
        setDisplayed={setDisplayed}
        setForegroundRef={setForegroundRef}
      >
        <MiniMeComponent objRef={elRef} />
        <section className='w-[800px] fixed left-8 bottom-96 index-50'>
          {displays[displayed].component}
        </section>
      </ParallaxComponent>
      <FooterComponent
        displays={displays}
        backgroundRef={backgroundRef}
        foregroundRef={foregroundRef}
        setDisplayed={setDisplayed}
      />
    </div>
  );
}
