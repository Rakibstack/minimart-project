const ProductCategories = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Product Categories
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4 text-center">
          {["Electronics", "Fashion", "Groceries", "Accessories"].map((cat) => (
            <div key={cat} className="rounded-md border bg-white p-6">
              <p className="font-medium text-gray-800">{cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
