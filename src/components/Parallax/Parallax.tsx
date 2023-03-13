import React, { ReactNode, useEffect, useRef } from "react";
import { useHorizontalScroll } from "@Utils/horizontalScroll";

type Props = {
  children: ReactNode;
  displayed: number;
  setBackgroundRef: Function;
  setDisplayed: Function;
  setForegroundRef: Function;
};

export const ParallaxComponent = ({
  children,
  displayed,
  setBackgroundRef,
  setDisplayed,
  setForegroundRef,
}: Props) => {
  const backgroundRef = useHorizontalScroll(displayed, setDisplayed);
  const foregroundRef = useHorizontalScroll(displayed, setDisplayed);

  useEffect(() => {
    setBackgroundRef(backgroundRef);
    setForegroundRef(foregroundRef);
  }, []);

  return (
    <section ref={backgroundRef} className='w-screen h-screen overflow-hidden'>
      <section
        ref={foregroundRef}
        className='Background h-screen bg-black bg-gradient-to-r from-pink-500 w-[150%] overflow-hidden'
      >
        <section className='Foreground h-2/5 bg-green-100 relative inset-x-0 top-1/2 w-[200%] bg-gradient-to-r from-indigo-500'>
          {children}
        </section>
      </section>
    </section>
  );
};
