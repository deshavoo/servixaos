import React from "react";

export default function BeforeServices() {
  return (
    <div className="min-h-screen bg-[#0B0E17] flex items-center justify-center p-6 relative">
      <div className="max-w-6xl w-full bg-[#151A26] rounded-4xl p-12 md:p-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Why Multilingual Support Matters
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            In an increasingly globalized market, speaking your customers'
            language is key to building trust and driving sales.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - 95% Stat */}
          <div className="bg-[#1E2333] rounded-2xl p-8">
            <div className="text-[#06229f] text-7xl md:text-8xl font-bold mb-2">
              95%
            </div>
            <div className="text-gray-500 text-lg mb-4">Satisfaction</div>
            <h3 className="text-white text-xl font-bold mb-3">
              Enhanced Customer Satisfaction
            </h3>
            <p className="text-gray-400">
              Customers prefer interacting in their native language, leading to
              higher satisfaction scores.
            </p>
          </div>

          {/* Right Column - Sales & Loyalty */}
          <div className="bg-[#1E2333] rounded-2xl p-8">
            <h3 className="text-white text-xl font-bold mb-3">
              Increased Sales & Loyalty
            </h3>
            <p className="text-gray-400 mb-6">
              Overcoming language barriers directly translates to improved
              conversion rates and repeat business.
            </p>
            <div className="text-[#06229f] text-6xl font-bold">2.5x</div>
            <div className="text-gray-500 text-lg">Higher Retention</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand Reputation */}
          <div className="bg-[#1E2333] rounded-2xl p-8">
            <h3 className="text-white text-xl font-bold mb-3">
              Stronger Brand Reputation
            </h3>
            <p className="text-gray-400">
              Demonstrate commitment to your international clientele, fostering
              a positive global image.
            </p>
          </div>

          {/* Countries Stat */}
          <div className="bg-[#1E2333] rounded-2xl p-8 flex items-center justify-between">
            <div>
              <div className="text-[#06229f] text-7xl font-bold">40+</div>
              <div className="text-white text-xl">Countries</div>
            </div>

            {/* Simple globe/dots decoration */}
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i % 2 === 0 ? "bg-[#06229f]" : "bg-[#06229f]/30"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-4xl">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#06229f]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#06229f]/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
