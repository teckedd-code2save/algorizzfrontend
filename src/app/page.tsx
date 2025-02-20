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
        <div id="ai" className="flex flex-col h-screen items-center w-full pt-15 bg-gradient-to-b from-[#1E1E1E] to-[#2D2D2D]">
          
          <div  className="ai-section flex flex-col  justify-center h-full items-center  w-full">
            <div className="intro-section flex flex-row  justify-evenly gap-8 h-1/2">
              
              <div className="header m-2 w-1/3 p-4 gap-4 self-center">
                <h1 className="text-4xl font-medium text-white">Building With You</h1>
                <p className="mt-3 flex flex-wrap items-center gap-1">
                Train custom intelligent agents with{" "}
                <span className="ml-3 inline-block">
                  <RotatingHeroText
                    messages={["Vision", "ASR", "Text To Speech", "Conversational"]}
                    textGradient="bg-gradient-to-r from-pink-500 to-purple-600"
                    className="text-md inline"
                  />
                </span>{" "}
                capabilities, tailored specifically for your business needs.
              </p>
                
              </div>

              <div className="h-full flex flex-row overflow-x-auto gap-4 w-2/3 justify-center pr-4 pt-5">
                <ProductIntro className="w-1/2" title={"Eloquigent"} image={"/images/robot-arm.jpg"} body={"Custom ASMR models built to understand your business language"} />
                <ProductIntro className="w-1/2" title={"Natal Chat"} image={"/images/robot-arm.jpg"} body={"Get personalised care and attention throughout the perioud of your pregnancy"} />
                
              </div>
            
            </div>
            <div className="featured-section flex flex-col items-center justify-center w-full h-1/2">
              
            </div>
          </div>
        </div>

        <div className="flex flex-row h-screen  relative ">
            <div className="featured-section flex flex-col items-center justify-center w-2/3 h-full bg-gradient-to-l from-[#1E1E1E] to-[#2D2D2D]">
              <div className="h-full flex flex-row overflow-x-auto gap-4 p-4 w-full justify-center">
                <ProductIntro className="w-2/3" title={"Stock Up"} image={"/images/robot-arm.jpg"} body={"Vision Based stock calculator.Count your stock hasslefree"} />
               
              </div>
            </div>

            <div className="flex flex-col h-full w-1/3 justify-center  gap-8 text-center ">
              <div className="header m-2 p-4 gap-4 w-full text-start">
                <h1 className="text-4xl font-medium text-white self-start">Gain Online traction,quick and easy</h1>
                <p className="mt-3 flex flex-wrap items-center gap-1">
                Receive dedicated assistance in workflows on{" "}
                <span className="ml-3 inline-block">
                  <RotatingHeroText
                    messages={["Dev Ops", "Ml Ops", "Mobile Apps","Web Development",]}
                    textGradient="bg-gradient-to-r from-pink-500 to-purple-600"
                    className="text-md inline"
                  />
                </span>{" "}
                We help you build and scale your business online.
              </p>
              </div>
      
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

