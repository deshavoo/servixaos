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
        <a href="#home" className="flex items-center h-full">
          <img src={logo} alt="Logo" className="h-30 w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-8 font-medium transition-colors duration-300
  ${scrolled ? "text-gray-700" : "text-black"}`}
        >
          <li>
            <a href="#vision" className="hover:text-blue-600">
              Vision
            </a>
          </li>

          <li>
            <a href="#mission" className="hover:text-blue-600">
              Mission
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/201023233712"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </a>
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
            <li>
              <a
                href="#vision"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Vision
              </a>
            </li>

            <li>
              <a
                href="#mission"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Missions
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Contact
              </a>
            </li>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
