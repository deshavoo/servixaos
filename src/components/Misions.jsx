import React from "react";

export default function Missions() {
  return (
    <div className="min-h-screen bg-[#F5F7FF] flex items-center justify-center p-6 relative">
      <div className="max-w-6xl w-full rounded-4xl p-12 md:p-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-blue-800 text-4xl md:text-5xl font-bold leading-tight mb-6">
              Affordable, Multilingual Excellence
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              Servixaos is committed to providing customer service solutions
              that are both affordable and exceptional. We believe that language
              should never be a barrier to excellent customer experience.
            </p>

            <p className="text-gray-700 text-lg mb-8">
              Our mission is simple: to help global retailers connect
              meaningfully with their customers, regardless of language or
              location.
            </p>

            {/* Bullet points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#06229f] text-xl font-light">-</span>
                <span className="text-blue-800 text-lg">
                  Native-speaking multilingual agents
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#06229f] text-xl font-light">-</span>
                <span className="text-blue-800 text-lg">
                  Optimized customer interactions in every market
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#06229f] text-xl font-light">-</span>
                <span className="text-blue-800 text-lg">
                  Increased satisfaction and loyalty
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Centered Card */}
          <div className="flex justify-center items-center relative">
            <div className="relative z-10 bg-[#06229f] rounded-3xl p-10 w-full max-w-sm shadow-2xl">
              {/* Large stat number */}
              <div className="text-center mb-4">
                <span className="text-white text-8xl md:text-9xl font-bold leading-none">
                  50
                </span>
                <span className="text-white/70 text-3xl ml-2">+</span>
              </div>

              {/* Stat label */}
              <div className="text-center">
                <h3 className="text-white text-3xl font-bold mb-2">
                  Languages Supported
                </h3>
                <p className="text-white/80 text-lg">
                  Native speakers worldwide
                </p>
              </div>

              {/* Decorative dots */}
              <div className="mt-8 flex justify-center gap-2">
                <div className="grid grid-cols-5 gap-1.5">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i % 3 === 0 ? "bg-white" : "bg-white/40"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Subtle circles */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ opacity: 0.15 }}
              >
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="30%"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-4xl">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#06229f]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#06229f]/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
