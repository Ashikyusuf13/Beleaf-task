import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", id: "header" },
    { name: "ABOUT", id: "salesinfo" },
    { name: "FEATURES", id: "features" },
    { name: "ROADMAP", id: "roadmap" },
    { name: "FAQ", id: "faq" },
    { name: "INSIGHTS", id: "testimonials" },
  ];

  const scrollToSection = (linkName, sectionId) => {
    setActiveLink(linkName);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-full px-8 sm:px-10 md:px-15 py-5 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-95 backdrop-blur-md border-b border-blue-900 shadow-2xl"
          : "bg-black bg-opacity-80 backdrop-blur-md"
      }`}
    >
      {/* logo */}
      <div className="flex gap-2 items-center">
        <img src="Clip path group.png" alt="logo" className="w-8 h-8" />
        <span className="font-bold text-white text-lg">ironic</span>
      </div>

      {/* navbar */}
      <div className="flex gap-5">
        <ul className="flex gap-8 cursor-pointer text-white text-sm">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => scrollToSection(link.name, link.id)}
              className={`relative font-semibold transition-all duration-300 cursor-pointer group
                ${
                  activeLink === link.name
                    ? "text-blue-400"
                    : "hover:text-blue-300 text-white"
                }
              `}
            >
              {link.name}
              {/* Animated underline effect */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500 ${
                  activeLink === link.name ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>

      {/*  button */}
      <div>
        <button className="bg-gradient-to-r from-violet-500 to-pink-500 px-6 py-2 text-white font-bold shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
          TRY IT NOW
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
      </div>
    </div>
  );
};

export default Navbar;
