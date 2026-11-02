"use client";

import React, { useState, useEffect, useRef } from "react";

const LINE1_TARGET = "You Build the Product.";
const LINE2_TARGET = "We Build to Sell.";

export default function TypewriterHeadline() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [cursorPos, setCursorPos] = useState<"line1" | "line2" | "done">("line1");
  const [isDeleting, setIsDeleting] = useState(false);

  // References for timeouts to avoid memory leaks
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Respect reduced motion settings
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      timeoutRef.current = setTimeout(() => {
        setLine1(LINE1_TARGET);
        setLine2(LINE2_TARGET);
        setCursorPos("done");
      }, 0);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    // Step 1: Type Line 1
    if (line1.length < LINE1_TARGET.length) {
      const nextChar = LINE1_TARGET[line1.length];
      const delay =
        nextChar === " " ? 95 : nextChar === "." ? 220 : 50 + Math.random() * 35;

      timeoutRef.current = setTimeout(() => {
        setLine1(LINE1_TARGET.slice(0, line1.length + 1));
      }, delay);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    // Step 2: Line 1 finished, transition to Line 2
    if (line1.length === LINE1_TARGET.length && cursorPos === "line1") {
      timeoutRef.current = setTimeout(() => {
        setCursorPos("line2");
      }, 320);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    // Step 3: Type Line 2
    if (cursorPos === "line2" && !isDeleting && line2.length < LINE2_TARGET.length) {
      const nextChar = LINE2_TARGET[line2.length];
      const delay =
        nextChar === " " ? 95 : nextChar === "." ? 260 : 55 + Math.random() * 40;

      timeoutRef.current = setTimeout(() => {
        setLine2(LINE2_TARGET.slice(0, line2.length + 1));
      }, delay);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    // Step 4: Line 2 complete, hold before backspacing
    if (
      cursorPos === "line2" &&
      !isDeleting &&
      line2.length === LINE2_TARGET.length
    ) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, 4200);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    // Step 5: Deleting Line 2
    if (isDeleting && line2.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setLine2(line2.slice(0, -1));
      }, 28);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    // Step 6: Line 2 is completely erased, pause then type again
    if (isDeleting && line2.length === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
      }, 550);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }
  }, [line1, line2, cursorPos, isDeleting]);

  const restartTyping = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLine1("");
    setLine2("");
    setCursorPos("line1");
    setIsDeleting(false);
  };

  return (
    <div
      onClick={restartTyping}
      title="Click to replay typing animation"
      className="cursor-pointer select-none group"
    >
      {/* Semantic Accessible Heading for SEO & Screen Readers */}
      <h1 className="sr-only">You Build the Product. We Build to Sell.</h1>

      {/* Visual Typing Display */}
      <h1
        aria-hidden="true"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] min-h-[110px] sm:min-h-[140px] md:min-h-[165px] lg:min-h-[190px] flex flex-col justify-start"
      >
        {/* Line 1 */}
        <span className="inline-block relative">
          <span>{line1 || "\u00A0"}</span>
          {cursorPos === "line1" && (
            <span
              className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.82em] ml-1.5 bg-[#43D5FF] shadow-[0_0_12px_#43D5FF] rounded-sm align-middle animate-cursor-blink"
              aria-hidden="true"
            />
          )}
        </span>

        {/* Line 2 with Electric Cyan/Blue Gradient */}
        <span className="text-gradient-electric inline-block mt-2 relative">
          <span>{line2 || (cursorPos === "line2" ? "\u00A0" : "")}</span>
          {cursorPos === "line2" && (
            <span
              className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.82em] ml-1.5 bg-[#43D5FF] shadow-[0_0_14px_#43D5FF] rounded-sm align-middle animate-cursor-blink"
              aria-hidden="true"
            />
          )}
        </span>
      </h1>
    </div>
  );
}
