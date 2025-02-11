import Contact from "@/components/cards/Contact";
import People from "@/components/cards/People";
import HeroGridImages from "@/components/heroes/herogridimages";
import NavWLogo from "@/components/navs/NavWLogo";
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
        <HeroGridImages>

        </HeroGridImages>
        <div id="ai" className="flex flex-col  h-screen items-center justify-around  p-6 text-center border border-b-grey">
          <div className="header">
            <h1 className="text-3xl font-bold text-white">Build Agentic AI Solutions</h1>
            <p className="text-lg text-gray-600 mt-4">Train a custom intelligent agent with your business data</p>
          </div>
         
          <div className="flex mt-5 items-bottom gap-5 ">
  
            <Link href="" className="px-7 py-3 text-white rounded-full shaddow-lg border font-thin">
            Vision
            </Link>
            <Link href="" className="px-7 py-3 text-white rounded-full shaddow-lg border font-thin">
             Speech . Text
            </Link>
            <Link href="" className="px-7 py-3 text-white rounded-full shaddow-lg border font-thin">
             Chat Bots
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-screen items-center justify-around  p-6 text-center ">
          <div className="header">

            <h1 className="text-3xl font-bold text-white">Gain Online traction,quick and easy</h1>
            <p className="text-lg text-gray-600 mt-4">Offering the platforms and services to get you online fast</p>
          </div>
          <div className="flex mt-5 items-bottom gap-5 ">
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

