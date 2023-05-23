import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const ProductPage = () => {
  const product: Product = {
    id: 1,
    name: "Sample Product",
    price: 9.99,
    description: "This is a sample product description.",
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <p className="mb-4">{product.description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default ProductPage;
