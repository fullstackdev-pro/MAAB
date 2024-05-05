import { useState } from "react";

const FaqComponents = (data) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full bg-[#FFFFFF] border-none rounded-lg p-3 focus:outline-none ${
          isOpen ? "rounded-b-none" : ""
        }`}
      >
        <p className="font-semibold text-[1.1rem] pr-8 text-left">
          {data.data.question}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <p className="mt-0 bg-[white] text-[#5D5D5F] rounded-b-lg p-4 text-left">
          {data.data.answer}
        </p>
      )}
    </div>
  );
};

export default FaqComponents;
