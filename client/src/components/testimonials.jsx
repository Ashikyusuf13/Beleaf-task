import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdvisors();
  }, []);

  const fetchAdvisors = async () => {
    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${API_URL}/users`);
      if (!response.ok) {
        throw new Error("Failed to connect to backend");
      }
      const data = await response.json();
      if (data.length === 0) {
        // Fallback/Seed data if empty
        setTeam([
          {
            _id: 1,
            name: "Javier C. Emerson",
            role: "FOUNDER",
            image: "Team Image.png",
            socials: ["𝕏", "▶"],
          },
          {
            _id: 2,
            name: "Diego H. Redmond",
            role: "CEO",
            image: "HdryNw7v0khXLetmF5nsRgVkXI.jpg.png",
            socials: ["𝕏", "▶"],
          },
          {
            _id: 3,
            name: "Julian T. Beaumont",
            role: "HEAD ADVISOR",
            image: "Team Image.png",
            socials: ["𝕏", "▶"],
          },
        ]);
      } else {
        setTeam(data);
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching advisors:", err);
      // Fallback to static data on error so UI doesn't break
      setTeam([
        {
          _id: 1,
          name: "Javier C. Emerson",
          role: "FOUNDER",
          image: "Team Image.png",
          socials: ["𝕏", "▶"],
        },
        {
          _id: 2,
          name: "Diego H. Redmond",
          role: "CEO",
          image: "HdryNw7v0khXLetmF5nsRgVkXI.jpg.png",
          socials: ["𝕏", "▶"],
        },
        {
          _id: 3,
          name: "Julian T. Beaumont",
          role: "HEAD ADVISOR",
          image: "Team Image.png",
          socials: ["𝕏", "▶"],
        },
      ]);
      setLoading(false);
    }
  };

  return (
    <div
      id="testimonials"
      className="w-full bg-black px-4 sm:px-8 md:px-15 py-12 sm:py-16 md:py-20 border-b border-blue-900 relative"
      style={{
        backgroundImage: `url('Bg Image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <p className="text-xs sm:text-sm md:text-base text-blue-400 uppercase mb-3 sm:mb-4 font-semibold">
            our advisors
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Meet with our avengers
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16 px-2 sm:px-4 md:px-0">
          {loading ? (
            <p className="text-white text-center col-span-3">
              Loading Avengers...
            </p>
          ) : (
            team.map((member, index) => (
              <div
                key={member._id || index}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Profile Image */}
                <div className="w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg border border-blue-900 flex items-center justify-center bg-linear-to-b from-gray-900 to-black mb-4 sm:mb-6 overflow-hidden shadow-[0_0_15px_rgba(30,58,138,0.5)] group-hover:shadow-[0_0_25px_rgba(30,58,138,0.8)] transition-all duration-300">
                  {member.image && member.image.startsWith("http") ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Name & Role */}
                <p className="text-xs text-gray-500 uppercase mb-2 font-semibold tracking-wider">
                  {member.role}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">
                  {member.name}
                </h3>

                {/* Social Links */}
                <div className="flex gap-3 sm:gap-4 mt-2">
                  {member.socials.map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition duration-300 ${
                        i === 0
                          ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/40"
                          : "bg-red-500/20 text-red-400 hover:bg-red-500/40"
                      }`}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Brands Section */}
        <div className="border-t border-blue-900 pt-8 sm:pt-10 md:pt-12">
          <p className="text-center text-xs sm:text-sm md:text-base text-blue-400 uppercase mb-8 sm:mb-10 md:mb-12 font-semibold tracking-wider">
            Supported by global brands
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { name: "BitCrypto", value: "-$0.639", bgColor: "bg-blue-500" },
              { name: "Secretlyte", value: "-$1.315", bgColor: "bg-green-500" },
              {
                name: "MysticHash",
                value: "-$1.004",
                bgColor: "bg-yellow-500",
              },
              {
                name: "PhantomLedger",
                value: "-$0.562",
                bgColor: "bg-cyan-500",
              },
              { name: "MystiChain", value: "+$0.723", bgColor: "bg-red-500" },
              { name: "CipherVault", value: "+$0.912", bgColor: "bg-red-600" },
              {
                name: "Secretlyte",
                value: "-$1.315",
                bgColor: "bg-yellow-600",
              },
              { name: "MYSTERY", value: "N/A", bgColor: "bg-gray-600" },
            ].map((brand, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between text-center gap-2 p-2 sm:p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition duration-300 bg-black/50"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-full ${brand.bgColor} flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg flex-shrink-0`}
                  >
                    {brand.name[0]}
                  </div>
                  <p className="text-xs font-semibold text-gray-300 hidden sm:block">
                    {brand.name}
                  </p>{" "}
                </div>
                <p
                  className={`text-xs font-bold ${
                    brand.value.includes("-")
                      ? "text-cyan-400"
                      : "text-green-400"
                  }`}
                >
                  {brand.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
