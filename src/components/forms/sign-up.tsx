import { useState } from "react";
import BigHeader from "../texts/big-header-text";
import { VscArrowSmallLeft } from "react-icons/vsc";



export default function SignUp() {

      const [step, setStep] = useState(0); // true for Sign In, false for Sign Up
    
    return (
        <div className=" justify-center flex flex-col gap-4  ">
            <BigHeader text="Sign Up"></BigHeader>

            <BigHeader text={`Step ${step+1} of 2`} className="text-gray-400"></BigHeader>
           {step=== 1 && ( <form>
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
              <div className="grid grid-cols-6 gap-4">
                <button  className="col-span-1" onClick={() => setStep(0)}>
                <VscArrowSmallLeft className="text-[#5754AD] text-2xl"/>
                </button>

                <button  className="col-span-5 w-full bg-[#5754AD]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Complete Registration
                </button>
              </div>
             
            </form>)}
            {step === 0 && (
            <form>
              <div className="mb-4">
                <label className="block font-bold text-gray-300 text-sm mb-2" htmlFor="partner-type">
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
                <label className="block font-bold text-gray-300 text-sm mb-2" htmlFor="org-name">
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
                <label className="block font-bold text-gray-300 text-sm mb-2" htmlFor="website">
                  Website
                </label>
                <input 
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" 
                  id="website" 
                  type="url" 
                  placeholder="https://example.com" 
                />
              </div>
              <button onClick={() => setStep(1)} className="w-full bg-[#5754AD]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Next
              </button>
            </form>)}

        </div>
    )
}