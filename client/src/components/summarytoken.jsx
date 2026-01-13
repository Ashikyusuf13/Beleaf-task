import React from "react";

const Summarytoken = () => {
  const tokenData = [
    {
      label: "Token Offer",
      value: "40,000,000",
      color: "text-blue-400",
    },
    {
      label: "UTO Bounties",
      value: "11,500,000",
      color: "text-red-400",
    },
    {
      label: "UTO Community Reserve",
      value: "423,000,000",
      color: "text-purple-400",
    },
    {
      label: "UTO Community Building",
      value: "23,000,000",
      color: "text-blue-400",
    },
  ];

  return (
    <div className="w-full bg-black px-8 sm:px-10 md:px-15 py-16 border-b border-blue-900">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side - Image Placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 border-2 border-blue-900 flex items-center justify-center bg-gradient-to-br from-blue-900 to-black rounded-lg">
            <div className="text-6xl text-gray-600">🔒</div>
          </div>
        </div>

        {/* Right Side - Token Data */}
        <div className="flex-1">
          <p className="text-sm text-blue-400 uppercase mb-4">summary of ico</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Token allocation <br /> summary
          </h2>

          <div className="space-y-6">
            {tokenData.map((item, index) => (
              <div key={index} className="pb-6 border-b border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-400 text-sm uppercase">
                    {item.label}
                  </p>
                  <p className={`font-bold ${item.color}`}>{item.value}</p>
                </div>
                <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color.replace(
                      "text-",
                      "bg-"
                    )}`}
                    style={{ width: `${Math.random() * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summarytoken;
