import React, { useState } from "react";

const Availableplatform = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const platforms = [
    {
      name: "Apple",
      icon: <img src="Vector (4).png" className="w-5" alt="" />,
    },
    { name: "Android", icon: "▶" },
    { name: "Windows", icon: "⊞" },
    { name: "Web", icon: "🌐" },
  ];

  const faqData = [
    {
      question: "How does blockchain ensure transaction security?",
      answer:
        "Once a transaction is recorded in a block and added to the blockchain, it cannot be altered without consensus from the network, ensuring data integrity. Ensure that all participants agree on the validity of transactions before they are added to the blockchain.",
    },
    {
      question: "How do you store cryptocurrencies securely?",
      answer:
        "Cryptocurrencies are stored using cryptographic keys. Private keys should be kept secure and backed up, while public keys are used for receiving transactions. Use hardware wallets or cold storage for maximum security.",
    },
    {
      question: "How does blockchain ensure transaction security?",
      answer:
        "Blockchain uses cryptographic hashing and distributed consensus mechanisms to ensure that transactions cannot be altered or forged once recorded.",
    },
    {
      question: "How does blockchain ensure transaction security?",
      answer:
        "Each block contains a hash of the previous block, creating an immutable chain. Any attempt to alter past transactions would require recalculating all subsequent blocks.",
    },
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="w-full bg-black px-4 sm:px-8 md:px-15 py-12 sm:py-16 md:py-20 border-b border-blue-900"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
        {/* Left Side - Text */}
        <div className="flex-1">
          <p className="text-xs sm:text-sm md:text-base text-blue-400 uppercase mb-3 sm:mb-4 font-semibold">
            Available platform
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Our Iconic is <br /> available in <br /> multi-device
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
            Try it now for free on iOS, Android, PC, Web - wherever your friends
            are we got you covered.
          </p>

          {/* Platform Icons */}
          <div className="flex gap-4 sm:gap-5 md:gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full border border-blue-900 flex items-center justify-center text-xl sm:text-2xl hover:border-violet-500 transition duration-300"
              >
                {platform.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="flex-1">
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-blue-900 rounded-lg overflow-hidden hover:border-blue-700 transition duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-3 sm:p-4 bg-black hover:bg-gray-900 transition duration-300"
                >
                  <span className="text-white font-semibold text-left text-xs sm:text-sm md:text-base">
                    {item.question}
                  </span>
                  <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 ml-3 sm:ml-4">
                    <span className="text-white font-bold text-sm sm:text-base">
                      {expandedIndex === index ? "✕" : "+"}
                    </span>
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="p-3 sm:p-4 bg-gray-900/50 border-t border-blue-900">
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availableplatform;
