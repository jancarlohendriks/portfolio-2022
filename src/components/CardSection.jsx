import { useRef, useState, useEffect } from "react";
import { useScrollPercentage } from "react-scroll-percentage";

export const CardSection = ({ children }) => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });

  return (
    <section ref={ref} className="section">
      <div>{children}</div>
    </section>
  );
};
