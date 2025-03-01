import TextBtn from "@/components/buttons/text-btn-icon";
import CareerCard from "@/components/cards/career-card";
import NavRaw from "@/components/navs/nav-raw";
import NavMain from "@/components/navs/nav-main";
import ArrowIcon from "@/components/svgs/arrow-icon-svg";
import BigHeader from "@/components/texts/big-header-text";
import Link from "next/link";

type Career = {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string | null;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export default async function Careers() {
  // Fetch data from your NestJS backend
  const res = await fetch("http://localhost:8000/algorizz/careers");
  if (!res.ok) {
    throw new Error("Failed to fetch careers");
  }
  const careers: Career[] = await res.json();

  return (
    <div className="h-screen  w-screen text-white ">
        
        {(() => {                    
                   const leading = (
                    <Link href="/">
                      <BigHeader text="Serendepify" className="font-extrabold"></BigHeader>
                    </Link>
                    
                  );

                    const subnav = (
                      <div className="flex space-x-4 mx-auto font-medium text-gray-100">
                        <Link href="/company" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                            Engineering
                        </Link>
                        <Link href="/careers" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                            Devops
                        </Link>
                        <Link href="/products" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                            Mlops
                        </Link>
                        <Link href="/solutions" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                            Product Management
                        </Link>
                        <Link href="/solutions" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                            UI/UX
                        </Link>
                    </div>
                    );

                  return  <NavMain leading={leading} trailing={(<></>)} subnav={subnav}>
                            <BigHeader text="Careers" className="text-5xl font-bold"></BigHeader>
                  
                          </NavMain>
                })()
          
             }
              {
              careers.length === 0 ? (
                <p className="text-center text-gray-300">
                  No career opportunities available at the moment.
                </p>
              ) : 
              (
              <div className="w-full h-full flex flex-col gap-5 justify-start pt-[50px] px-[150px] overflow-y-auto">
                {            
                careers.map((career) => (
                  <div key={career.id} className="w-full">
                    <CareerCard career={career} iconStyle="bg-[#5754AD] rounded-full p-3" className="justify-start border border-[0.8px] border-[#2D2D2D] rounded-md bg-gradient-to-r  from-[#5754AD] to-white from-[#5754AD]">

                    </CareerCard>

                  </div>
                ))}
              </div>
              )}

        <footer className="w-full flex flex-row pt-6 gap-8 items-start justify-center h-20 min-h-[120px]">
                <div className="flex flex-col">
                  <TextBtn title="Careers" className="" />
                </div>
        </footer>
      </div>
  );
}