import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium sound quality with noise cancellation.",
    price: 89,
    image: "/images/product1.jpg",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Track fitness, heart rate, and notifications.",
    price: 119,
    image: "/images/product2.jpg",
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and clarity.",
    price: 59,
    image: "/images/product3.jpg",
  },
  {
    id: "4",
    name: "Gaming Mouse",
    description: "High precision mouse for professional gamers.",
    price: 39,
    image: "/images/product4.jpg",
  },
];

 const metadata = {
  title: "MiniMart | Products",
  description: "Browse our collection of high-quality products.",
};

const ItemsPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-24">
        <title>{metadata.title}</title>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            All Products
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Browse our complete collection of high-quality products carefully selected for you.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-white border p-5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <Link
                    href={`/items/${product.id}`}
                    className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-indigo-500 opacity-0 transition group-hover:opacity-5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsPage;
