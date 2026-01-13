import React, { useState } from "react";

const Getintouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10">
      <div
        id="faq"
        className="w-full bg-linear-to-r from-purple-600 to-blue-600 relative overflow-hidden"
      >
        <div className="px-4 sm:px-8 md:px-15 py-12 sm:py-16 md:py-20">
          {/* Background Decorative Images */}
          <div className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 -ml-10 sm:-ml-14 md:-ml-16 opacity-80">
            <img
              src="Image (4).png"
              alt="Decoration Left"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          <div className="absolute right-1 sm:right-5 bottom-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 -mr-6 sm:-mr-8 md:-mr-10 opacity-80">
            <img
              src="Image (5).png"
              alt="Decoration Right"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="max-w-xl sm:max-w-2xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-xs sm:text-sm text-white/80 uppercase mb-3 sm:mb-4 font-semibold tracking-widest">
                ▶ GET IN TOUCH
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                Ask anything from <br /> anywhere!
              </h2>
            </div>

            {submitted && (
              <div className="mb-6 p-3 sm:p-4 bg-green-900/40 border border-green-500 rounded-lg text-center">
                <p className="text-green-300 font-semibold text-sm sm:text-base">
                  ✓ Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm text-white/80 uppercase mb-2 sm:mb-3 font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="E.g. Jhon"
                    className="w-full bg-black/40 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg placeholder-gray-500 text-sm focus:outline-none focus:border-white/40 transition duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-white/80 uppercase mb-2 sm:mb-3 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full bg-black/40 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg placeholder-gray-500 text-sm focus:outline-none focus:border-white/40 transition duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm text-white/80 uppercase mb-2 sm:mb-3 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Let us know!"
                  className="w-full bg-black/40 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg placeholder-gray-500 text-sm focus:outline-none focus:border-white/40 transition duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-3 sm:pt-4">
                <button
                  type="submit"
                  className="bg-black hover:bg-black/90 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white font-bold rounded-lg transition duration-300 flex items-center gap-2 shadow-lg"
                >
                  <span>⚡</span> SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="bg-black/40 border-t border-white/10 px-4 sm:px-8 md:px-15 py-4 sm:py-6 text-center">
        <p className="text-xs sm:text-sm text-white/70">
          Copyright & design by FramerDevs · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Getintouch;
