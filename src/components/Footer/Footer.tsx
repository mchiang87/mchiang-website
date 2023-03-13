import React, { ReactElement, RefObject } from "react";

type DisplayObject = {
  component: ReactElement;
  fgCoord: number;
  bgCoord: number;
};

type Props = {
  backgroundRef: RefObject<HTMLElement> | null;
  displays: DisplayObject[];
  foregroundRef: RefObject<HTMLElement> | null;
  setDisplayed: Function;
};

export const FooterComponent = ({
  backgroundRef,
  displays,
  foregroundRef,
  setDisplayed,
}: Props) => {
  const handleClick = (componentIndex) => {
    const fgEl = foregroundRef?.current;
    const bgEl = backgroundRef?.current;
    setDisplayed(componentIndex);
    fgEl.scrollTo({
      left: displays[componentIndex].fgCoord,
      behavior: "smooth",
    });
    bgEl.scrollTo({
      left: displays[componentIndex].bgCoord,
      behavior: "smooth",
    });
  };

  return (
    <section className='overflow-hidden bg-sky-300 grid grid-cols-5 gap-4 absolute bottom-0 left-0 w-full'>
      <h4 onClick={() => handleClick(0)}>Home</h4>
      <h4 onClick={() => handleClick(1)}>Skills</h4>
      <h4 onClick={() => handleClick(2)}>Projects</h4>
      <h4 onClick={() => handleClick(3)}>Resume</h4>
      <h4 onClick={() => handleClick(4)}>About Me</h4>
    </section>
  );
};
