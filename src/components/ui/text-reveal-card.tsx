"use client";
import React, { useEffect, useRef, useState, memo, useMemo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // Ensures consistent rendering

  useEffect(() => {
    setIsHydrated(true); // Mark component as hydrated

    if (cardRef.current) {
      const { left, width } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(width);
    }
  }, []);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    if (!isHydrated || !cardRef.current) return;

    const { clientX } = event;
    const relativeX = clientX - left;
    setWidthPercentage((relativeX / localWidth) * 100);
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    if (!isHydrated || !cardRef.current) return;

    const clientX = event.touches[0]?.clientX || 0;
    const relativeX = clientX - left;
    setWidthPercentage((relativeX / localWidth) * 100);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] rounded-lg p-2 relative overflow-hidden",
        className
      )}
    >
      {/* {children} */}

      <div className=" relative flex items-center overflow-hidden">
        {isHydrated && (
          <>
            <motion.div
              style={{ width: "100%" }}
              animate={
                isMouseOver
                  ? {
                      opacity: widthPercentage > 0 ? 1 : 0,
                      clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                    }
                  : {
                      clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                    }
              }
              transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
              className="absolute bg-[#1d1c20] z-20 will-change-transform"
            >
              <p
                style={{
                  textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                }}
                className="text-base sm:text-[2rem] py-5 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
              >
                {revealText}
              </p>
            </motion.div>

            <motion.div
              animate={{
                left: `${widthPercentage}%`,
                rotate: `${rotateDeg}deg`,
                opacity: widthPercentage > 0 ? 1 : 0,
              }}
              transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
              className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
            ></motion.div>
          </>
        )}

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-base sm:text-[2rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
            {text}
          </p>
          {isHydrated && <MemoizedStars />}
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-sm mb-2", className)}>{children}</h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={twMerge("text-[#a9a9a9] text-xs", className)}>{children}</p>;
};

// Ensures stars remain consistent across renders
const Stars = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 20,
      })),
    []
  );

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            scale: [1, 1.2, 0],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
