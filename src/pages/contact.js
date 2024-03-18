import React from 'react'
import { AppBar, Avatar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const contact = () => {
  const router = useRouter();
  const navigateToShop = () => {
    router.push('/shop');
  };

  const navigateToAboutUs = () => {
    router.push('/aboutus')
  }

  const navigateToContact = () => {
    router.push('/contact')
  } 
  const navigateToHome = () => {
    router.push('/dashboard')
  }
  return (
    <>
    <AppBar position="static" sx={{ bgcolor: "#DEC5B7" }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left section */}
        <Box style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="div">
                Home
            </Typography>
            <Button onClick={navigateToShop}>
            <Typography variant="h6" component="div">
                Shop
            </Typography>
            </Button>
            <Button onClick={navigateToAboutUs}>
            <Typography variant="h6" component="div">
                About Us
            </Typography>
            </Button>
            <Typography variant="h6" component="div" onClick={navigateToContact}>
                Contact Us
            </Typography>
        </Box>
        {/* Center section */}
        <Button onClick={navigateToHome}>
        <Typography variant="h6" component="div" sx={{ mr: 25 }}>
            Beauty Diva
        </Typography>
        </Button>
        {/* Right section */}
        <Box display="flex" alignItems="center">
            <IconButton color="inherit">
                <SearchIcon />
            </IconButton>
            <Avatar />
            <IconButton color="inherit">
                <ShoppingCartIcon />
            </IconButton>
        </Box>
    </Toolbar>
</AppBar>

<Box  mt={10} >
                

                {/* Right side: Heading and Description */}
                <Box ml={5} mb={10} maxWidth={700}>
                    <Typography variant="h4"  sx={{fontWeight: 400, fontSize: '50px'}}gutterBottom>
                     Contact us 
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 300, fontSize: '20px'}} >
                    Need help? Our Beauty Beauty Diva Support Team is here for you!
                    <br />
                    <br />
                    Chat with us live or call +977 9840006781, Monday–Friday, 7am–4pm PT. 
<br />
<br />
You can also reach us at hello@beautydiva.com.
                       

                    </Typography> 

                </Box>
            </Box>
            </>

  )
}

export default contact