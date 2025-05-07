import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../../redux/productSlice';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectProduct(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <div onClick={handleClick}>
      <img src={product.imageUrl} alt={product.name}/>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductCard;