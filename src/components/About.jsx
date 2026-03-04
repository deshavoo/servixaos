export default function About() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581091012184-5c7c3f0b7a5d"
            alt="About Us"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            We are a professional customer support company dedicated to
            delivering high-quality and reliable services that help businesses
            grow and build strong relationships with their customers.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span className="text-gray-700">
                Experienced and professional support teams
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span className="text-gray-700">
                24/7 availability for your business needs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span className="text-gray-700">
                Customized solutions for each client
              </span>
            </li>
          </ul>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
