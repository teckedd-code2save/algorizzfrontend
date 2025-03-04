"use client"
import PartnersMarquee from "@/components/animations/marquee-display";
import SignIn from "@/components/forms/sign-in";
import SignUp from "@/components/forms/sign-up";
import NavMain from "@/components/navs/nav-main";
import BigHeader from "@/components/texts/big-header-text";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle,FaKey } from "react-icons/fa";
import { Suspense } from 'react';

export default function Contact() {
  const [isSignIn, setIsSignIn] = useState(true); // true for Sign In, false for Sign Up
  const [isPartnerForm, setIsPartnerForm] = useState(false); // Shows after successful signup
  const [isSignupComplete, setIsSignupComplete] = useState(false); // Tracks signup completion



const leading = (
  <Link href="/">
    <BigHeader text="Serendepify" className="font-extrabold"></BigHeader>
  </Link>
  
);



  return (
    <div className="h-screen w-screen text-white">
      
      <NavMain trailing={<></>}>
        <></>
      </NavMain>


      <div className="w-full h-full flex flex-col gap-5 justify-center items-center mt-[50px] p-10">
                  
         
      
        <div className="w-full max-w-lg rounded-md p-3 py-4">
          {isSignIn ? (
            // Sign In Form
            <Suspense>
              <SignIn>

              </SignIn>
            </Suspense>
          ) :  (
            // Partner Form (after successful signup)
            <SignUp></SignUp>
           
          )}

          
            <>
              <hr className="my-4 border-gray-700" />
              <BigHeader text="Continue with" className="font-thin text-sm w-full text-center" />
              <div className="flex items-center justify-between gap-4">
                <button className="w-full  text-white  py-2 px-4 flex justify-center gap-1  border border-0 border-r-1" type="button">
                   <FaGoogle className="text-xl"/> Google
                </button>
                <button className="w-full  text-white  py-2 px-4 flex justify-center gap-1" type="button">
                 <FaKey className="text-xl"/> Passkey
                </button>
              </div>
            </>
            <button onClick={() => setIsSignIn(false)} className="w-full mt-5  text-white font-bold py-2 px-4 rounded border border-[0.5px]" type="button">
                  Create Account
            </button>
          
        </div>
        <h1 className="text-lg text-gray-500 intro overflow-wrap h-auto w-2/5 text-center p-2 gap-3">
        
        We always seek to partner with Companies, Organizations and Individuals who are like-minded. This synergy drives possibilities
        
      </h1>
     
      <PartnersMarquee className="w-[500px]"></PartnersMarquee>
      </div>
    </div>
  );
}