
import Scroll from "../scrollable/Scroll";
import Image from "next/image";


export default function HeroGridImages() {
    return ( 

        <div className="hero flex flex-col h-screen items-center justify-center p-6 text-center relative">
        {/* Grid of Images */}
            <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2 opacity-50">
    {/* Image 1 */}
                <div className="relative w-full h-full">
                    <Image
                    src="/images/chips.jpg"
                    alt="Code Block"
                    fill // Fill the parent container
                    className="object-cover rounded-lg"
                    priority // Preload this image since it's above the fold
                    />
                </div>

                {/* Image 2 */}
                <div className="relative w-full h-full">
                    <Image
                    src="/images/leds.jpg"
                    alt="Humanoid"
                    fill
                    className="object-cover rounded-lg"
                    priority
                    />
                </div>

                {/* Image 3 */}
                <div className="relative w-full h-full">
                    <Image
                    src="/images/robot-arm.jpg"
                    alt="Robot Arm"
                    fill
                    className="object-cover rounded-lg"
                    priority
                    />
                </div>

                {/* Image 4 */}
                <div className="relative w-full h-full">
                    <Image
                    src="/images/googledeepmind.jpg"
                    alt="Google DeepMind"
                    fill
                    className="object-cover rounded-lg"
                    priority
                    />
                </div>
            </div>

        {/* Dark Overlay */}
             <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
            <div className="relative z-10 text-center flex flex-col gap-y-16 justify-between">
                <div>
                    <h1 className="text-5xl font-bold text-white">We Code.We Rizz</h1>
                    <blockquote className="text-lg text-gray-300 mt-4 italic border-l-4 border-medium border-white pl-3">
                    "Building the next big tech in style"
                    </blockquote>
                  
                </div>
                
                <div className="flex justify-center mt-5">
                    <Scroll
                    targetId="ai"
                    className="px-7 py-3 text-grey-500 bg-blue-700 rounded-full shadow-lg font-bold"
                    >
                    Get Started
                    </Scroll>
                </div>
            </div>
        </div>
    );
}