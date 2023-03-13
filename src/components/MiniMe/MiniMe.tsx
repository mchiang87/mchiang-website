import React, { RefObject, useEffect, useState } from "react";

type Props = {
  objRef: RefObject<HTMLElement> | null;
};

export const MiniMeComponent = ({ objRef }: Props) => {
  const stillMe = <div className='fixed left-8 bottom-44 h-8 w-8 bg-red-900' />;
  const movingMe = (
    <div className='fixed left-8 bottom-44 h-8 w-8 bg-blue-900' />
  );
  const [miniMe, setMiniMe] = useState(stillMe);

  useEffect(() => {
    const el: any = objRef?.current;
    if (el) {
      const onWheel = (e) => {
        let isScrolling;
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          setMiniMe(stillMe);
        }, 500);
        if (e.deltaY) {
          setMiniMe(movingMe);
        }
      };
      el.addEventListener("wheel", onWheel, { passive: true });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return miniMe;
};
