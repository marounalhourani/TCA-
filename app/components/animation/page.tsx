"use client"; // Add this for client-side rendering if needed

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LandingAnimation = () => {
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        circlesRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.5,
          duration: 1,
          ease: "power4.out",
        }
      );
    }
  }, []);

  const colors = ["#000000", "#555555", "#AAAAAA", "#DDDDDD"];

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) circlesRef.current[index] = el;
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: color,
            margin: "0 10px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default LandingAnimation;
