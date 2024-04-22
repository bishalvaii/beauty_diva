import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import signupimg from "../images/signupimg.png";
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    // Validate form fields
    if (!formData.username || !formData.password) {
      setError('Please enter both username and password');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        })
      })

      const data = await response.json();
      if (response.ok) {
        setFormData({ username: '', password: '' });
        localStorage.setItem('Username', formData.username);
        if (data.user.isAdmin) {
          setTimeout(() => router.push('/admin'), 2000); // Navigate after 2 seconds
        } else {
          setTimeout(() => router.push('/dashboard'), 2000); // Navigate after 2 seconds
        }
        toast.success('Login Successful')
      } else {
        setError(data.error || 'Login failed');
      toast.error("Login Failed! Check your credentials")
      }
    } catch(error) {
      console.error('An error occurred:', error);
      setError('Invalid credentials!');
    }
  };

  const navigateToSignup = () => {
    router.push('/signup');
  };

  return (
    <>
       <ToastContainer /> 
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
              {error && <Typography color="error" variant="subtitle2" style={{ marginBottom: 10 }}>{error}</Typography>}
              <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: 20 }}>
                Login 
              </Button>
              <Typography >Don't have an account? <Button sx={{ color: 'black', ml: 35}}onClick={navigateToSignup}>Sign Up!</Button></Typography>
            </form>
            
          </Paper>
        </Box>
      </Grid>
    </Grid>
 
      </>
  );
};

export default LoginPage;
