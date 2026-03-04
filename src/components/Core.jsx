import React from "react";

export default function Core() {
  return (
    <div className="min-h-screen bg-[#F5F7FF] flex items-center justify-center p-6 relative">
      <div className="max-w-5xl w-full bg-white rounded-4xl p-12 md:p-16 relative shadow-xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-blue-800 text-4xl md:text-5xl font-bold">
            Core Values: Our Foundation
          </h1>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Compliance */}
          <div className="bg-[#F0F3FF] rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-blue-800 text-2xl font-bold mb-3">
              Compliance
            </h3>
            <p className="text-gray-700 text-base">
              Adhering to international standards and regulations for secure
              operations.
            </p>
          </div>

          {/* Transparency */}
          <div className="bg-[#F0F3FF] rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-blue-800 text-2xl font-bold mb-3">
              Transparency
            </h3>
            <p className="text-gray-700 text-base">
              Clear communication and honest practices in all our partnerships.
            </p>
          </div>

          {/* Flexibility */}
          <div className="bg-[#F0F3FF] rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-blue-800 text-2xl font-bold mb-3">
              Flexibility
            </h3>
            <p className="text-gray-700 text-base">
              Tailoring solutions to meet your unique business needs and market
              demands.
            </p>
          </div>

          {/* Customer-Centricity */}
          <div className="bg-[#F0F3FF] rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-blue-800 text-2xl font-bold mb-3">
              Customer-Centricity
            </h3>
            <p className="text-gray-700 text-base">
              Prioritizing your customers' experience above all else, ensuring
              satisfaction.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-4xl">
          {/* Top right decoration */}
          <div className="absolute top-0 right-0 w-32 h-32">
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#06229f]/20 rounded-tr-3xl"></div>
          </div>

          {/* Bottom left decoration */}
          <div className="absolute bottom-0 left-0 w-32 h-32">
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#06229f]/20 rounded-bl-3xl"></div>
          </div>

          {/* Abstract shape */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#06229f"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              stroke="#06229f"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="15"
              stroke="#06229f"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
