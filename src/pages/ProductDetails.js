import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/spinner/spinner';
import './product-details.css';

const ProductDetails = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const navigate = useNavigate();
  const [image, setImage] = useState(product.imageUrl || '');
  const [loading, setLoading] = useState(true);

  // Simulation of network latency for loading state
  // This is just for demonstration purposes.
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  

  if (!product) return <p>No product selected.</p>;
  if (loading) return <div className="product-loading"><Spinner /></div>;

  return (
    <div className='product-page' >
      <button onClick={() => navigate('/')} className='back-btn' >Back to Search</button>
      <div className='product-page-image' >
        <div className='product-image-main' >
          <img src={image+ "?random=" + product.id} alt={product.name}/>
        </div>
        <div className='product-image-secondary' >
          <img src="https://picsum.photos/id/237/500" alt={product.name} onClick={() => setImage("https://picsum.photos/id/237/500")} />
          <img src="https://picsum.photos/id/238/500" alt={product.name} onClick={() => setImage("https://picsum.photos/id/238/500")} />
          <img src="https://picsum.photos/id/239/500" alt={product.name} onClick={() => setImage("https://picsum.photos/id/239/500")} />
          <img src="https://picsum.photos/id/240/500" alt={product.name} onClick={() => setImage("https://picsum.photos/id/240/500")} />
        </div>
      </div>
      
      <div className='product-page-details' >
        
        <div className='product-details-inner' >
          <div className='prod-name' >{product.name}</div>
          <span className='prod-brand' >by {product.brand}</span>
          <span className='prod-price' >${product.price}</span>
          <div className='buy-btn' >
            <button className='add-to-cart' >Add To Cart</button>
            <button className='buy-now' >Buy Now</button>
          </div>
          <span className='prod-cat' >Category: {product.category}</span>
          <div className='prod-sub-desc' >{product.description}</div>
          <div className='prod-desc' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
          <div className='prod-desc' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;