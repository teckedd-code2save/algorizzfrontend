
import AnimatedText from "../buttons/animated-text-btn";
import RotatingHeroText from "../animations/rotating-hero-text";
import Scroll from "../scrollable/Scroll";


export default function TextFulHeroScreen() {
    return ( 

        <div className="hero flex flex-col h-screen items-center justify-center p-6 text-center relative">
        {/* Grid of Images */}
          
        {/* Dark Overlay */}
             <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
            <div className="relative z-10 text-center flex flex-col gap-y-16 justify-between">
                <div>
                    <div className="flex flex-row justfy-start items-center  gap-5 ">
                        <h1 className="text-5xl font-bold text-white whitespace-nowrap flex-none">Powering the future</h1>
                        <span className="grow"> 
                            <RotatingHeroText>
                            </RotatingHeroText></span>
                    </div>
                    
                    <blockquote className="text-lg text-gray-300 mt-4 italic border-white pl-3">
                    "Building the next big tech in style"
                    </blockquote>
                  
                </div>
                
                <div className="flex justify-center mt-5">
                    <Scroll
                    targetId="ai"
                    className="px-4 border border-gray-700  rounded-md shadow-lg font-bold "
                    >
                    <AnimatedText />
                    </Scroll>
                </div>
            </div>
        </div>
    );
}