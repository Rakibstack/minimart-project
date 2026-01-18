
'use client';

const AddItemPage = () => {


   const HandleIteam = async (e) => {
    
    e.preventDefault();

    const form = e.target;  
    const product = form.product.value;
    const category = form.category.value;
    const price = form.price.value;
    const photo = form.photo.value; 
    const description = form.description.value;

    const newItem = {
      name: product,
      category,
      price,
      image: photo,
      description,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/iteams`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      const data = await res.json();

      if (data.insertedId) {
        alert('Item added successfully');
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };  

    const metadata = {
      title: "MiniMart | Add New Product",
      description: "Add a new product to the MiniMart catalog",
    };


    return (
      <section className="bg-gray-100 min-h-screen py-20">
        <title>{metadata.title}</title>
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
          <form onSubmit={HandleIteam} className="rounded-2xl bg-white border border-gray-200 p-10 shadow-xl space-y-6">
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
                    name="product"
                    placeholder="e.g. Wireless Headphones"
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-800">
                    Category
                  </label>
                  <select
                    name="category"
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                  >
                    <option value="">Select category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Accessories">Accessories</option>
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
                    name="price"
                    placeholder="e.g. 89"
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-800">
                    Photo Url
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="e.g. https://example.com/photo.jpg"
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
                name="description"
                placeholder="Write a detailed product description that will appear on the product details page."
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
              ></textarea>
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
