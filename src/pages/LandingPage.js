import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
import toast from 'react-hot-toast';

const LandingPage = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts(search));
  }, [search, dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 border mb-4"
      />
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingPage;