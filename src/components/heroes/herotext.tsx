import Link from "next/link";

export default function HeroText1(){
    return (
        <div className="hero flex flex-col h-screen items-center justify-center  mt-16 p-6 text-center ">
          <h1 className="text-3xl font-bold text-white">Welcome to the home of pure algorithmic Rizz</h1>
          <p className="text-lg text-gray-600 mt-4">Bringing you cutting-edge AI and tech insights with style.</p>
          <div className="flex mt-5">
            <Link href="#ai" className="px-7 py-3 text-black bg-white rounded-full shaddow-lg font-bold">
             Get Started
            </Link>
          </div>
        </div>
    );
}