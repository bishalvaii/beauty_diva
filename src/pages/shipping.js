import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Box } from '@mui/material';

const ShippingPage = () => {
  const router = useRouter();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentGateway, setPaymentGateway] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [toleName, setToleName] = useState('');

  const handleAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

  const handlePaymentGatewayChange = (event) => {
    setPaymentGateway(event.target.value);
  };

  const handleProceedToPayment = () => {
    // Here you can handle the logic to proceed to payment based on the selected payment gateway
    // For example, you can redirect to a specific URL for each payment gateway
    if (paymentGateway === 'esewa') {
      // Redirect to eSewa payment page
      router.push('/paymentesewa');
    }
     else {
      // Redirect to Cash on Delivery page
      router.push('/orderconfirmation');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Shipping Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Address"
            value={deliveryAddress}
            onChange={handleAddressChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Tole Name"
            value={toleName}
            onChange={(e) => setToleName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
          <Typography sx={{fontWeight: 'bold'}}>Select payment gateway</Typography>
            <Select
              labelId="payment-gateway-label"
              value={paymentGateway}
              onChange={handlePaymentGatewayChange}
              sx={{mt: 2}}
            >
              <MenuItem value="esewa">eSewa</MenuItem>
             
              <MenuItem value="cash-on-delivery">Cash on Delivery</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleProceedToPayment} >
            Place order
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShippingPage;
