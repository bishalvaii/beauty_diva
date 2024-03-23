import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function with the product as an argument
  };
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem auto' }}>
      <Box sx={{ margin: 'auto', marginTop: '1rem'}}>
      <div className="relative">

        <Image  src={product.image.url} alt={product.name} width={product.image.width} height={product.image.height} />
    </div>
      </Box>  
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
