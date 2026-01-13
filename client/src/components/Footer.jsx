import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-blue-900">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-8 md:px-15 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex gap-2 items-center mb-4 sm:mb-6">
              <img
                src="Clip path group.png"
                alt="logo"
                className="w-6 sm:w-8 h-6 sm:h-8"
              />
              <span className="font-bold text-white text-base sm:text-lg">
                ironic
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              A blockchain service protocol that simplifies using real assets
              easily & seamlessly in a decentralized network.
            </p>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              {[
                { name: "Twitter", icon: "𝕏" },
                { name: "Discord", icon: "💬" },
                { name: "LinkedIn", icon: "in" },
                { name: "Telegram", icon: "✈" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-blue-900 flex items-center justify-center text-xs text-blue-400 hover:border-blue-400 hover:bg-blue-900/20 transition duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">
              Product
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {["Features", "Pricing", "Security", "Team", "Updates"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition duration-300 text-xs sm:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">
              Company
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {["About", "Blog", "Careers", "Press", "Partners"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition duration-300 text-xs sm:text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">
              Resources
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                "Documentation",
                "API Docs",
                "Community",
                "Support",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition duration-300 text-xs sm:text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Copyright */}
          <div className="text-gray-500 text-xs sm:text-sm">
            <p>
              © {currentYear} Iconic. All rights reserved. | Built with ❤️ for
              the future of blockchain
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-500 hover:text-gray-300 transition duration-300"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-blue-900 via-purple-900 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
