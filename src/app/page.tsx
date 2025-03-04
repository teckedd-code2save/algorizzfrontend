"use client"
import RotatingHeroText from "@/components/animations/rotating-hero-text";
import MultiComponentCard from "@/components/cards/multi-component-card";
import ProductIntro from "@/components/cards/product-intro-card";
import TextFulHeroScreen from "@/components/heroes/textful-hero";
import NavMain from "@/components/navs/nav-main";
import BigHeader from "@/components/texts/big-header-text";
import { VscAccount } from "react-icons/vsc";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {

  const scrollParentRef = useRef<HTMLDivElement>(null);
  const scrollParentRef1 = useRef<HTMLDivElement>(null);
   
  return (
    <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)]">      
        {(() => {                    
                    const leading = (
                      <Link href="/">
                        <BigHeader text="Serendepify" className="text-2xl font-extrabold"></BigHeader>
                      </Link>
                      
                    );

                    const trailing = (
                      <Link className="" href="/contact">
                        <VscAccount className="text-2xl"></VscAccount>
                      </Link>
                      
                    );

                  return <NavMain leading={leading} trailing={trailing}>
                   <div className="flex space-x-4 mx-auto font-medium text-gray-100 text-sm">
                      <Link href="#ai" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Intelligence
                      </Link>
                      <Link href="#cloud" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Cloud Assist
                      </Link>
                      <Link href="#cloud" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Develop
                      </Link>
                      <Link href="/products" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Explore
                      </Link>
                    </div>
                  </NavMain>
                })()
          
          }
        
      
      <main className="flex flex-col flex-1">
        {/* <HeroBgImage>

        </HeroBgImage> */}
        <TextFulHeroScreen>

        </TextFulHeroScreen>
          
        <div  id="ai"  className="ai-section flex flex-col  justify-center h-screen items-center  w-full pt-15 bg-gradient-to-b from-[#1E1E1E] to-[#2D2D2D]">
            <div className="intro-section flex flex-row  justify-evenly gap-8 h-1/2">
              
              <div className="header m-2 w-1/3 p-4 gap-4 self-center">
                <BigHeader text="Building With You"></BigHeader>
                  <div className="mt-3 flex flex-wrap items-center gap-1">
                  Train custom intelligent agents with{" "}
                  <span className="ml-3 inline-block">
                    <RotatingHeroText
                      messages={["Vision", "ASR", "Text To Speech", "Conversational"]}
                      textGradient="bg-gradient-to-r from-pink-500 to-purple-600"
                      className="text-md inline"
                    />
                  </span>{" "}
                  capabilities, tailored specifically for your business needs.
                </div>
                  
              </div>

              <div className="featured_section h-full flex flex-row overflow-x-auto gap-4 w-2/3 justify-start bg-gradient-to-r  from-[#5754AD] to-white from-[#5754AD] rounded-md p-2 mr-3" >
                <ProductIntro iconStyle="text-[#5754AD]" className="w-1/2 " title={"Eloquigent"} image={"/images/robot-arm.jpg"} body={"Custom ASMR models built to understand your business language"} />
                <ProductIntro iconStyle="text-[#5754AD]" className="w-1/2 " title={"Natal Chat"} image={"/images/robot-arm.jpg"} body={"Get personalised care and attention throughout the perioud of your pregnancy"} />
                
              </div>
            
            </div>
            
            
            <div ref={scrollParentRef}
             id="scroll_parent" className=" w-3/4 h-full self-start overflow-x-scroll overflow-y-hidden flex flex-row m-2 mt-4 border border-[0.8px] border-[#2D2D2D] rounded-md">
            
                <div className="h-full w-full self-end min-w-full">
                  {(() => {
                    const bodyText = "Keeping track of your inventory has never been easier. Our solution helps you keep track of your inventory in real time.";
                    
                    return (
                      <MultiComponentCard
                        title="Inventory Vision"
                        image="/images/robot-arm.jpg"
                        className=""
                        body={bodyText}
                        dir="row"
                        parentRef={scrollParentRef}
                      />
                      
                    );
                })()}
                
                </div>
                <div className="h-full w-full self-end min-w-full">
                  {(() => {
                    const bodyText = "Our solution to building Text to Speech and Speech to Text models that understand your business language.";
                    
                    return (
                      <MultiComponentCard
                        title="Lingua Flow"
                        image="/images/robot-arm.jpg"
                        className=""
                        body={bodyText}
                        dir="row"
                        parentRef={scrollParentRef}
                      />
                      
                    );
                })()}
                
                </div>
                <div className="h-full w-full self-end min-w-full">
                  {(() => {
                    const bodyText = "Our solution to building Text to Speech and Speech to Text models that understand your business language.";
                    
                    return (
                      <MultiComponentCard
                        title="Lingua Flow"
                        image="/images/robot-arm.jpg"
                        className=""
                        body={bodyText}
                        dir="row"
                        parentRef={scrollParentRef}
                        
                      />
                      
                    );
                })()}
                
                </div> 
            </div>
            
        </div>
  

        <div id="cloud" className="flex flex-row h-screen  relative bg-gradient-to-t from-[#1E1E1E] to-[#2D2D2D]">
           <div  id="scroll_parent1" ref={scrollParentRef1} className="w-2/3 h-full p-2 overflow-y-scroll flex flex-col">
              <div className="h-full w-full self-end min-h-full">
                  {(() => {
                    const bodyText = "We work with major cloud platforms including GCP, Azure, and AWS. Let us help you build and scale your business online.";
                    
                    return (
                      <MultiComponentCard
                        title="Cloud Assist"
                        image="/images/robot-arm.jpg"
                        className=""
                        body={bodyText}
                        dir="col"
                        parentRef={scrollParentRef1}
                      />
                      
                    );
                })()}
                 </div>
                 <div className="h-full w-full self-end min-h-full">

                {(() => {
                    const bodyText = "Whatever the dream, we can help you build it. Our team of experts are ready to help you build and scale your business online.";
                    
                    return (
                      <MultiComponentCard
                        title="Develop"
                        image="/images/robot-arm.jpg"
                        className=""
                        body={bodyText}
                        dir="col"
                        parentRef={scrollParentRef1}
                      />
                      
                    );
                })()}
                
              </div>
           </div>
            

            <div className="flex flex-col h-full w-1/3 justify-center  gap-8 text-center ">
              <div className="header m-2 p-4 gap-4 w-full text-start">
                <BigHeader text="Gain Online traction,quick and easy"></BigHeader>
                <div className="mt-3 flex flex-wrap items-center gap-1">
                Receive dedicated assistance in workflows on{" "}
                <span className="ml-3 inline-block">
                  <RotatingHeroText
                    messages={["Dev Ops", "Ml Ops", "Mobile Apps","Web Development",]}
                    textGradient="bg-gradient-to-r from-pink-500 to-purple-600"
                    className="text-md inline"
                  />
                </span>{" "}
                We help you build and scale your business online.
              </div>
              </div>
      
            </div>
            
        </div>
        
        
      </main>
      
      {/* Footer */}
      <footer className="w-full grid grid-cols-3  items-start justify-center  min-h-60 pt-4">
        <div className="flex flex-col justify-around p-5 items-start h-full col-span-1 p-5">
          <BigHeader text="Serendepify" className="font-extrabold"></BigHeader>
            <p className="w-full  text-gray-500 text-sm">
              Copyright &copy;2025 Serendepify Inc.
            </p>
        </div>
        <div className="col-span-2 h-full flex flex-row p-4 pr-6 flex gap-8 items-start justify-around">
        <div className="flex flex-col">
            <h4 className=" text-lg font-bold  ">
              Resources
            </h4>
            <Link className="mt-2  font-medium text-gray-500 text-sm " href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
              Book A Demo
            </Link>
            <Link className="mt-2  font-medium text-gray-500 text-sm " href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
              Success Stories
            </Link>
            
          </div>
          <div className="flex flex-col">
            <h4 className=" text-lg font-bold  ">
              Solutions
            </h4>
            <Link className="mt-2  font-medium text-gray-500 text-sm " href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
             Saas Platform
            </Link>
            <Link className="mt-2  font-medium text-gray-500 text-sm " href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
              Inventory Vision
            </Link>
            
          </div>
          
          <div className="flex flex-col">
            <h4 className=" text-lg font-bold  ">
              Company
            </h4>
            <Link className="mt-2  font-medium text-gray-500 text-sm " href="/company" target="_blank" rel="noopener noreferrer">
              About
            </Link>
            <Link className="mt-2  font-medium text-gray-500 text-sm " href="/careers" target="_blank" rel="noopener noreferrer">
              Careers
            </Link>
            <Link className="mt-2  font-medium text-gray-500 text-sm " href="/company" target="_blank" rel="noopener noreferrer">
              Investors
            </Link>
          </div>
        </div>
       
      
       
      </footer>
    </div>
  );

}


