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
      title: "Creation of the idea of iconic project",
      position: "right",
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
      className="w-full bg-black px-8 sm:px-10 md:px-15 py-16 border-b border-blue-900"
    >
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm text-blue-400 uppercase mb-4">roadmap</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Timeline about details <br />
          funding & development <br />
          goals.
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side - Image/Visual */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-80 h-96 border-2 border-blue-900 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8">
            <div className="text-8xl">🔒</div>
          </div>
        </div>

        {/* Right Side - Timeline */}
        <div className="flex-1 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Timeline Events */}
          <div className="space-y-12 ml-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black"></div>

                {/* Event Content */}
                <div className="bg-transparent border border-blue-900 p-6 rounded-lg hover:border-violet-500 transition duration-300">
                  <p className="text-xs text-gray-400 uppercase mb-2 font-semibold">
                    {event.date}
                  </p>
                  <h3 className="text-lg font-bold text-white">
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
