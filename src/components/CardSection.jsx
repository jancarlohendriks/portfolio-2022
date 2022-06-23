import { useRef, useState, useEffect } from "react";
import { useScrollPercentage } from "react-scroll-percentage";

export const CardSection = ({ children }) => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });

  return (
    <section ref={ref} className="section" style={{transform: `perspective(${percentage*0.1}px) rotateX(${percentage*0.1}deg)`}}>
      <h2>{`Percentage scrolled: ${percentage.toPrecision(2)}%.`}</h2>
      <div>{children}</div>
    </section>
  );
};
