import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../../redux/productSlice';
import './product-card.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(selectProduct(product));
    navigate(`/product/${product.id}`);
  };
  

  return (
    <div onClick={handleClick} className='product-card' >
      <img src={product.imageUrl + "?random=" + product.id} alt={product.name}/>
      <div className='product-info'>
        <span className='product-info-title' >{product.name}</span>
        <span className='product-info-price' >${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;