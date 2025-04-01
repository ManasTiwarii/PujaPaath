import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown, Bot as Lotus } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "kn", name: "ಕನ್ನಡ" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Lotus className="h-8 w-8 text-vedic-saffron" />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              VedicServices
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-vedic-saffron px-3 py-2 rounded-md"
            >
              {t("nav.home")}
            </a>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-vedic-saffron px-3 py-2 rounded-md inline-flex items-center"
              >
                {t("nav.categories")}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  {/* Add dropdown items here */}
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-vedic-saffron px-3 py-2 rounded-md"
            >
              {t("nav.testimonials")}
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-vedic-saffron px-3 py-2 rounded-md"
            >
              {t("nav.about")}
            </a>

            {/* Language Selector */}
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className="ml-4 bg-gray-100 border border-gray-300 rounded-md px-2 py-1"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            {/* Early Access Button */}
            <a
              href="https://wa.me/918658592057?text=Hey, let's connect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vedic-saffron text-white px-4 py-2 rounded-md hover:bg-vedic-ochre transition-colors"
            >
              {t("nav.earlyAccess")}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-vedic-saffron focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Add mobile menu items here */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
