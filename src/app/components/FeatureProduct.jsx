const FeaturedProducts = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <a href="/items" className="text-sm font-medium text-gray-700 hover:underline">
            View all →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl bg-white border p-6">
              <div className="h-40 rounded-lg bg-gray-100"></div>
              <h3 className="mt-4 font-semibold text-gray-900">Premium Product {i}</h3>
              <p className="mt-2 text-sm text-gray-600">
                High quality product with competitive pricing and modern design.
              </p>
              <p className="mt-4 font-semibold text-gray-900">${(i * 20) + 19}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
