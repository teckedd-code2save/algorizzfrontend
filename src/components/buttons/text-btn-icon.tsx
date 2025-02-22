import React from "react";

interface BtnProps {
  title: string;
  
  
}

const TextBtn = ({title="Join Us"}:BtnProps) => {
  return (
    <div className="group flex items-center justify-end self-end gap-6 p-0  transition-all">
      
        <h3 className="inline-block text-sm font-medium  text-white hover:text-[#5754AD] transition-all">
          {title}
        </h3>

      {/* Arrow Icon */}
      <div className="flex items-center justify-center transition-transform duration-500 group-hover:translate-x-2">
        <svg
          height="16"
          width="16"
          viewBox="0 0 16 16"
          className="text-background-200"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default TextBtn;