import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import signupimg from "../images/signupimg.png";
import Image from 'next/image';


const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform validation here if needed
    // For now, just log the form data
   try {
    const username = localStorage.getItem('username');
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Username': username // Include the username in the request headers
        },
        body: JSON.stringify({
          username: formData.username, // Include the username in the request body
          password: formData.password,
        })
      })

      const data = await response.json()
      console.log(data.user.isAdmin)
      if(response.ok) {
        setFormData({
          username: '',
          password: ''
        })
        localStorage.setItem('Username', formData.username);
        if (data.user.isAdmin) {
          router.push('/admin');
        } else {

          router.push('/dashboard');
        }
      }
     else {
      alert(data.error || 'Login failed')
    }
  } catch(error) {
        console.error('An error occured:', error)
        alert('Invalid credentials!')

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
              Login 
            </Typography>
            <form onSubmit={handleSubmit}>
              
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
             
              
              <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: 20 }}>
                Login 
              </Button>
            </form>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
