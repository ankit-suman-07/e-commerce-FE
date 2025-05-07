import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../../redux/productSlice';
import './product-card.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectProduct(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <div onClick={handleClick} className='product-card' >
      <img src={product.imageUrl} alt={product.name}/>
      <div className='product-info'>
        <span className='product-info-title' >{product.name}</span>
        <span className='product-info-price' >${product.price}</span>
      </div>
      {/* <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p> */}
      {/* <div className='invisible-desc' >
        {product.description}
      </div> */}
    </div>
  );
};

export default ProductCard;