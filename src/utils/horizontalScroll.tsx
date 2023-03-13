import { useRef, useEffect } from "react";

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

        el.scrollTo({
          left:
            el.scrollLeft +
            (((el.firstChild.clientWidth - 1000) / 4) * e.deltaY) / 100,
          behavior: "smooth",
        });
        if (displayed >= 0 && displayed < 4 && Math.sign(e.deltaY) !== -1) {
          setDisplayed((displayed += e.deltaY / 100));
        } else if (displayed > 0 && Math.sign(e.deltaY) === -1) {
          setDisplayed((displayed += e.deltaY / 100));
        }
      };
      el.addEventListener("wheel", onWheel, { passive: true });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [displayed]);
  return elRef;
};
