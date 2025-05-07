import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './product-details.css'; // Assuming you have some CSS for styling

const ProductDetails = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const navigate = useNavigate();

  const [image, setImage] = useState(product.imageUrl || '');

  if (!product) return <p>No product selected.</p>;

  return (
    <div className='product-page' >
      <button onClick={() => navigate('/')} className='back-btn' >Back to Search</button>
      <div className='product-page-image' >
        <div className='product-image-main' >
          <img src={image} alt={product.name}/>
        </div>
        <div className='product-image-secondary' >
          <img src={image} alt={product.name} onClick={() => setImage(image)} />
          <img src={image} alt={product.name} onClick={() => setImage(image)} />
          <img src={image} alt={product.name} onClick={() => setImage(image)} />
          <img src={image} alt={product.name} onClick={() => setImage(image)} />
        </div>
      </div>
      
      <div className='product-page-details' >
        
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