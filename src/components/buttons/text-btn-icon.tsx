import React from "react";
import ArrowIcon from "../svgs/arrow-icon-svg";

interface BtnProps {
  title: string;
  className?:string
  
}

const TextBtn = ({title="Join Us",className}:BtnProps) => {
  return (
    <button className={`group flex items-center justify-end self-end gap-3 p-1 rounded-lg  transition-all ${className}`}>
      
        <h3 className="inline-block text-sm font-medium ">
          {title}
        </h3>

      {/* Arrow Icon */}
      <ArrowIcon></ArrowIcon>
    </button>
  );
};

export default TextBtn;