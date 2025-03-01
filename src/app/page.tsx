"use client"
import RotatingHeroText from "@/components/animations/rotating-hero-text";
import Contact from "@/components/cards/contact-card";
import MultiComponentCard from "@/components/cards/multi-component-card";
import People from "@/components/cards/people-card";
import ProductIntro from "@/components/cards/product-intro-card";
import TextFulHeroScreen from "@/components/heroes/textful-hero";
import NavMain from "@/components/navs/nav-main";
import BigHeader from "@/components/texts/big-header-text";
import Image from "next/image";

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
                        <BigHeader text="Serendepify" className="font-extrabold"></BigHeader>
                      </Link>
                      
                    );

                  return <NavMain leading={leading}>
                   <div className="flex space-x-4 mx-auto font-medium text-gray-100">
                      <Link href="/company" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Company
                      </Link>
                      <Link href="/careers" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Careers
                      </Link>
                      <Link href="/products" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Products
                      </Link>
                      <Link href="/contact" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Partner
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
             id="scroll_parent" className=" h-1/2 w-2/3 h-full self-start overflow-x-scroll overflow-y-hidden flex flex-row m-2 mt-4 border border-[0.8px] border-[#2D2D2D] rounded-md">
            
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
  

        <div className="flex flex-row h-screen  relative bg-gradient-to-t from-[#1E1E1E] to-[#2D2D2D]">
           <div ref={scrollParentRef1} className="w-2/3 p-2">
              <div className="h-full w-full self-end min-w-full">
                  {(() => {
                    const bodyText = "We work with major cloud platforms including GCP, Azure, and AWS. Let us help you build and scale your business online.";
                    
                    return (
                      <MultiComponentCard
                        title="Cloud Assist"
                        image="/images/robot-arm.jpg"
                        className=""
                        body={bodyText}
                        dir="row"
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
      <footer className="w-full grid grid-cols-2 gap-8 items-start justify-center h-50 min-h-60">
        <div className="flex flex-col justify-between p-5 items-start h-full w-1/4 p-5">
          <BigHeader text="Serendepify" className="font-extrabold"></BigHeader>
            <p className="text-center text-gray-500 text-xs">
              &copy;2025 Serendepify Inc
            </p>
        </div>
        <div className="w-full h-full flex flex-row p-4 flex gap-8 items-start justify-between">
            <People />
          
          <Contact email="createdliving1000@gmail.com" phone="+1234567890" />
          
          <div className="flex flex-col">
            <h4 className=" text-lg font-bold  ">
              Company
            </h4>
            <Link className="mt-2  font-medium text-blue-500 " href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
              Vision
            </Link>
          </div>
        </div>
       
      
       
      </footer>
    </div>
  );

}


