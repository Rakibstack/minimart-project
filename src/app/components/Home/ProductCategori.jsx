const categories = ["Electronics", "Fashion", "Groceries", "Accessories"];

const ProductCategories = () => {
  return (
    <section className="bg-gray-50 py-18">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Product Categories
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore products by category and find exactly what you need.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className="group relative rounded-xl border border-gray-200 bg-white p-8 text-gray-900 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300 cursor-pointer"
            >
              <p className="text-lg font-semibold group-hover:text-indigo-600 transition-colors duration-300">
                {cat}
              </p>

              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-xl bg-gray-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
