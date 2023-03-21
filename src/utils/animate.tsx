import React, { useEffect, useRef } from "react";

export const animate = () => {
  const ref = useRef(null);

  const callback = (entry) => {
    console.log(entry);
  };

  const observer = new IntersectionObserver(callback, {
    root: ref.current,

    threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
  });

  useEffect(() => {
    observer.observe(ref.current);
  });

  return <div ref={ref} />;
};
