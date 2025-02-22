import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";
import BigHeader from "../texts/big-header-text";
import { useState,useEffect } from "react";


interface MultiComponentCardProps {
  title: string;
  image: string;
  className: string;
  body: string;
  dir : "row"|"col"
}

export default function MultiComponentCard({ title, image,body,className,dir }: MultiComponentCardProps) {

  const [zoom, setZoom] = useState(1);
  const [trans, setTrans] = useState(0);
  const ZOOM_SPEED = 0.005;
  const TRANS_SPEED = 0.009;

    useEffect(() => {
      const zoomElement = document.querySelector(".zoom");
      const translateElement = document.querySelector(".translate");
      const multiCardComponent = document.querySelector(".multi_card_component");
  
      if (!zoomElement || !multiCardComponent) return;
  
      const handleWheel = (e) => {
        
    
        setZoom((prevZoom) => {
          let newZoom = e.deltaY > 0 ? prevZoom + ZOOM_SPEED : prevZoom - ZOOM_SPEED;
          newZoom = Math.max(1, Math.min(newZoom, 3)); // Prevent scaling below 1 and excessive zooming
  
         
          setTrans((prevTrans) => {
              let newTrans = e.deltaY > 0 ? prevTrans + TRANS_SPEED : prevTrans - TRANS_SPEED * 2.5;
              newTrans = Math.max(0.2, Math.min(newTrans, 3)); // Prevent excessive translation
              (translateElement as HTMLElement).style.transform = `translateY(-${newTrans * 100}px)`;
              return newTrans;
            });
          
  
          (zoomElement as HTMLElement).style.transform = `scale(${newZoom})`;
          return newZoom;
        });
      };
  
      const handleMouseEnter = () => {
        document.addEventListener("wheel", handleWheel);
      };
  
      const handleMouseLeave = () => {
        document.removeEventListener("wheel", handleWheel);
      };
  
      multiCardComponent.addEventListener("mouseenter", handleMouseEnter);
      multiCardComponent.addEventListener("mouseleave", handleMouseLeave);
  
      return () => {
        multiCardComponent.removeEventListener("mouseenter", handleMouseEnter);
        multiCardComponent.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("wheel", handleWheel);
      };
    }, []);


  return (
    <div className={`multi_card_component flex gap-4  p-2 h-full w-full justify-between border border-[0.4px] border-[#2D2D2D] rounded-md ${className} ${dir=="row"?"flex-row":"flex-col"}`}>
      {/* Image */}
       
      {/* Text */}
        <div className=" relative big_card_img w-1/2 h-full ml-2 ">
             <Image
                      src={image}
                      alt="Product Image"
                      fill // Fill the parent container
                      className="object-cover zoom"
                      priority // Preload this image since it's above the fold
              />
        </div>
      
        <div className="flex flex-col w-1/2 justify-end">
          <div className="translate flex flex-col p-2 justify-end w-full gap-2">
            <div className=" justify-center w-full gap-2">
              <BigHeader text={title}></BigHeader>
              <p className="font-thin text-gray-300 text-sm max-w-4/5 overflow-wrap">{body}</p>
            </div>

            </div>

            <div className="flex flex-col justify-end w-full gap-2 p-2">
            <hr></hr>
            <TextBtn title="Get Started" ></TextBtn>
            </div>
         
        </div>
        
    </div>
  );
}
