import React from "react";

export default function Comitment() {
  return (
    <div className="min-h-screen bg-[#F5F7FF] flex items-center justify-center p-6 relative">
      <div className="max-w-4xl w-full bg-white rounded-4xl p-12 md:p-16 shadow-xl relative">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-blue-800 text-4xl md:text-5xl font-bold">
            Our Commitment to Quality
          </h1>
        </div>

        {/* Quality Items */}
        <div className="space-y-10">
          {/* Item 01 */}
          <div>
            <div className="text-[#06229f] text-2xl font-bold mb-2">01</div>
            <h3 className="text-gray-900 text-xl font-bold mb-2">
              Rigorous Training
            </h3>
            <p className="text-gray-700 text-base">
              Our agents undergo extensive training in product knowledge,
              customer service, and cultural communication.
            </p>
          </div>

          {/* Item 02 */}
          <div>
            <div className="text-[#06229f] text-2xl font-bold mb-2">02</div>
            <h3 className="text-gray-900 text-xl font-bold mb-2">
              Continuous Monitoring
            </h3>
            <p className="text-gray-700 text-base">
              We consistently evaluate performance to ensure the highest
              standards of service delivery.
            </p>
          </div>

          {/* Item 03 */}
          <div>
            <div className="text-[#06229f] text-2xl font-bold mb-2">03</div>
            <h3 className="text-gray-900 text-xl font-bold mb-2">
              Client Feedback Integration
            </h3>
            <p className="text-gray-700 text-base">
              Your insights drive our improvements, ensuring our services align
              perfectly with your expectations.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-4xl">
          {/* Vertical line decoration */}
          <svg
            className="absolute left-12 top-1/2 -translate-y-1/2 h-64 opacity-20"
            width="2"
            height="100%"
            viewBox="0 0 2 300"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="300"
              stroke="#06229f"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Dotted pattern */}
          <div className="absolute right-12 bottom-12 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-[#06229f]/20"
              ></div>
            ))}
          </div>

          {/* Abstract shape */}
          <div className="absolute top-20 right-20 w-48 h-48">
            <div className="absolute inset-0 bg-[#06229f]/5 rounded-full blur-2xl"></div>
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 100 100"
            >
              <polygon
                points="50,15 85,35 85,65 50,85 15,65 15,35"
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
