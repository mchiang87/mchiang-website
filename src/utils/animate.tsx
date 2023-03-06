import React, { useEffect, useRef } from "react";

export const animate = () => {
  const ref = useRef(null);

  const callback = (entry) => {
    console.log(entry);
    // Get intersection data here
    // Like entry.intersectionRatio

    // Here we can set state or update ref
    // based on entry data
  };

  const observer = new IntersectionObserver(callback, {
    root: ref.current,
    // Creates a threshold of with increments of 0.01
    threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
  });

  useEffect(() => {
    observer.observe(ref.current);
  });

  return <div ref={ref} />;
};
