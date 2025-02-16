import Link from "next/link";

const Tags = () => {
  return (
    <div className="flex mt-5 items-center gap-5">
      {/* Vision Link */}
      <Link
        href=""
        className="flex items-center px-7 py-3 text-gray-500 rounded-md shadow-lg font-thin  transition-all duration-300 ease-in-out"
      >
        Vision
      </Link>

      
      {/* Speech . Text Link */}
      <Link
        href=""
        className="flex items-center px-7 py-3 text-gray-500 rounded-md shadow-lg font-thin  transition-all duration-300 ease-in-out"
      >
        <span>Speech</span>
        {/* Bidirectional Arrow */}
        <svg
          className="w-4 h-4 mx-2 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 3L4 7L8 11" />
          <path d="M4 7H20" />
          <path d="M16 21L20 17L16 13" />
        </svg>
        <span>Text</span>
      </Link>

      {/* Conversational Link */}
      <Link
        href=""
        className="flex items-center px-7 py-3 text-gray-500 rounded-md shadow-lg font-thin  transition-all duration-300 ease-in-out"
      >
        Conversational
      </Link>
    </div>
  );
};

export default Tags;