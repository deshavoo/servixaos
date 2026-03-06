export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#1A1F2F] text-white p-10">
      {/* Logo & Short Info */}
      <aside className="flex flex-col items-center gap-2">
        <img
          src="/src/assets/logo web.png" // اللوجو بتاعك
          alt="ServixaOS Logo"
          className="w-32 mb-2"
        />
        <p className="text-gray-400 text-sm text-center">
          Providing modern, reliable customer support solutions
        </p>
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} ServixaOS. All rights reserved.
        </p>
      </aside>

      {/* Social Icons - مودرن وواضحة */}
      <nav className="mt-4">
        <div className="flex gap-4">
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-[#4A6BFF] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.06 9.06 0 01-2.88 1.1A4.52 4.52 0 0016.45 0c-2.5 0-4.51 2.04-4.51 4.56 0 .36.04.71.12 1.05A12.94 12.94 0 013 1.64a4.53 4.53 0 001.4 6.08 4.5 4.5 0 01-2.05-.57v.06c0 2.22 1.57 4.07 3.66 4.48a4.52 4.52 0 01-2.04.08c.57 1.77 2.22 3.06 4.17 3.1A9.07 9.07 0 010 19.54a12.8 12.8 0 006.92 2.02c8.3 0 12.85-6.87 12.85-12.84 0-.2-.01-.42-.02-.63A9.18 9.18 0 0023 3z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-red-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.5 6.2s-.2-1.66-.82-2.39c-.78-.82-1.65-.83-2.05-.88C16.5 2.5 12 2.5 12 2.5s-4.5 0-8.63.43c-.4.05-1.27.06-2.05.88-.63.73-.82 2.39-.82 2.39S0 8.03 0 9.83v4.34c0 1.8.18 3.63.18 3.63s.2 1.66.82 2.39c.78.82 1.8.79 2.25.87 1.63.14 8.5.4 8.5.4s4.5 0 8.63-.43c.4-.05 1.27-.06 2.05-.88.63-.73.82-2.39.82-2.39s.18-1.82.18-3.63V9.83c0-1.8-.18-3.63-.18-3.63zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}
