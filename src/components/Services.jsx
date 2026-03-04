import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#F5F7FF] flex items-center justify-center p-6 relative">
      <div className="max-w-6xl w-full bg-white rounded-4xl p-12 md:p-16 relative z-10 shadow-xl">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-blue-800 text-5xl md:text-6xl font-bold mb-4">
            Tailored Solutions
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-blue-700 text-lg font-medium tracking-wider">
              WHAT WE OFFER
            </span>
            <div className="flex-1 h-px bg-linear-to-r from-[#06229f] to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-[#F0F3FF] rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-blue-800 text-2xl font-bold mb-2">
              100% Uptime
            </h3>
            <p className="text-blue-700 text-lg font-medium mb-4">
              24/7 Global Coverage
            </p>
            <p className="text-gray-700 text-base mb-6">
              Support across all time zones, always available.
            </p>
            <button className="text-blue-800 font-medium hover:text-[#06229f] transition-colors self-start">
              Learn more →
            </button>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#F0F3FF] rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-blue-800 text-2xl font-bold mb-2">
              50+ Cultures
            </h3>
            <p className="text-blue-700 text-lg font-medium mb-4">
              Cultural Nuance Training
            </p>
            <p className="text-gray-700 text-base mb-6">
              Culturally-aware agents for respectful communication.
            </p>
            <button className="text-blue-800 font-medium hover:text-[#06229f] transition-colors self-start">
              Learn more →
            </button>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#F0F3FF] rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-blue-800 text-2xl font-bold mb-2">
              3x Faster Scale
            </h3>
            <p className="text-blue-700 text-lg font-medium mb-4">
              Scalable Support
            </p>
            <p className="text-gray-700 text-base mb-6">
              Grows seamlessly with your business expansion.
            </p>
            <button className="text-blue-800 font-medium hover:text-[#06229f] transition-colors self-start">
              Learn more →
            </button>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8 gap-4 md:gap-0">
          <div className="flex items-center gap-2">
            <span className="text-gray-800 text-xl">Join</span>
            <span className="text-blue-800 text-2xl font-bold">500+</span>
            <span className="text-gray-800 text-xl">businesses worldwide</span>
          </div>
          <button className="bg-[#06229f] hover:bg-[#041a7a] text-white font-semibold py-3 px-6 rounded-full text-lg transition-colors">
            Get Started Today →
          </button>
        </div>
      </div>

      {/* Decorative subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #06229f 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>
  );
}
