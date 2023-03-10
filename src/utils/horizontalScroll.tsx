import { RefObject, useRef, useEffect, useState } from "react";

export const useHorizontalScroll = (
  displayed: number,
  setDisplayed: Function
) => {
  const elRef = useRef(null);
  useEffect(() => {
    const el: any = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + 4 * e.deltaY,
          behavior: "smooth",
        });
        if (displayed >= 0 && displayed < 4 && Math.sign(e.deltaY) !== -1) {
          setDisplayed((displayed += e.deltaY / 100));
        } else if (displayed > 0 && Math.sign(e.deltaY) === -1) {
          setDisplayed((displayed += e.deltaY / 100));
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [displayed]);
  return elRef;
};
