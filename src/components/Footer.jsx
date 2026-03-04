export default function Footer() {
  return (
    <footer className="bg-[#1A1F2F] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        {/* Logo & Description */}
        <aside className="flex flex-col items-start">
          <img
            src="/src/assets/logo web.png" // حطي هنا مسار اللوجو
            alt="ServixaOS Logo"
            className="w-36 mb-4"
          />
          <p className="text-white">
            Providing modern, reliable customer support solutions for your
            business.
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="font-semibold mb-4 text-white">Services</h6>
          <ul className="space-y-2 text-white">
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Branding
            </li>
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Design
            </li>
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Marketing
            </li>
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Advertisement
            </li>
          </ul>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="font-semibold mb-4 text-white">Company</h6>
          <ul className="space-y-2 text-white">
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              About us
            </li>
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Contact
            </li>
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Jobs
            </li>
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Press kit
            </li>
          </ul>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="font-semibold mb-4 text-white">Legal</h6>
          <ul className="space-y-2 text-white">
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Terms of use
            </li>
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Privacy policy
            </li>
            <li className="hover:text-[#4A6BFF] cursor-pointer transition">
              Cookie policy
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-[#4A6BFF]/50 pt-6 text-center text-white">
        © 2026 ServixaOS. All rights reserved.
      </div>
    </footer>
  );
}
