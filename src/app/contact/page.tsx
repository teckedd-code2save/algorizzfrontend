"use client"
import PartnersMarquee from "@/components/animations/marquee-display";
import NavMain from "@/components/navs/nav-main";
import ArrowIcon from "@/components/svgs/arrow-icon-svg";
import BigHeader from "@/components/texts/big-header-text";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [isSignIn, setIsSignIn] = useState(true); // true for Sign In, false for Sign Up
  const [isPartnerForm, setIsPartnerForm] = useState(false); // Shows after successful signup
  const [isSignupComplete, setIsSignupComplete] = useState(false); // Tracks signup completion

  // Fixed gradient border animation with proper color transition
//   const gradientBorderStyle = `
//   @keyframes gradientFlow {
//     0% { 
//       background-position: 0% 50%; 
//     }
//     50% { 
//       background-position: 100% 50%; 
//     }
//     100% { 
//       background-position: 0% 50%; 
//     }
//   }
//   .gradient-border {
//     position: relative;
//     border-radius: 0.125rem;
//     background: linear-gradient(
//       45deg,
//       rgb(173, 84, 165),
//       rgb(69, 62, 171),
//       rgb(184, 79, 101),
//       #5754AD,
//       rgb(173, 84, 165)
//     );
//     background-size: 200% 200%;
//     animation: gradientFlow 5s ease-in-out infinite;
//     padding: 1px; /* Creates the border effect */
//   }
//   .gradient-border::before {
//     content: '';
//     position: absolute;
//     top: 1px;
//     left: 1px;
//     right: 1px;
//     bottom: 1px;
//     background: #1E1E1E; /* Your form background color */
//     border-radius: 0.125rem;
//     z-index: -1;
//   }
// `;

const gradientBorderStyle = `
  @keyframes gradientFlow {
    0% { 
      border-color: rgb(173, 84, 165); 
    }
    25% { 
      border-color: rgb(69, 62, 171); 
    }
    50% { 
      border-color: rgb(184, 79, 101); 
    }
    75% { 
      border-color: #5754AD; 
    }
    100% { 
      border-color: rgb(173, 84, 165); 
    }
  }
  .gradient-border {
    border: 1px solid; 
    border-radius: 0.125rem;
    animation: gradientFlow 5s ease-in-out infinite;
  }
`;

const leading = (
  <Link href="/">
    <BigHeader text="Serendepify" className="font-extrabold"></BigHeader>
  </Link>
  
);

  const handleSignup = () => {
    // Simulate successful signup
    setIsSignupComplete(true);
    setIsPartnerForm(true);
  };

  return (
    <div className="h-screen w-screen text-white">
      <style>{gradientBorderStyle}</style>
      
      <NavMain leading={leading} trailing={<></>}>
        <BigHeader text="Partners" className="text-5xl font-bold" />
      </NavMain>


      <div className="w-full h-full flex flex-col gap-5 justify-center items-center mt-[50px] p-10">
                  
          <div className="text-lg text-gray-500 intro flex flex-row overflow-wrap h-auto w-3/5 p-2 gap-3">
            <span>
            <BigHeader text="Serendepify" className="font bold text-4xl font-extrabold text-white" />
            </span>
            <span>
            partners with Companies, Organizations and Individuals who are like-minded. This synergy between us makes us even more powerful 
            </span>
          </div>
         
          <PartnersMarquee className="w-[500px]"></PartnersMarquee>
          <hr></hr>
        {!isPartnerForm && (
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setIsSignIn(true)}
              className={`text-xl font-thin ${isSignIn ? 'text-white' : 'text-gray-500'}`}
            >
             Sign in <ArrowIcon className=""></ArrowIcon>
            </button>
            <button 
              onClick={() => setIsSignIn(false)}
              className={`text-xl font-thin ${!isSignIn ? 'text-white' : 'text-gray-500'}`}
            >
              <ArrowIcon className="rotate-180"></ArrowIcon> Sign Up
            </button>
          </div>
        )}

        <div className="w-full max-w-lg gradient-border rounded-md p-6 py-9">
          {isSignIn && !isPartnerForm ? (
            // Sign In Form
            <form>
              <div className="mb-4">
                <label className="block font-bold text-gray-300 text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input 
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" 
                  id="email" 
                  type="email" 
                  placeholder="partner@example.com" 
                />
              </div>
              <div className="mb-6">
                <label className="block font-bold text-gray-300 text-sm mb-2" htmlFor="password">
                  Password
                </label>
                <input 
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" 
                  id="password" 
                  type="password" 
                  placeholder="******************" 
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-3">
                <button className="w-full bg-[#5754AD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          ) : !isPartnerForm ? (
            // Regular Sign Up Form
            <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
              <div className="mb-4">
                <label className="block font-bold text-gray-300 text-sm mb-2" htmlFor="signup-email">
                  Email
                </label>
                <input 
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" 
                  id="signup-email" 
                  type="email" 
                  placeholder="partner@example.com" 
                />
              </div>
              <div className="mb-6">
                <label className="block font-bold text-gray-300 text-sm mb-2" htmlFor="signup-password">
                  Password
                </label>
                <input 
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" 
                  id="signup-password" 
                  type="password" 
                  placeholder="******************" 
                />
              </div>
              <button className="w-full bg-[#5754AD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
              </button>
            </form>
          ) : (
            // Partner Form (after successful signup)
            <form>
              <div className="mb-4">
                <label className="block font-medium text-gray-300 text-sm mb-2" htmlFor="partner-type">
                  Partner as
                </label>
                <div className="relative w-full text-gray-500">
                  <select className="block appearance-none w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none bg-gray-800 text-white">
                    <option>Business</option>
                    <option>Organization</option>
                    <option>Individual</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-300 text-sm mb-2" htmlFor="org-name">
                  Business/Organization Name
                </label>
                <input 
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" 
                  id="org-name" 
                  type="text" 
                  placeholder="Your Business/Org Name" 
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-300 text-sm mb-2" htmlFor="website">
                  Website
                </label>
                <input 
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" 
                  id="website" 
                  type="url" 
                  placeholder="https://example.com" 
                />
              </div>
              <button className="w-full bg-[#5754AD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Complete Partner Registration
              </button>
            </form>
          )}

          {!isPartnerForm && (
            <>
              <hr className="my-4 border-gray-700" />
              <BigHeader text="Continue with" className="font-bold mb-4 " />
              <div className="flex items-center justify-between gap-4">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Google
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  PassKey
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}