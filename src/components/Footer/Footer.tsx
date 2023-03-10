import React, { ReactElement, RefObject } from "react";

type DisplayObject = {
  component: ReactElement;
  coord: number;
};

type Props = {
  displays: DisplayObject[];
  foregroundRef: RefObject<HTMLElement> | null;
  setDisplayed: Function;
};

export const FooterComponent = ({
  displays,
  foregroundRef,
  setDisplayed,
}: Props) => {
  const handleClick = (componentIndex) => {
    const el = foregroundRef?.current;
    setDisplayed(componentIndex);
    el.scrollTo({
      left: displays[componentIndex].coord,
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
