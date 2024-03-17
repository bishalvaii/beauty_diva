import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Image from 'next/image';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function with the product as an argument
  };
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem auto' }}>
      <div sx={{ margin: 'auto', marginTop: '1rem' }}>
        <Image src={product.image} alt={product.name} width={300} height={350} />
      </div>
      <CardContent>
        <Typography variant='h4' gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" color='text.secondary' gutterBottom>
          {product.description}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
          Add to Bag. ${product.price}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
