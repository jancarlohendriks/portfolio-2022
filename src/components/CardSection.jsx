import { useRef, useState, useEffect } from "react";
import { useScrollPercentage } from "react-scroll-percentage";

export const CardSection = ({ children }) => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });

  return (
    // <section ref={ref} className="section" style={{transform: `rotateX(${percentage*50}deg)`}}>
    <section ref={ref} className="section">
      {/* <h2>{`Percentage scrolled: ${percentage.toPrecision(2)}%.`}</h2> */}
      <div>{children}</div>
    </section>
  );
};
