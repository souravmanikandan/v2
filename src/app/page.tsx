"use client"

import About from "@/components/About";
import AnimatedShinyTextDemo from "@/components/AnimatedShinyText";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollision";
import { CardHoverEffectDemo } from "@/components/CardsHoverEffect";
import { CodeBlockDemo } from "@/components/CodeBlock";
import { ContactFormDemo } from "@/components/ContactForm";
import { GlobeDemo } from "@/components/GitHubGlobe";
import { GridBackgroundDemo } from "@/components/GridandDotBackgrounds";
import SparklesTextDemo from "@/components/SparklesText";
import { StickyScrollRevealDemo } from "@/components/StickyScrollReveal";
import { TextRevealCardPreview } from "@/components/TextRevealCard";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
    <div className="flex flex-wrap lg:flex-nowrap">
      <Spotlight />

      <div className="w-full">
        <AnimatedShinyTextDemo />
        <SparklesTextDemo />
        <span
          className="text-2xl md:text-4xl lg:text-7xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"
        >
          My gradient text
        </span>
        <p>Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.</p>
        <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Gradient
        </button>
        <button className="px-8 py-2 rounded-full bg-blue-50/10 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Gradient
        </button>
        <motion.div
  animate={{ y: [0, 10, 0] }} 
  transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
>
  hee
</motion.div>

      </div>
      <div className="w-full">
        <TextRevealCardPreview />
        <CodeBlockDemo />
      </div>
    </div>

<StickyScrollRevealDemo />
<About />
<GridBackgroundDemo />
<div className="sm:flex">
<GlobeDemo />
<ContactFormDemo />
</div>
    </>
  );
}
