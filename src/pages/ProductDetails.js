import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const navigate = useNavigate();

  if (!product) return <p className="p-4">No product selected.</p>;

  return (
    <div className="p-4">
      <button onClick={() => navigate('/')} className="mb-4 text-blue-500">Back to Search</button>
      <div className="grid md:grid-cols-2 gap-4">
        <img src={product.image} alt={product.name} className="w-full object-cover" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="mb-1">Price: ${product.price}</p>
          <p className="mb-1">Brand: {product.brand}</p>
          <p className="mb-1">Category: {product.category}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;