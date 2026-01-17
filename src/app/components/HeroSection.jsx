import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block mb-4 rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
            Smart product management
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Discover & Manage <br /> Products with Ease
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg">
            MiniMart is a modern product listing platform designed to help users explore items, view detailed information, and manage products through a clean and intuitive interface.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/items"
              className="rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800"
            >
              Browse Products
            </Link>
            <Link
              href="/login"
              className="rounded-md border px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Admin Login
            </Link>
          </div>
        </div>

        <div className="relative">
            <img className="rounded-xl h-full w-full" src="https://i.ibb.co.com/21Y807xY/young-couple-protection-mask-holding-multiple-paper-shopping-bag-walking-corridor-large-shopping-mal.jpg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
