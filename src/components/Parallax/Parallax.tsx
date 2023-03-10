import React, { ReactNode, useEffect, useRef } from "react";
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
  // const backgroundRef = useRef(null);
  // const foregroundRef = useRef(null);
  const scrollRef = useHorizontalScroll(displayed, setDisplayed);
  // const backgroundRef = useHorizontalScroll(displayed, setDisplayed);
  // const foregroundRef = useHorizontalScroll(displayed, setDisplayed);

  useEffect(() => {
    setForegroundRef(scrollRef);
  }, []);

  return (
    <section ref={scrollRef} className='w-screen h-screen overflow-hidden'>
      <section className='Background h-screen bg-black bg-gradient-to-r from-pink-500 w-[150%]'>
        <section className='Foreground h-2/5 bg-green-100 relative inset-x-0 top-1/2 w-[200%] bg-gradient-to-r from-indigo-500'>
          {children}
        </section>
      </section>
    </section>
  );
};
