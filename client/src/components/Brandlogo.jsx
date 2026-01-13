import React from "react";

const Brandlogo = () => {
  const brands = [
    { name: "Logo Ipsum", logo: "🏢" },
    { name: "Logoipsum", logo: "👥" },
    { name: "Logoipsum", logo: "◼" },
    { name: "Logo Ipsum", logo: "▢" },
    { name: "Logoipsum", logo: "💡" },
    { name: "Logoipsum", logo: "⭕" },
  ];

  return (
    <div className="w-full bg-black px-8 sm:px-10 md:px-15 py-16 border border-blue-900 rounded-lg">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm text-blue-400 uppercase mb-4 font-semibold">
          Supported by global brands
        </p>
      </div>

      {/* Brands Showcase */}
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center hover:opacity-80 transition duration-300"
          >
            <div className="text-4xl text-gray-500 mb-2">{brand.logo}</div>
            <p className="text-sm text-gray-400">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brandlogo;
