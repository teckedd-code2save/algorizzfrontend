import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";



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
    startDate: string;
    endDate: string | null;
    userId: string;
    createdAt: string;
    updatedAt: string;
  };
  

export default function CareerCard({ career,className,iconStyle }: CareerCardProps) {

  return (
        <div key={career.id} className={`flex flex-col gap-4  p-1 pb-2 ${className}`}>
      
        
            {/* Text */}
            <div className="card_body flex flex-col justify-center w-full gap-2 p-2">
                <div className="flex flex-row justify-between w-full gap-2">
                <h2 className="font-bold text-white text-lg">{career.title}</h2>
                <TextBtn title="Read More" className={iconStyle}></TextBtn>
                </div>
                

                <h3 className="font-thin text-gray-300 text-md">{career.description}</h3>
            </div>
            
        </div>
  );
}
