import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Image from 'next/image';

const ProductCard = ({ product }) => {
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
        <Button variant="contained" color="primary">
          Add to Bag. ${product.price}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
