import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F7FF] flex items-center justify-center p-6 relative">
      <div className="max-w-4xl w-full bg-white rounded-4xl p-12 md:p-16 shadow-xl relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-[#06229f] text-4xl md:text-5xl font-bold mb-4">
            Support Channels
          </h1>
          <p className="text-gray-700 text-lg">
            Meet your customers wherever they are with our comprehensive
            multichannel support.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Chat Support */}
          <div className="bg-[#F0F3FF] rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-gray-900 text-xl font-bold mb-2">
              Chat Support
            </h3>
            <p className="text-gray-600">
              Real-time assistance through live chat platforms
            </p>
          </div>

          {/* Voice Support */}
          <div className="bg-[#F0F3FF] rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-gray-900 text-xl font-bold mb-2">
              Voice Support
            </h3>
            <p className="text-gray-600">
              Professional phone support in 50+ languages
            </p>
          </div>

          {/* Email Support */}
          <div className="bg-[#F0F3FF] rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-gray-900 text-xl font-bold mb-2">
              Email Support
            </h3>
            <p className="text-gray-600">
              Thorough, detailed responses to customer inquiries
            </p>
          </div>

          {/* Social Media */}
          <div className="bg-[#F0F3FF] rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-gray-900 text-xl font-bold mb-2">
              Social Media
            </h3>
            <p className="text-gray-600">
              Engage customers across all social platforms
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-4xl">
          {/* Top right circle */}
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

          {/* Bottom left abstract curve */}
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
