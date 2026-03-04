import React from "react";

export default function Advantage() {
  return (
    <div className="min-h-screen bg-[#F5F7FF] flex items-center justify-center p-6 relative">
      <div className="max-w-4xl w-full bg-white rounded-4xl p-12 md:p-16 shadow-xl relative">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-blue-800 text-4xl md:text-5xl font-bold mb-4">
            The Servixaos Advantage
          </h1>
          <p className="text-gray-700 text-lg">
            Partnering with Servixaos means gaining a competitive edge in the
            global marketplace. We empower small businesses to act big.
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-[#06229f] text-xl">✅</span>
            <span className="text-gray-800 text-lg">
              Cost-effective alternative to in-house multilingual teams
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[#06229f] text-xl">✅</span>
            <span className="text-gray-800 text-lg">
              Access to a diverse pool of language experts
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[#06229f] text-xl">✅</span>
            <span className="text-gray-800 text-lg">
              Streamlined processes for efficient customer resolution
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[#06229f] text-xl">✅</span>
            <span className="text-gray-800 text-lg">
              Focus on your core business while we handle support
            </span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-4xl">
          {/* Top Right */}
          <div className="absolute top-0 right-0 w-64 h-64">
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#06229f]/5 rounded-full blur-2xl"></div>
            <svg
              className="absolute top-20 right-20 w-40 h-40 opacity-10"
              viewBox="0 0 100 100"
            >
              <path
                d="M20,50 Q35,20 50,50 Q65,80 80,50"
                stroke="#06229f"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="50" cy="50" r="5" fill="#06229f" />
            </svg>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-64 h-64">
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#06229f]/5 rounded-full blur-2xl"></div>
            <svg
              className="absolute bottom-20 left-20 w-40 h-40 opacity-10"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="#06229f"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 4"
              />
              <circle
                cx="50"
                cy="50"
                r="15"
                stroke="#06229f"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
