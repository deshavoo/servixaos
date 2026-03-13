import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F7FF] flex items-center justify-center p-6 relative">
      <div className="max-w-6xl w-full bg-white rounded-3xl p-12 md:p-16 shadow-xl relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-[#06229f] text-4xl md:text-5xl font-bold mb-4">
            Support Channels
          </h1>

          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Meet your customers wherever they are with our comprehensive
            multichannel support.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Voice Support */}
          <a href="tel:+19298284909" className="group">
            <div className="bg-[#F0F3FF] rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="text-gray-900 text-xl font-bold mb-3">
                Voice Support
              </h3>

              <p className="text-gray-600">
                Professional phone support in 50+ languages
              </p>
            </div>
          </a>

          {/* Email Support */}
          <a href="mailto:servixaos@outlook.com" className="group">
            <div className="bg-[#F0F3FF] rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="text-gray-900 text-xl font-bold mb-3">
                Email Support
              </h3>

              <p className="text-gray-600">
                Thorough, detailed responses to customer inquiries
              </p>
            </div>
          </a>

          {/* Social Media */}
          <a
            href="https://www.linkedin.com/company/servixa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-[#F0F3FF] rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="text-gray-900 text-xl font-bold mb-3">
                Social Media
              </h3>

              <p className="text-gray-600">
                Engage customers across all social platforms
              </p>
            </div>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          <svg
            className="absolute top-1/4 right-8 w-24 h-24 opacity-10"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#06229f"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke="#06229f"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          <svg
            className="absolute bottom-1/4 left-8 w-32 h-32 opacity-10"
            viewBox="0 0 100 100"
          >
            <path
              d="M20,50 Q50,20 80,50 Q50,80 20,50"
              stroke="#06229f"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M30,50 Q50,30 70,50 Q50,70 30,50"
              stroke="#06229f"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
