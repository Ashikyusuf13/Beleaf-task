import React from "react";

const Testimonials = () => {
  const team = [
    {
      name: "Javier C. Emerson",
      role: "FOUNDER",
      image: "👨‍💼",
      socials: ["⭕", "📌"],
    },
    {
      name: "Diego H. Redmond",
      role: "CEO",
      image: "👨‍💼",
      socials: ["⭕", "📌"],
    },
    {
      name: "Julian T. Beaumont",
      role: "HEAD ADVISOR",
      image: "👨‍💼",
      socials: ["⭕", "📌"],
    },
  ];

  return (
    <div
      id="testimonials"
      className="w-full bg-black px-8 sm:px-10 md:px-15 py-16 border-b border-blue-900"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm text-blue-400 uppercase mb-4">our advisors</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Meet with our avengers
        </h2>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="w-64 h-64 rounded-lg border border-blue-900 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black mb-6 text-8xl">
              {member.image}
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-xs text-gray-400 uppercase mb-4">
              {member.role}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {member.socials.map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 text-lg"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Brands Section */}
      <div className="border-t border-blue-900 pt-12">
        <p className="text-center text-sm text-blue-400 uppercase mb-8">
          Supported by global brands
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {[
            { name: "BitCrypto", value: "-$0.639" },
            { name: "Secretlyte", value: "-$1.319" },
            { name: "MysticHash", value: "-$1.004" },
            { name: "PhantomLedger", value: "-$0.962" },
            { name: "MystiChain", value: "+$0.723" },
            { name: "CipherVault", value: "+$0.912" },
            { name: "Secretlyte", value: "-$1.315" },
            { name: "MYSTERY", value: "N/A" },
          ].map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg border border-blue-900 hover:border-violet-500 transition duration-300"
            >
              <div className="text-2xl mb-2">◉</div>
              <p className="text-xs font-semibold text-gray-300">
                {brand.name}
              </p>
              <p
                className={`text-xs mt-1 ${
                  brand.value.includes("-") ? "text-red-400" : "text-green-400"
                }`}
              >
                {brand.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
