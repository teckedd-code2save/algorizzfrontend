import React from "react";

const AnimatedText = () => {
  return (
    <div className="group flex items-center justify-start gap-6 p-0 no-underline text-inherit hover:text-inherit">
      <div className="relative">
        {/* Animated Text */}
        <h3 className="inline-block text-2xl font-bold leading-[3.5rem] tracking-[-2.88px] text-white">
          {"Explore Algorizz".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0 blur-sm -translate-y-4 rotate-x-80 transition-all duration-500 group-hover:opacity-100 group-hover:blur-none group-hover:rotate-x-1 group-hover:text-gray-300 group-hover:translate-y-0.5" // Added group-hover:text-gray-400 and translate-y classes
              style={{ transitionDelay: `${index * 0.04}s` }}
            >
              {char === " " ? "\u00A0" : char} {/* Replace space with non-breaking space */}
            </span>
          ))}
        </h3>

        {/* Hidden Text (for accessibility and fallback) */}
        <h3
          className="absolute top-0 left-0 inline-block text-2xl font-bold leading-[3.5rem] tracking-[-2.88px] text-white pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
          aria-hidden="true"
        >
          {"Explore Algorizz".split("").map((char, index) => (
            <span key={index} className="inline-block opacity-100 blur-none">
              {char === " " ? "\u00A0" : char} {/* Replace space with non-breaking space */}
            </span>
          ))}
        </h3>
      </div>

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

export default AnimatedText;