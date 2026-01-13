import React from "react";

const Brandlogo = () => {
  return (
    <div className="w-full bg-black px-4 sm:px-8 md:px-15 py-12 sm:py-16 md:py-20 border-b border-blue-900">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <p className="text-xs sm:text-sm md:text-base text-blue-400 uppercase mb-3 sm:mb-4 font-semibold tracking-widest">
          Supported by global brands
        </p>
      </div>

      {/* Brands Showcase */}
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        {/* Logo 1 */}
        <div className="flex flex-col items-center justify-center text-center hover:opacity-80 transition duration-300">
          <div className="mb-3 sm:mb-4 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              className="sm:w-9 sm:h-9 md:w-10 md:h-10"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="18" stroke="#6B7280" strokeWidth="2" />
              <text
                x="20"
                y="24"
                textAnchor="middle"
                fill="#9CA3AF"
                fontSize="10"
                fontWeight="600"
              >
                ⊕
              </text>
            </svg>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Logo—
            <br />
            Ipsum
          </p>
        </div>

        {/* Logo 2 */}
        <div className="flex flex-col items-center justify-center text-center hover:opacity-80 transition duration-300">
          <div className="mb-3 sm:mb-4">
            <svg
              width="32"
              height="32"
              className="sm:w-9 sm:h-9 md:w-10 md:h-10"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="14"
                cy="14"
                r="6"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx="26"
                cy="14"
                r="6"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx="20"
                cy="26"
                r="6"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Logoipsum
          </p>
        </div>

        {/* Logo 3 */}
        <div className="flex flex-col items-center justify-center text-center hover:opacity-80 transition duration-300">
          <div className="mb-3 sm:mb-4">
            <svg
              width="32"
              height="32"
              className="sm:w-9 sm:h-9 md:w-10 md:h-10"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="12" cy="12" r="3.5" fill="#9CA3AF" />
              <circle cx="20" cy="12" r="3.5" fill="#9CA3AF" />
              <circle cx="28" cy="12" r="3.5" fill="#9CA3AF" />
            </svg>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            logoipsum'
          </p>
        </div>

        {/* Logo 4 */}
        <div className="flex flex-col items-center justify-center text-center hover:opacity-80 transition duration-300">
          <div className="mb-3 sm:mb-4 border border-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded">
            <span className="text-xs sm:text-xs md:text-sm font-bold text-gray-500 tracking-widest">
              LOGO IPSUM
            </span>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">
            LOGO IPSUM
          </p>
        </div>

        {/* Logo 5 */}
        <div className="flex flex-col items-center justify-center text-center hover:opacity-80 transition duration-300">
          <div className="mb-3 sm:mb-4">
            <svg
              width="32"
              height="32"
              className="sm:w-9 sm:h-9 md:w-10 md:h-10"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                fill="none"
              />
              <path d="M14 12 L28 20 L14 28 Z" fill="#9CA3AF" />
            </svg>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Logoipsum
          </p>
        </div>

        {/* Logo 6 */}
        <div className="flex flex-col items-center justify-center text-center hover:opacity-80 transition duration-300">
          <div className="mb-3 sm:mb-4">
            <svg
              width="32"
              height="32"
              className="sm:w-9 sm:h-9 md:w-10 md:h-10"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx="20"
                cy="20"
                r="8"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Logoipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brandlogo;
