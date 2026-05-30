"use client";

import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const moveDot = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseRef.current.x}px, ${mouseRef.current.y}px)`;
      }
    };

    const moveRing = () => {
      ringPosRef.current.x +=
        (mouseRef.current.x - ringPosRef.current.x) * 0.12;
      ringPosRef.current.y +=
        (mouseRef.current.y - ringPosRef.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(moveRing);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      moveDot();
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-cursor], .group"
      );
      if (ringRef.current) {
        ringRef.current.classList.toggle("cursor-hover", !!target);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    rafRef.current = requestAnimationFrame(moveRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#3b82f6] rounded-full pointer-events-none z-[9999]"
        style={{ transform: "translate(-100px, -100px)", willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-[#3b82f6]/40 rounded-full pointer-events-none z-[9998] transition-colors duration-300"
        style={{ transform: "translate(-100px, -100px)", willChange: "transform" }}
      />
    </>
  );
};
