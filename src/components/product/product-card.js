import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../redux/productSlice';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectProduct(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="border rounded p-4 shadow cursor-pointer" onClick={handleClick}>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductCard;