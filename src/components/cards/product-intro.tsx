import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";


interface ProductIntroProps {
  title: string;
  image: string;
  className: string;
  body: string;
}

export default function ProductIntro({ title, image,body,className }: ProductIntroProps) {
  return (
       <div className={`flex flex-col gap-4  p-1 ${className}`}>
      {/* Image */}
      <div className="relative w-full h-80 self-center rounded-sm overflow-hidden">
        <Image
          src={image}
          alt="Product Image"
          fill // Fill the parent container
          className="object-cover"
          priority // Preload this image since it's above the fold
        />
      </div>
      {/* Text */}
      <div className="flex flex-col justify-center w-full gap-2">
        <h2 className="font-bold text-white">{title}</h2>
        <h3 className="font-thin text-gray-300 text-sm">{body}</h3>
        <TextBtn title="Read More" ></TextBtn>
      </div>
    </div>
  );
}
