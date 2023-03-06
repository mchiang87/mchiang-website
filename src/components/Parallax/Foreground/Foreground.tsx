import React, { ReactNode } from "react";
import { useHorizontalScroll } from "@Utils/horizontalScroll";

type Props = {
  children: ReactNode;
};

export const ForegroundComponent = (props: Props) => {
  const scrollRef = useHorizontalScroll();

  return (
    <section className='Foreground h-2/5 bg-green-100 relative inset-x-0 top-1/2 w-[200%] bg-gradient-to-r from-indigo-500'>
      {props.children}
    </section>
  );
};
