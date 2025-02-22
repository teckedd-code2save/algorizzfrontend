import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";
import { useEffect,useRef,forwardRef,  useState } from 'react';



interface ProductIntroProps {
  title: string;
  image: string;
  className: string;
  body: string;
}

export default function ProductIntro({ title, image,body,className }: ProductIntroProps) {

  useEffect(() => {
    // ✅ You can read or write refs in effects
   const cardimg = document.querySelector('.card_img')
   const cardbody = document.querySelector('.card_body')

   let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }
  
  let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry,idx) => {
        // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
       
            // entry.target.classList.toggle('animateIn',entry.isIntersecting)
            entry.target.classList.toggle('slideIn',entry.isIntersecting)
          
        if (entry.intersectionRatio>0.7) {
           observer.unobserve(entry.target);
        }
       
      });
  }, options);

  let observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry,idx) => {
        // entry.target.classList.toggle('animate_animated',entry.isIntersecting)
       
            entry.target.classList.toggle('slideIn',entry.isIntersecting)
          
        if (entry.intersectionRatio>0.7) {
           observer1.unobserve(entry.target);
        }
       
      });
  }, options);

  if (cardimg) observer.observe(cardimg);
  if (cardbody) observer1.observe(cardbody);


  
  },[]);

  return (
       <div className={`flex flex-col gap-4  p-1 ${className}`}>
      {/* Image */}
          <div className="relative w-full h-60 self-center rounded-sm overflow-hidden">
            <Image
              src={image}
              alt="Product Image"
              fill // Fill the parent container
              className="card_img object-cover rounded-lg"
              priority // Preload this image since it's above the fold
            />
          </div>
          {/* Text */}
          <div className="card_body flex flex-col justify-center w-full gap-2">
            <div className="flex flex-row justify-between w-full gap-2">
              <h2 className="font-bold text-white">{title}</h2>
              <TextBtn title="Read More" ></TextBtn>
            </div>
            

            <h3 className="font-thin text-gray-300 text-sm">{body}</h3>
          </div>
    </div>
  );
}
