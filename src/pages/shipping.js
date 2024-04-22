import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShippingPage = () => {
  const router = useRouter();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentGateway, setPaymentGateway] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [toleName, setToleName] = useState('');
  const [address, setAddress] = useState('');
  const [formError, setFormError] = useState('');



  const handlePaymentGatewayChange = (event) => {
    setPaymentGateway(event.target.value);
  };

  const handleProceedToPayment = async () => {
    if (!fullName || !mobileNumber || !address) {
      setFormError('Please fill out all required fields');
      return;
    }

    try {
      const orderId = localStorage.getItem('orderId');
       localStorage.setItem('orderId', orderId); 
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
          paymentGateway,
          address,
          orderId
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add shipping details');
      }

      const data = await response.json();
      console.log(data)
      const shippingDetailsId = data.shippingDetails.id;

      // Redirect to the appropriate payment page based on the selected payment gateway
      if (paymentGateway === 'esewa') {
        setTimeout(() => router.push('/paymentesewa'), 2000);
      } else {
        setTimeout(() => router.push('/orderconfirmation'), 2000);
      }

      // Show success toast
      toast.success('Shipping details added successfully!');
    } catch (error) {
      console.error('Error adding shipping details:', error);
      // Show error toast
      toast.error('Failed to add shipping details');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Shipping Details
      </Typography>
      {formError && <Typography color="error">{formError}</Typography>}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            fullWidth
            required
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            required
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
          <FormControl fullWidth required>
            <Typography sx={{ fontWeight: 'bold' }}>Select payment gateway</Typography>
            <Select
              labelId="payment-gateway-label"
              value={paymentGateway}
              onChange={handlePaymentGatewayChange}
              sx={{ mt: 2 }}
            >
              <MenuItem value="esewa">eSewa</MenuItem>
              <MenuItem value="cash-on-delivery">Cash on Delivery</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleProceedToPayment}>
            Place order
          </Button>
        </Grid>
      </Grid>

      {/* Toast Container */}
      <ToastContainer />
    </Box>
  );
};

export default ShippingPage;
