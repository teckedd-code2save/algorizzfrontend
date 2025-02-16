import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";


interface ProductIntroProps {
  title: string;
  image: string;
  body: string;
}

export default function ProductIntro({ title, image,body }: ProductIntroProps) {
  return (
       <div className="flex flex-row gap-4 w-80 h-40 rounded-lg shadow-lg drop-shadow-xl p-1">
      {/* Image */}
      <div className="relative w-32 h-32 self-center rounded-lg overflow-hidden">
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
        <h2 className="font-bold text-gray-500">{title}</h2>
        <h3 className="font-thin text-gray-300 text-sm">{body}</h3>
        <TextBtn></TextBtn>
      </div>
    </div>
  );
}
