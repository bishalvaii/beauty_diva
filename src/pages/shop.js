// pages/shop.js

import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import lipstick from "../../public/lipstick.png"

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: '28',
    image: lipstick,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: '28',
    image: lipstick,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '28',
    image: lipstick,
  },
  {
    id: 4,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: '28',
    image: lipstick,
  },
  {
    id: 5,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: '28',
    image: lipstick,
  },
  {
    id: 6,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '28',
    image: lipstick,
  },
  {
    id: 7,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: '28',
    image: lipstick,
  },
  {
    id: 8,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: '28',
    image: lipstick,
  },
  {
    id: 9,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '28',
    image: lipstick,
  },
  {
    id: 10,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: '28',
    image: lipstick,
  },
  {
    id: 11,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: '28',
    image: lipstick,
  },
  {
    id: 12,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '28',
    image: lipstick,
  },
  // Add more products as needed
];

const productsPerPage = 9

const Shop = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(products.length / productsPerPage)

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const getPageProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage
        return products.slice(startIndex, endIndex)
    }
    
  return (
    <div className="shop">
      <Typography variant="h3">Shop</Typography>
      <Grid container spacing={3}>
        {getPageProducts().map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />   
          </Grid>
        ))}
      </Grid>
      <div style={{textAlign: 'center', marginTop: '1rem'}}>
        <Button variant='outlined' disabled={currentPage === 1} onClick={handlePrevPage}>
            Prev
        </Button>
        {Array.from({ length: totalPages}).map((_,index) => (
            <Button 
                key={index + 1}
                variant={currentPage === index + 1 ? "contained": "outlined"}
                onClick={() => goToPage(index + 1)}
                >
                    {index + 1}
                </Button>

        ))}
        <Button variant='outlined' disabled={currentPage === totalPages}
        onClick={handleNextPage}>
            Next
        </Button>
      </div>
    </div>
  );
};

export default Shop;
