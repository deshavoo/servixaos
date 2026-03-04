import { useState, useEffect } from "react";
import logo from "../assets/logo web.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-40 object-contain translate-y-1"
          />
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-8 font-medium transition-colors duration-300
          ${scrolled ? "text-gray-700" : "text-black"}`}
        >
          <li className="hover:text-blue-600 cursor-pointer">Vision</li>
          <li className="hover:text-blue-600 cursor-pointer">mision</li>
          <li className="hover:text-blue-600 cursor-pointer">services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <button
            className={`px-5 py-2 rounded-md transition
            ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition
          ${scrolled ? "text-blue-700" : "text-white"}`}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600">Vision</li>
            <li className="hover:text-blue-600">Missions</li>
            <li className="hover:text-blue-600">services</li>
            <li className="hover:text-blue-600">Contact</li>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
