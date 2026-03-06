import logo from "../assets/logo web.png";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E17] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <img src={logo} alt="ServixaOS Logo" className="w-32" />

        {/* Description */}
        <p className="text-gray-400 max-w-md text-sm">
          Modern customer support solutions helping businesses connect with
          clients worldwide.
        </p>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © 2026 ServixaOS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
