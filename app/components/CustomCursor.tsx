"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Only enable on devices with a mouse/pointer (not touch)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-[width,height,opacity] duration-200 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: isHovered ? "44px" : "28px",
        height: isHovered ? "44px" : "28px",
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        backgroundColor: "rgba(255, 255, 255, 0.28)", // translucent white fill
        border: "1.5px solid rgba(255, 255, 255, 0.95)", // crisp white circle border
        boxShadow: isHovered
          ? "0 0 20px rgba(255, 255, 255, 0.85)"
          : "0 0 12px rgba(255, 255, 255, 0.65)",
        animation: "pulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite", // white blinking / pulse
      }}
    >
      {/* Pure white glowing center dot */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "4px",
          height: "4px",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 6px #ffffff",
        }}
      />
    </div>
  );
}
