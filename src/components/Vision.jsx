import React from "react";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <div className="min-h-screen bg-[#F5F7FF] flex items-center justify-center p-6 relative">
      <div className="max-w-7xl w-full relative z-10">
        {/* Main heading  */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-blue-800 text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Our Vision: Your Trusted Global Partner
        </motion.h2>

        {/* Three panel grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Panel 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 flex flex-col h-full shadow-md hover:shadow-xl transition"
          >
            <span className="text-[#06229f] text-lg font-semibold mb-4">
              Global Reach
            </span>

            <p className="text-blue-800 text-base mb-4">
              Empowering businesses to confidently serve customers worldwide.
            </p>

            <p className="text-gray-600 text-sm mb-6">
              Break through geographical barriers and connect with your
              international customer base seamlessly.
            </p>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-gray-500 text-sm">1/3</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#06229f]"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-6 pt-4 border-t border-gray-200">
              We envision a future where every international business can access
              top-tier customer support, fostering trust and loyalty across
              borders.
            </p>
          </motion.div>

          {/* Panel 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 flex flex-col h-full shadow-md hover:shadow-xl transition"
          >
            <span className="text-[#06229f] text-lg font-semibold mb-4">
              Trusted Support
            </span>

            <p className="text-blue-800 text-base mb-4">
              Building lasting relationships through reliable, high-quality
              customer care.
            </p>

            <p className="text-gray-600 text-sm mb-6">
              Our dedicated agents become an extension of your brand, delivering
              consistent excellence.
            </p>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-gray-500 text-sm">2/3</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-[#06229f]"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-6 pt-4 border-t border-gray-200">
              We envision a future where every international business can access
              top-tier customer support, fostering trust and loyalty across
              borders.
            </p>
          </motion.div>

          {/* Panel 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 flex flex-col h-full shadow-md hover:shadow-xl transition"
          >
            <span className="text-[#06229f] text-lg font-semibold mb-4">
              Growth Focused
            </span>

            <p className="text-blue-800 text-base mb-4">
              Helping your business scale by connecting you with your diverse
              customer base.
            </p>

            <p className="text-gray-600 text-sm mb-6">
              Scale your support operations effortlessly as your business
              expands into new markets.
            </p>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-gray-500 text-sm">3/3</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-[#06229f]"></div>
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-6 pt-4 border-t border-gray-200">
              We envision a future where every international business can access
              top-tier customer support, fostering trust and loyalty across
              borders.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#06229f]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#06229f]/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
