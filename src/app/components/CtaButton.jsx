import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-28 text-center bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Start Managing Products Today
      </h2>
      <p className="mt-6 text-gray-600 max-w-xl mx-auto">
        Log in to add new items, manage product listings, and maintain an organized catalog with ease.
      </p>
      <Link
        href="/login"
        className="mt-8 inline-block rounded-md bg-black px-8 py-4 text-white hover:bg-gray-800"
      >
        Get Started
      </Link>
    </section>
  );
};

export default CTASection;
