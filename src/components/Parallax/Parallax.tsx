import React, { ReactNode, useEffect } from "react";
import { useHorizontalScroll } from "@Utils/horizontalScroll";

type Props = {
  children: ReactNode;
  displayed: number;
  setDisplayed: Function;
  setForegroundRef: Function;
};

export const ParallaxComponent = ({
  children,
  displayed,
  setDisplayed,
  setForegroundRef,
}: Props) => {
  const scrollRef = useHorizontalScroll(displayed, setDisplayed);

  useEffect(() => {
    setForegroundRef(scrollRef);
  }, []);

  return (
    <section
      ref={scrollRef}
      className='w-screen h-screen overflow-hidden bg-black'
    >
      <section className='Foreground h-2/5 bg-green-100 relative inset-x-0 top-1/2 w-[200%] bg-gradient-to-r from-indigo-500'>
        {children}
      </section>
    </section>
  );
};
