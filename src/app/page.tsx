import RotatingHeroText from "@/components/animations/rotating-hero-text";
import Contact from "@/components/cards/Contact";
import People from "@/components/cards/People";
import ProductIntro from "@/components/cards/product-intro";
import TextFulHeroScreen from "@/components/heroes/textful-hero";
import NavWLogo from "@/components/navs/NavWLogo";
import Tags from "@/components/tags/connected-tags";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Fixed Navigation Bar */}
        <NavWLogo />
      
      {/* Main Content */}
      <main className="flex flex-col flex-1">
        {/* <HeroBgImage>

        </HeroBgImage> */}
        <TextFulHeroScreen>

        </TextFulHeroScreen>
        <div className="flex h-screen items-center w-full ">

        
          <div id="ai" className="ai-section flex flex-col  h-screen items-center justify-center w-full">
            <div className="intro-section flex flex-col items-center justify-center gap-8 h-1/2">
              
              <div className="header">
                <h1 className="text-3xl font-bold text-white">Build Agentic AI Solutions</h1>
                <p className="text-lg text-gray-600 mt-4">Train a custom intelligent agent with your business data</p>
              </div>
            
              <div className="flex flex-row justfy-start items-center  gap-5 ">
                  <h1 className="text-2xl font-bold text-white whitespace-nowrap flex-none">Solutions for </h1>
                  <span className="grow"> 
                      <RotatingHeroText messages={["Vision", "ASMR", "Text To Speech","Conversational",]} 
                      textGradient="bg-gradient-to-r from-pink-500 to-purple-600" className="text-2xl">
                      </RotatingHeroText>
                  </span>
              </div>
            </div>
            <div className="featured-section flex flex-col items-center justify-center w-full h-1/2">
              <h1 className="text-3xl font-medium text-gray-500">Featured</h1>
              <div className="h-full flex flex-row overflow-x-auto gap-4 p-4 w-full justify-center">
                <ProductIntro title={"Stock Up"} image={"/images/robot-arm.jpg"} body={"Vision Based stock calculator.Count your stock hasslefree"} />
                <ProductIntro title={"Eloquigent"} image={"/images/robot-arm.jpg"} body={"Custom ASMR models built to understand your business language"} />
                <ProductIntro title={"Natal Chat"} image={"/images/robot-arm.jpg"} body={"Get personalised care and attention throughout the perioud of your pregnancy"} />
                
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 h-screen items-center  text-center relative">

            <div className="flex flex-col h-screen items-center justify-center  gap-8 text-center ">
              <div className="header">

                <h1 className="text-3xl font-bold text-white">Gain Online traction,quick and easy</h1>
                <p className="text-lg text-gray-600 mt-4">Offering the platforms and services to get you online fast</p>
              </div>
              <div className="flex flex-wrap mt-5 items-bottom gap-5 ">
                <Link href="" className="px-7 py-3 text-white rounded-full shaddow-lg border font-thin">
                Dev Ops
                </Link>
                <Link href="" className="px-7 py-3 text-white rounded-full shaddow-lg border font-thin">
                Ml Ops
                </Link>
                <Link href="" className="px-7 py-3 text-white rounded-full shaddow-lg border font-thin">
                Mobile Development
                </Link>
                <Link href="" className="px-7 py-3 text-white rounded-full shaddow-lg border font-thin">
                Web Development
                </Link>
              </div>
            </div>
            <div className="amoeba relative w-full h-full">
                <Image
                src="/images/robot-arm.jpg"
                alt="Code Block"
                fill // Fill the parent container
                className="object-cover"
                priority // Preload this image since it's above the fold
                />
            </div>
        </div>
        
        
      </main>
      
      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 flex gap-6  justify-center shadow-inner border-t border-gray-200 flex-nowrap">
        <div className="flex items-center gap-2 text-gray-700">
          <People />
        </div>
       
        <div className="flex items-center gap-2 text-gray-700 ">
          <Contact email="contact@example.com" phone="+1234567890" />
        </div>
        <div className="p-4 flex flex-col">
          <h4 className=" text-lg font-bold  text-gray-700 ">
            Company
          </h4>
          <Link className="mt-2  font-medium text-blue-500 " href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
            Vision
          </Link>
        </div>
       
      </footer>
    </div>
  );

}

