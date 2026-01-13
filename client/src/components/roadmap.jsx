import React from "react";

const Roadmap = () => {
  const timelineEvents = [
    {
      date: "FEBRUARY 01 2025",
      title: "Creation of the idea of iconic project",
      position: "left",
    },
    {
      date: "JANUARY 21 2025",
      title: "Start of ICO project worldwide",
      position: "right",
    },
    {
      date: "JANUARY 21 2025",
      title: "Launch of the tutorial and resource",
      position: "right",
    },
    {
      date: "JANUARY 21 2025",
      title: "Launch of crypto converter",
      position: "right",
    },
    {
      date: "JANUARY 21 2025",
      title: "Launch of iconic mobile version (iOS)",
      position: "right",
    },
  ];

  return (
    <div
      id="roadmap"
      className="w-full bg-black px-4 sm:px-8 md:px-15 py-12 sm:py-16 md:py-20 border-b border-blue-900"
    >
      {/* Header */}
      <div className="mb-12 sm:mb-14 md:mb-16">
        <p className="text-xs sm:text-sm md:text-base text-blue-400 uppercase mb-3 sm:mb-4 font-semibold">
          roadmap
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Timeline about details <br />
          funding & development <br />
          goals.
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12">
        {/* Left Side - Image/Visual */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-96 relative z-10">
            <img
              src="Container (1).png"
              alt="Roadmap Visual"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="w-full left-20 sm:left-32 md:left-40 brightness-150 absolute">
            <img
              src="Image (2).png"
              alt="Roadmap Visual"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side - Timeline */}
        <div className="flex-1 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-purple-500"></div>

          {/* Timeline Events */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 ml-6 sm:ml-7 md:ml-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-8 sm:-left-9 md:-left-10 top-2 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-blue-500 border-4 border-black"></div>

                {/* Event Content */}
                <div className="bg-transparent border border-blue-900 p-3 sm:p-4 md:p-6 rounded-lg hover:border-violet-500 transition duration-300">
                  <p className="text-xs text-gray-400 uppercase mb-2 font-semibold">
                    {event.date}
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
