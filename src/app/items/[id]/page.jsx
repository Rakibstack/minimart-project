import Image from "next/image";
import Link from "next/link";

// Temporary static data (replace later with MongoDB/API)
const product = {
  id: "1",
  name: "Wireless Headphones",
  description:
    "Experience premium sound quality with advanced noise cancellation and long-lasting comfort. Perfect for music lovers and professionals.",
  price: 89,
  image: "/images/product1.jpg",
  category: "Electronics",
  features: [
    "Active Noise Cancellation",
    "Up to 30 hours battery life",
    "Bluetooth 5.3",
    "Comfortable over-ear design",
  ],
};

const ItemDetailsPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-10 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/items" className="hover:underline">
            Items
          </Link>{" "}
          / <span className="text-gray-700">{product.name}</span>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Image Section */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-medium text-indigo-700">
              {product.category}
            </span>

            <h1 className="mt-4 text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <p className="mt-8 text-3xl font-bold text-gray-900">
              ${product.price}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-gray-900 px-8 py-4 text-sm font-medium text-white transition hover:bg-gray-800">
                Add to Cart
              </button>
              <Link
                href="/items"
                className="rounded-xl border border-gray-300 px-8 py-4 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Back to Items
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900">
            Product Features
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border bg-white p-6 text-sm text-gray-700 shadow-sm transition hover:shadow-md"
              >
                ✔ {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailsPage;
