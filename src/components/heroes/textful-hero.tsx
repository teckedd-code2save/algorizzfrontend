
import AnimatedText from "../buttons/animated-text-btn";
import RotatingHeroText from "../animations/rotating-hero-text";
import Scroll from "../scrollable/Scroll";
import PartnersMarquee from "../animations/marquee-display";
import Image from "next/image";
import AlgorizzLogo from "../svgs/algorizz-logo";



export default function TextFulHeroScreen() {
    return ( 

        <div className="hero flex flex-col h-screen items-center justify-center p-6 text-center relative">
        {/* Grid of Images */}
          
        {/* Add logo using algorizz-logo.svg */}
         <div className="relative w-2/3 self-center">
         <AlgorizzLogo></AlgorizzLogo>
         {/* <Image src="/images/algorizz-logo.svg" fill  alt="Algorizz Logo" /> */}
         </div>
        
        {/* Content */}
            <div className="relative  text-center flex flex-col gap-y-16 justify-between">
                <div>
                <div className="flex flex-row justify-start items-center gap-5">
                {/* <h1 className="text-4xl font-bold flex-none bg-gradient-to-r from-[#5754AD] to-white bg-clip-text text-transparent">
                    Powering Futures
                </h1> */}
                <span className="grow"> 
                    <RotatingHeroText className="text-4xl" messages={["DevOps Solutions", "Custom AI Solutions", "Business Software Solutions"]}>
                    </RotatingHeroText>
                </span>
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