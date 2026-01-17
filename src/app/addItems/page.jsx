"use client";

const AddItemPage = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-gray-900">
            Add New Product
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Provide complete product information. These details will appear
            on both the product listing and product details pages.
          </p>
        </div>

        {/* Form */}
        <form className="rounded-2xl bg-white border border-gray-200 p-10 shadow-xl space-y-10">
          {/* Basic Info */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Basic Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-800">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Wireless Headphones"
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-800">
                  Category
                </label>
                <select
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                  <option value="">Select category</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Groceries</option>
                  <option>Accessories</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Pricing
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-800">
                  Price ($)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 89"
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-800">
                  Discount (%) <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 10"
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Description
            </h2>
            <textarea
              rows="5"
              placeholder="Write a detailed product description that will appear on the product details page."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
            ></textarea>
          </div>

          {/* Features */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Product Features
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              Each feature will be shown as a bullet point on the product details page.
            </p>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="✔ Active Noise Cancellation"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
              />
              <input
                type="text"
                placeholder="✔ Up to 30 hours battery life"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
              />
              <input
                type="text"
                placeholder="✔ Bluetooth 5.3 support"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6">
            <button
              type="reset"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Publish Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddItemPage;
