"use client";

import Image from "next/image";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Headphones",
    desc: "High quality sound with comfortable fit.",
    price: 59,
    image: "https://i.ibb.co.com/23B86NSq/headphones-displayed-against-dark-background-1.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    desc: "Track your fitness and notifications easily.",
    price: 79,
    image: "https://i.ibb.co.com/bgZZJpVH/11674872.jpg",
  },
  {
    id: 3,
    name: "Wireless Speaker",
    desc: "Portable speaker with amazing sound.",
    price: 49,
    image: "https://i.ibb.co.com/PBd74hB/speakers-with-extremely-high-volume-desk-1.jpg",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <a
            href="/items"
            className="text-sm font-medium text-gray-700 hover:underline"
          >
            View all →
          </a>
        </div>

        {/* Product Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-xl bg-white border p-6 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300 cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover [h-360px] w-full"
                />
              </div>

              {/* Product Info */}
              <h3 className="mt-4 font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{product.desc}</p>
              <p className="mt-4 font-semibold text-gray-900">${product.price}</p>

              {/* Subtle Hover Overlay */}
              <div className="absolute inset-0 rounded-xl bg-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
