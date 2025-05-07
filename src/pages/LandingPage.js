import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from '../components/product/product-card';
import Spinner from '../components/spinner/spinner';
import toast from 'react-hot-toast';

const LandingPage = () => {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts(search));
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        toast.error('Failed to fetch categories');
      }
    };
    fetchCategories();
  }, [search, dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className='search-input'
      />
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className='category-select' >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
        </select>
      {loading ? (
        <Spinner />
      ) : (
        <div className='product-list'>
          {products.filter((product) => 
            selectedCategory === '' || product.category === selectedCategory
        ).map((product) => (
          <ProductCard key={product.id} product={product} />
      ))}

        </div>
      )}
    </div>
  );
};

export default LandingPage;