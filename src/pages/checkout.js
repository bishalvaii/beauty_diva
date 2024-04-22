  import { useRouter } from 'next/router';
  import { useEffect, useState } from 'react';
  import { Button, Typography, TextField, Grid, IconButton, Box } from '@mui/material';
  import AddIcon from '@mui/icons-material/Add';
  import DeleteIcon from '@mui/icons-material/Delete';
  import RemoveIcon from '@mui/icons-material/Remove'
  import { v4 as uuidv4 } from 'uuid';

  import Image from 'next/image';

  const CheckoutPage = () => {
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const shippingCost = 10; // Example shipping cost

    useEffect(() => {
      // Retrieve data from query parameters
      const queryParams = router.query;

      // Extract product data from query parameters
      const productData = Object.keys(queryParams)
        .filter((key) => key.startsWith('product'))
        .map((key) => JSON.parse(queryParams[key]));

      // Calculate total amount
      const total = parseFloat(queryParams.totalAmount || 0);

      // Set the state with retrieved data
      setProducts(productData);
      setTotalAmount(total);
    }, [router.query]);

    const handleQuantityChange = (index, newQuantity) => {
      const newProducts = [...products];
      newProducts[index].quantity = newQuantity;
      setProducts(newProducts);
    };

    const calculateSubtotal = () => {
      return products.reduce((subtotal, product) => {
        return subtotal + parseFloat(product.price) * parseInt(product.quantity || 0);
      }, 0);
    };

    const handleDeleteProduct = (index) => {
      const newProducts = [...products];
      newProducts.splice(index, 1);
      setProducts(newProducts);
    };

    const renderProductImage = (product) => {
      return (
        <Image src={product.image.url} alt={product.name} width={product.image.width} height={product.image.height}style={{ width: '200px', height: '200px', marginRight: '10px' }} />
      );
    };

    const handleCheckout = async () => {
      try {
        const username = localStorage.getItem('Username');
        const orderData = {
          products: products.map(product => ({
            id: product.id,
            quantity: product.quantity
          })),
          totalAmount: calculateSubtotal() + shippingCost,
          username: username
        };
    
        const response = await fetch('http://localhost:5000/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });
    
        const data = await response.json();
        const orderId = data.orderId;
        localStorage.setItem('orderId', orderId); 
        console.log(username);
        if (response.ok) {
          console.log('done');
          // Redirect to the shipping page
          router.push('/shipping');
        } else {
          console.error(data.error || 'Checkout failed');
        }
      } catch (error) {
        console.error('An error occurred during checkout:', error);
      }
    };

    const renderQuantityControl = (index) => {
      return (
        <div>
          <IconButton
            aria-label="reduce quantity"
            onClick={() => handleQuantityChange(index, Math.max(0, parseInt(products[index].quantity || 0) - 1))}
          >
            <RemoveIcon />
          </IconButton>
          <TextField
            type="number"
            value={products[index].quantity}
            onChange={(event) => handleQuantityChange(index, event.target.value)}
          />
          <IconButton
            aria-label="increase quantity"
            onClick={() => handleQuantityChange(index, parseInt(products[index].quantity || 0) + 1)}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            aria-label="delete product"
            onClick={() => handleDeleteProduct(index)}
            style={{color: "red"}}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      );
    };

    return (
      <div style={{ padding: '20px' , display: 'flex'}}>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>
        <Grid container sx={{ mt: 4 }} spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} key={index}>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '60px' }}>
                {renderProductImage(product)}
                <div style={{ marginLeft: '60px' }}>
                  <Typography variant="h5" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1">Price: ${product.price}</Typography>
                  {renderQuantityControl(index)}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ bgcolor: 'grey', p: 2, mt: 25,mr: 30, width: '30%', height: '30%' }}>
          <Typography variant="h5" style={{ marginTop: '20px' }}>
            Subtotal: ${calculateSubtotal()}
          </Typography>
          <Typography variant="body1">Shipping Cost: ${shippingCost}</Typography>
          <Typography variant="h5" style={{ marginTop: '10px' }}>
            Total Amount: ${calculateSubtotal() + shippingCost}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCheckout} style={{ marginTop: '20px' }}>
            Proceed to Payment
          </Button>
        </Box>
      </div>
    );
  };

  export default CheckoutPage;
