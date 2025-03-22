import { cn } from "@/lib/utils";
import React from "react";
import { CardHoverEffectDemo } from "./CardsHoverEffect";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex flex-col">
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-xl font-bold text-transparent sm:text-5xl">
      Key Skills
      </p>
      <CardHoverEffectDemo />
      </div>
    </div>
  );
}
