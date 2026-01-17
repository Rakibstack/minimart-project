const FeaturesSection = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Built for Simplicity & Performance
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          MiniMart is designed to make product management effortless. Explore key features below.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Clean Product Listing",
              desc: "Browse products with clear cards and essential information at a glance.",
              icon: "📦",
            },
            {
              title: "Detailed Product View",
              desc: "Access complete product details with a structured and readable layout.",
              icon: "🔍",
            },
            {
              title: "Secure Management",
              desc: "Authorized users can add and manage products through a protected interface.",
              icon: "🔒",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-gray-700 bg-gray-800 p-8 text-left transform transition hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-300">{item.desc}</p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 rounded-xl bg-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
