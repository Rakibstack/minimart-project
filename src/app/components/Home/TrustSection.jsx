const TrustSection = () => {
  return (
    <section className="border-t border-b bg-gray-50">
      <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          ["1k+", "Products Listed"],
          ["500+", "Active Users"],
          ["99%", "Uptime"],
          ["24/7", "Availability"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-600 mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
