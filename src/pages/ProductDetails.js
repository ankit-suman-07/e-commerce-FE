import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const navigate = useNavigate();

  if (!product) return <p className="p-4">No product selected.</p>;

  return (
    <div >
      <button onClick={() => navigate('/')} >Back to Search</button>
      <div>
        <img src={product.imageUrl} alt={product.name}/>
        <div>
          <h1>{product.name}</h1>
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