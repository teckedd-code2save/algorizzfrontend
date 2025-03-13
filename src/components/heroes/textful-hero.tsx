
import AnimatedText from "../buttons/animated-text-btn";
import RotatingHeroText from "../animations/rotating-hero-text";
import Scroll from "../scrollable/Scroll";
import { initThreeScene } from "../../lib/threed";
import { useEffect, useRef } from "react";

export default function TextFulHeroScreen() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const cleanUp = initThreeScene(canvas);
            return () => cleanUp();
        }
    },
    [canvasRef]);
    
    return ( 

        <div className="hero flex flex-col h-screen items-center justify-center p-6 text-center relative">
        {/* Grid of Images */}
          
       {/* Canvas for Three.js */}
         <canvas className="webgl absolute inset-0" ref={canvasRef} />
        
        {/* Content */}
            <div className="relative  h-full text-center flex flex-col gap-y-16 justify-end">
                <div>
                <div className="flex flex-row justify-start items-center gap-5">
                {/* <h1 className="text-4xl font-bold flex-none bg-gradient-to-r from-[#5754AD] to-white bg-clip-text text-transparent">
                    Powering Futures
                </h1> */}
                {/* <span className="grow"> 
                    <RotatingHeroText className="text-4xl" messages={["DevOps Solutions", "Custom AI Solutions", "Business Software Solutions"]}>
                    </RotatingHeroText>
                </span> */}

                </div>
                    
                  
                </div>
                
                <div className="flex justify-center mt-5">
                <Scroll
                targetId="ai"
                className="px-6 py-2 rounded-xl shadow-lg font-bold bg-inherit opacity-75"
                >
                <AnimatedText />
                </Scroll>
                </div>
            </div>

        </div>
    );
}