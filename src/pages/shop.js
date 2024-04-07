// pages/shop.js

import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import lipstick from "../../public/lipstick.png"
import { Box } from '@mui/system';
import { Router, useRouter } from 'next/router';


const productsPerPage = 9

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cartCount, setCartCount] = useState(0);
const [cartItems, setCartItems] = useState([])
const [products, setProducts] = useState([])
const router = useRouter()

  const handlePrevPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const getPageProducts = () => {
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      return products.slice(startIndex, endIndex);
  };

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    // Update the cart count
    setCartCount(cartCount + 1);
  }

const calculateTotalAmount = () => {
  return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);

}

const handleCheckout = () => {
  const queryParams = new URLSearchParams()
  // ADD selected products as query params
  cartItems.forEach((item, index) => {
    queryParams.append(`product${index +1}`, JSON.stringify(item))
  })

  queryParams.append('totalAmount', calculateTotalAmount())

  router.push({
    pathname: '/checkout',
    search: `?${queryParams.toString()}`
  })
}

useEffect(() => {
  fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching products:', error))
}, [])
const totalPages = Math.ceil(products.length / productsPerPage);

console.log(products)

  return (
      <div className="shop">
          <Box sx={{ position: 'fixed', top: 0, right: 0, zIndex: 9999, m: 2 }}>
          <Button variant="text" onClick={handleCheckout}>
    {/* Wrap icon inside a button */}
    <ShoppingCartIcon sx={{ fontSize: '2.5rem' }} />
    {/* Display cart count */}
    <Typography
        variant="body1"
        sx={{
            position: 'absolute',
            top: -6,
            right: -6,
            borderRadius: '50%',
            width: 20,
            height: 20,
            backgroundColor: 'red',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.8rem',
        }}
    >
        {cartCount || '0'}
    </Typography>
</Button>

          </Box>

          <Typography variant="h3" sx={{ mt: 4 }}>Shop</Typography>

          <Grid container spacing={3}>
              {products.map((product) => (
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                      <ProductCard product={product} addToCart={addToCart} />
                  </Grid>
              ))}
          </Grid>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Button variant='outlined' disabled={currentPage === 1} onClick={handlePrevPage}>Prev</Button>
              {Array.from({ length: totalPages }).map((_, index) => (
                  <Button key={index + 1} variant={currentPage === index + 1 ? "contained" : "outlined"} onClick={() => goToPage(index + 1)}>{index + 1}</Button>
              ))}
              <Button variant='outlined' disabled={currentPage === totalPages} onClick={handleNextPage}>Next</Button>
          </div>
      </div>
  );
};

export default Shop;