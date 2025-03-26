"use client"
import React from 'react'
import AnimatedShinyTextDemo from './AnimatedShinyText'
import SparklesTextDemo from './SparklesText'
import { Button } from '@heroui/button'
import { TextRevealCardPreview } from './TextRevealCard'

export default function Hero() {
    return (
        <div className="relative min-h-dvh bg-black lg:flex p-6 lg:p-14">
            <div className="flex-1/2 self-center">
            <AnimatedShinyTextDemo />
            
            <h1 className='text-5xl font-bold text-white my-6'><SparklesTextDemo />, I'm <span className='bg-gradient-to-tl from-blue-600 to-blue-400 text-transparent bg-clip-text px-1'>Sourav</span>, a Software Engineer crafting digital excellence.</h1>
            <p className='pb-6'>I specialize in building scalable, high-performance applications that solve real-world problems. Passionate about clean code, innovative solutions, and seamless user experiences.</p>
            <div className="flex">
                <Button
                    className="bg-gradient-to-tl from-blue-600 to-blue-400 text-white shadow-lg"
                    radius="full"
                >
                    Resume
                </Button>
                <Button
                    className=" ml-3 shadow-blue-800 text-white shadow-2xs"
                    radius="full"
                >
                    Contact
                </Button></div>

            </div>
            <div className="flex-1/2 relative">
            <div className="absolute w-0.5 h-full bg-[linear-gradient(to_bottom,transparent,transparent,theme(colors.white),theme(colors.white),transparent,transparent)] hidden lg:flex"></div>
            <TextRevealCardPreview />
            </div>
        </div>
    )
}
