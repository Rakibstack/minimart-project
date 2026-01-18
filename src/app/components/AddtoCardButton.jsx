
"use client";

import toast from "react-hot-toast";

const AddToCartButton = ({ product }) => {
  const handleAddToCart = () => {
    
    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="rounded-xl bg-gray-900 px-8 py-4 text-sm font-medium text-white transition hover:bg-gray-800"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
