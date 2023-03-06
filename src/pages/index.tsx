import React, { useRef, useState } from "react";
import { ParallaxComponent } from "@Components/Parallax/Parallax";
import { MiniMeComponent } from "@Components/MiniMe/MiniMe";
import { FooterComponent } from "@components/Footer/Footer";
import { IntroComponent } from "@components/Intro/Intro";

export default function Home() {
  const elRef = useRef(null);
  const [displayed, setDisplayed] = useState(<IntroComponent />);
  const [foregroundRef, setForegroundRef] = useState(null);

  // set mouse/coord logic here

  return (
    <div ref={elRef}>
      <ParallaxComponent
        setDisplayed={setDisplayed}
        setForegroundRef={setForegroundRef}
      >
        <MiniMeComponent objRef={elRef} />
        <section className='w-[800px] sticky left-8 top-0'>{displayed}</section>
      </ParallaxComponent>
      <FooterComponent
        foregroundRef={foregroundRef}
        setDisplayed={setDisplayed}
      />
    </div>
  );
}
