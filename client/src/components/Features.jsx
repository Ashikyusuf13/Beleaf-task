import React from "react";

const Features = () => {
  const features = [
    {
      title: "Lower transaction fee",
      description:
        "A blockchain service protocol that simplifies using real assets easily & seamlessly in a decentralized nodes.",
      icon: "Vector.png",
    },
    {
      title: "C2C transactions",
      description:
        "C2C transactions providing the most secure ways of establishing trust & seamlessly secure cryptographic handling.",
      icon: "Vector (1).png",
    },
    {
      title: "Secure & flexibility",
      description:
        "Our advanced security is thoroughly and thoroughly used to ensure the entire protocol is streamlined.",
      icon: "Vector (2).png",
    },
  ];

  return (
    <div
      id="features"
      className="w-full bg-black px-4 sm:px-8 md:px-15 py-12 sm:py-16 md:py-20 border-b border-blue-900"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white w-full text-center py-6 sm:py-10 mb-8 sm:mb-10 font-bold">
        Most powerful & optimise solutions for ICO platform
      </h1>
      {/* Header */}
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <p className="text-xs sm:text-sm md:text-base text-blue-400 uppercase mb-3 sm:mb-4 font-semibold">
          why choose us
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Core features of Iconic
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 sm:p-6 bg-transparent border border-blue-900 rounded-lg hover:border-violet-500 transition duration-300"
          >
            {/* Icon */}
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border border-gray-500 flex items-center justify-center mb-4 sm:mb-6 text-2xl text-gray-400">
              <img
                src={feature.icon}
                alt="vector icon"
                className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border border-gray-600 flex items-center justify-center"
              ></img>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
