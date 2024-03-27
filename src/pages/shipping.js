import { useEffect, useState } from 'react';
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

  const handleProceedToPayment = async() => {
   try {
    const response = await fetch('http://localhost:5000/api/shipping-details', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        mobileNumber,
        province,
        city,
        toleName,
        paymentGateway
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add shipping details');
    }

    const data = await response.json();
    console.log(data)
    const shippingDetailsId = data.shippingDetails.id; // Assuming the API returns the ID of the newly created shipping details
 // Redirect to the appropriate payment page based on the selected payment gateway
 if (paymentGateway === 'esewa') {
  router.push('/paymentesewa');
} else {
  // Redirect to Cash on Delivery page or any other payment page
  router.push('/orderconfirmation');
}
   } catch (error) {
    console.error('Error adding shipping details:', error);
    // Handle error (e.g., show error message to the user)
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
