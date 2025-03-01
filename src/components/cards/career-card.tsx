import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";
import BigHeader from "../texts/big-header-text";



interface CareerCardProps {
  className?: string;
  iconStyle?: string;
  career: Career;
}

type Career = {
    id: string;
    title: string;
    company: string;
    description: string;
    location: string;
    startDate: string | null;
    endDate: string | null;
    userId: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  };
  

export default function CareerCard({ career,className,iconStyle }: CareerCardProps) {

  return (
        <div key={career.id} className={`flex flex-col gap-4  p-1 pb-2 ${className}`}>
      
        
            {/* Text */}
            <div className="card_body flex flex-col justify-center w-full gap-2 p-2">
                <div className="flex flex-row justify-between w-full gap-2">
                  <BigHeader text={career.title}></BigHeader>                  {(() => {
                                      
                        if (career.userId != "") {
                          return (
                            <TextBtn title="Apply" className={iconStyle}></TextBtn>
                          );
                        }
                                        
                    })()}
                </div>
                <hr></hr>
                <div className="flex flex-row justify-between w-full gap-2">
                  <h2 className="font-bold text-white text-lg">{career.company}</h2>
                  <h2 className="font-medium text-[#5754AD] text-lg">{career.location}</h2>
                </div>
                {(() => {
                    
                    if (career.startDate !=null) {
                      return (
                        <h2 className="font-thin text-white text-sm">Started on : {career.startDate}</h2>
                      );
                    }
                                    
                })()}
                

                <h3 className="font-thin text-gray-300 text-md">{career.description}</h3>
            </div>
            
        </div>
  );
}
