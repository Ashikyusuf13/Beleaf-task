import React from "react";

const Availableplatform = () => {
  const platforms = [
    { name: "Apple", icon: "" },
    { name: "Android", icon: "" },
    { name: "Windows", icon: "" },
    { name: "Web", icon: "" },
  ];

  return (
    <div className="w-full bg-black px-8 sm:px-10 md:px-15 py-16 border-b border-blue-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Text */}
        <div className="flex-1">
          <p className="text-sm text-blue-400 uppercase mb-4">
            Available platform
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our Iconic is <br /> available in <br /> multi-device
          </h2>
          <p className="text-gray-400 mb-8">
            Try it now for free on iOS, Android, PC, Web - wherever your friends
            are we got you covered.
          </p>

          {/* Platform Icons */}
          <div className="flex gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-full border border-blue-900 flex items-center justify-center text-2xl hover:border-violet-500 transition duration-300"
              >
                {platform.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image Placeholder */}
        <div className="flex-1 flex justify-center"></div>
      </div>
    </div>
  );
};

export default Availableplatform;
