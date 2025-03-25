import React from 'react'
import AnimatedShinyTextDemo from './AnimatedShinyText'
import SparklesTextDemo from './SparklesText'
import { CodeBlockDemo } from './Code Block'
import CardWithDivider from './Card'

function Hero() {
    return (
        <div>
            <div className="lg:flex overflow-hidden max-w-dvw min-h-dvh justify-center items-center">
                <div className="flex-1"><AnimatedShinyTextDemo />
                    <SparklesTextDemo /></div>
                <div className="max-w-full flex-1">
                    <CardWithDivider />
                </div>
            </div>
        </div>
    )
}

export default Hero