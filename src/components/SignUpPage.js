import { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import Image from 'next/image';
import signupimg from "../images/signupimg.png";
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const SignupPage = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const [formData, setFormData] = useState({
    fullName: '',
    contactNo: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make POST request to signup endpoint
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Parse response JSON
      const data = await response.json();
  
      // Check if signup was successful
      if (response.ok) {
        console.log(data.message);
         // Save username and password in localStorage
         localStorage.setItem('username', formData.username);
         localStorage.setItem('password', formData.password);
        // Reset form data
        setFormData({
          fullName: '',
          contactNo: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
        });
        // Navigate to the login page
        router.push('/login');
      } else {
        console.error(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Grid container style={{ height: '100vh' }}>
      {/* Left side with image */}
      <Grid item xs={6}>
        <Box display="flex" justifyContent="flex-start" alignItems="center" height="100%">
          <Image
            src={signupimg}
            alt="Signup Image"
            width={680}
            height={600}
          />
        </Box>
      </Grid>
      {/* Right side with signup form */}
      <Grid item xs={6}>
        <Box display="flex" justifyContent="end" alignItems="center" height="100%">
          <Paper elevation={3} style={{ padding: 20, maxWidth: 700 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                name="fullName"
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.fullName}
                onChange={handleChange}
              />
              <TextField
                name="contactNo"
                label="Contact No"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.contactNo}
                onChange={handleChange}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
              />
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: 20 }}>
                Sign Up
              </Button>
            </form>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
