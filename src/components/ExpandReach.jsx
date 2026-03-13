import { PopupButton } from "react-calendly";

export default function ExpandReach() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-[#151A26] rounded-3xl p-10 md:p-12 shadow-2xl relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
              Ready to Expand Your Reach?
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10">
              Let ServixaOS be the bridge to your international success. We're
              here to help you connect with your customers, everywhere.
            </p>

            {/* Schedule Call Button */}
            <div className="flex justify-start">
              <PopupButton
                url="https://calendly.com/servixaos/30min"
                rootElement={document.getElementById("root")}
                text="Schedule a Call →"
                className="bg-[#06229f] hover:bg-[#041a7a] text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:scale-105"
              />
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#06229f]/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#06229f]/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === 4 ? "bg-[#06229f]" : "bg-[#06229f]/40"
                  }`}
                ></div>
              ))}
            </div>

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ opacity: 0.15 }}
            >
              <line
                x1="30%"
                y1="30%"
                x2="50%"
                y2="50%"
                stroke="#06229f"
                strokeWidth="1"
              />
              <line
                x1="70%"
                y1="30%"
                x2="50%"
                y2="50%"
                stroke="#06229f"
                strokeWidth="1"
              />
              <line
                x1="30%"
                y1="70%"
                x2="50%"
                y2="50%"
                stroke="#06229f"
                strokeWidth="1"
              />
              <line
                x1="70%"
                y1="70%"
                x2="50%"
                y2="50%"
                stroke="#06229f"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#06229f]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#06229f]/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
