import heroBg from "../assets/herrobgg.png"; // عدلي المسار حسب مكان الصورة

export default function HeroSection() {
  return (
    <div
      className="hero min-h-screen bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay أغمق */}
      <div className="hero-overlay bg-white/20"></div>

      <div className="hero-content relative text-center  px-6">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl md:text-6xl  text-black font-bold leading-tight">
            Connecting Your Business
          </h1>
          <h1 className="mb-5 text-5xl md:text-6xl text-blue-800 font-bold leading-tight">
            To The World
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-700">
            Seamless, multilingual customer support designed for international
            growth. We speak your customers' language, so you can focus on
            scaling.
          </p>
          {/* أزرار */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#before"
              className="bg-[#06229f] hover:bg-[#2C4EFF] text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors"
            >
              Get Started
            </a>
            <a
              href="#advantage"
              className="bg-[#06229f] hover:bg-[#2C4EFF] text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
