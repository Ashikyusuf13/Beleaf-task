import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const socialLinks = [
    { icon: "𝕏", label: "Twitter", url: "#" },
    { icon: "📘", label: "Facebook", url: "#" },
    { icon: "🔗", label: "LinkedIn", url: "#" },
    { icon: "📱", label: "Discord", url: "#" },
  ];

  const scrollToSection = (linkName, sectionId) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`w-full px-4 sm:px-8 md:px-15 py-4 md:py-5 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-blue-900/30 shadow-2xl"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        {/* logo */}
        <div className="flex gap-2 items-center">
          <img
            src="Clip path group.png"
            alt="logo"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="font-bold text-white text-sm sm:text-lg">
            ironic
          </span>
        </div>

        {/* Hamburger Menu Button - Mobile Only (for dropdown menu) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-5">
          <ul className="flex gap-4 lg:gap-8 cursor-pointer text-white text-xs lg:text-sm">
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
                  className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-400 to-blue-600 transition-all duration-500 ${
                    activeLink === link.name
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button & Sidebar Toggle */}
        <div className="flex gap-3 items-center">
          <button className="hidden md:block bg-linear-to-r from-violet-500 to-pink-500 px-4 lg:px-6 py-2 text-white text-sm font-bold shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
            TRY IT NOW
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 md:hidden hover:bg-blue-900/20 rounded-lg transition duration-300"
          >
            <span className="text-white text-xl">☰</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-blue-900/30 md:hidden">
            <ul className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  onClick={() => scrollToSection(link.name, link.id)}
                  className={`relative font-semibold transition-all duration-300 cursor-pointer text-sm
                    ${
                      activeLink === link.name
                        ? "text-blue-400"
                        : "hover:text-blue-300 text-white"
                    }
                  `}
                >
                  {link.name}
                </li>
              ))}
              <li className="pt-2 border-t border-blue-900/30">
                <button className="w-full bg-linear-to-r from-violet-500 to-pink-500 px-4 py-2 text-white text-sm font-bold shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                  TRY IT NOW
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-transparent"></div>
        </div>
      </div>

      {/* Side Navbar */}
      <div
        className={`fixed right-0 top-0 h-screen w-64 bg-black/95 backdrop-blur-md border-l border-blue-900/30 z-40 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl hover:text-blue-400 transition duration-300"
        >
          ✕
        </button>

        {/* Sidebar Content */}
        <div className="pt-20 px-6 h-full flex flex-col">
          {/* Navigation Links */}
          <div className="mb-12">
            <h3 className="text-white text-sm font-bold uppercase mb-6 text-blue-400">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.name, link.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition duration-300 text-sm font-semibold ${
                      activeLink === link.name
                        ? "bg-blue-900/40 text-blue-400"
                        : "text-white hover:bg-blue-900/20"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="mb-12 border-t border-blue-900/30 pt-6">
            <h3 className="text-white text-sm font-bold uppercase mb-6 text-blue-400">
              Follow Us
            </h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  title={social.label}
                  className="w-12 h-12 bg-blue-900/20 hover:bg-blue-900/40 rounded-lg flex items-center justify-center text-white text-lg transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto mb-6 space-y-3">
            <button className="w-full bg-linear-to-r from-violet-500 to-pink-500 px-4 py-2 text-white text-sm font-bold shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              TRY IT NOW
            </button>
            <button className="w-full border border-blue-900 text-blue-400 px-4 py-2 text-sm font-bold rounded-lg hover:bg-blue-900/20 transition duration-300">
              DOCUMENTATION
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
