import AddToCartButton from "@/app/components/AddtoCardButton";
import Image from "next/image";
import Link from "next/link";

  const productDetails = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/iteams/${id}`);
    const data = await res.json();
    return data;
  }

const ItemDetailsPage = async ({ params }) => {

    const { id } = await params;
  const product = await productDetails(id);
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
            <img
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
              <AddToCartButton product={product}></AddToCartButton>
              <Link
                href="/items"
                className="rounded-xl border border-gray-300 px-8 py-4 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Back to Items
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailsPage;
