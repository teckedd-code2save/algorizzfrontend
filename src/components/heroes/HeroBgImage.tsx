import Scroll from "../scrollable/Scroll";

export default function HeroBgImage() {
    return (
        <div className="hero flex flex-col h-screen items-center justify-center mt-16 p-6 text-center relative" 
        style={{backgroundImage: "url('/images/code.jpg')",backgroundSize: "cover",backgroundPosition: "center"}}>
  {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-3xl font-bold text-white">Welcome to the home of pure algorithmic Rizz</h1>
                <p className="text-lg text-gray-300 mt-4">
                Bringing you cutting-edge AI and tech insights with style.
                </p>
                <div className="flex mt-5">
                <Scroll
                    targetId="ai"
                    className="px-7 py-3 text-white bg-blue-600 rounded-full shadow-lg font-bold hover:bg-blue-700 transition-colors"
                >
                    Get Started
                </Scroll>
                </div>
            </div>
       </div>
    );
}