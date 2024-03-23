import { AppBar, Avatar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import heroimg from '../images/heroimg.png';
import veganImg from '../images/vegan.png'
import cruelty from "../images/cruelty.png"
import recycle from "../images/recycle.png"
import clean from "../images/clean.png"
import women from "../images/women.png"
// import lipstick from "../images/lipstick.png"
import lipstick1 from "../images/lipstick1.png"
import lipstick2 from "../images/lipstick2.png"
import lipstick3 from "../images/lipstick3.png"
import girls from "../images/girls.png"
import girl from "../images/girl.png"
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';
import { useRouter } from 'next/router';



const Dashboard = () => {
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

  const username = localStorage.getItem('username')
      return (
        <>
            {/* Navbar */}
            <AppBar position="static" sx={{ bgcolor: "#DEC5B7" }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Left section */}
                    <Box style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
                       <Button onClick={navigateToHome}>
                        <Typography variant="h6" component="div">
                            Home
                        </Typography>
                        </Button>
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
                    <Typography variant="h6" component="div" sx={{ mr: 25 }}>
                        Beauty Diva
                    </Typography>
                    {/* Right section */}
                    <Box display="flex" alignItems="center">
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <Avatar />
                       {username}
                        <IconButton color="inherit">
                            <ShoppingCartIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Hero section */}
            <Box position="relative" height={400}>
                <Image
                    src={heroimg}
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                />
                <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
                    <Typography variant="h3" component="h2" gutterBottom>
                        Welcome to Beauty Diva
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Beauty Diva For everyday life.
                    </Typography>
                    <Button variant="contained" style={{ backgroundColor: '#D9D9D9', color: 'black' }} onClick={navigateToShop}>
                        Shop Now
                    </Button>
                </Box>
            </Box>

            {/* Description text */}
            <>
                <Box my={4} textAlign="center">
                    <Typography variant="h4" component="h3" gutterBottom>
                        Beauty Diva
                    </Typography>
                    <Typography variant="body1" component="p">
                        Simple, clean, easy to use essentials
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between" my={4} mx={30}>
                    {/* Text with images */}
                    <Box display="flex" flexDirection="column" alignItems="center" >
                        <Typography variant="body1" component="p">
                            Vegan
                        </Typography>
                        <Image src={veganImg} alt="Vegan Image" width={50} height={50} />
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="body1" component="p">
                            Cruelty-Free
                        </Typography>
                        <Image src={cruelty} alt="Cruelty-Free Image" width={50} height={50} />
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="body1" component="p">
                            Clean Beauty
                        </Typography>
                        <Image src={clean} alt="Clean Beauty Image" width={50} height={50} />
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="body1" component="p">
                            Recycle
                        </Typography>
                        <Image src={recycle} alt="Recycle Image" width={50} height={50} />
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="body1" component="p">
                            Women based business
                        </Typography>
                        <Image src={women} alt="Recycle Image" width={50} height={50} />
                    </Box>
                    {/* Add the remaining Box components for other text with images */}
                </Box>
            </>
            <Box display="flex" justifyContent="space-between" mt={8}>
                {/* First image */}
                <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                    <Image src={lipstick1} alt="Image 1" width={300} height={250} />
                    <Typography variant="body1">Lipstick</Typography>
                </Box>
                {/* Second image */}
                <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                    <Image src={lipstick1} alt="Image 2" width={300} height={250} />
                    <Typography variant="body1">Concealer</Typography>
                </Box>
                {/* Third image */}
                <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                    <Image src={lipstick2} alt="Image 3" width={300} height={250} />
                    <Typography variant="body1">Foundation</Typography>
                </Box>
                {/* Fourth image */}
                <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                    <Image src={lipstick3} alt="Image 4" width={300} height={250} />
                    <Typography variant="body1">Lip gloss</Typography>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" mt={8} ml={6}>
                {/* Left side: Circular image */}
                <Box borderRadius="50%" overflow="hidden" width={250} height={250} marginRight={4}>
                    <Image src={girls} alt="Circular Image" width={250} height={250} />
                </Box>

                {/* Right side: Heading and Description */}
                <Box ml={40} mb={10} maxWidth={400}>
                    <Typography variant="h4" gutterBottom>
                        What makes us rare
                    </Typography>
                    <Typography variant="body1" >
                        We're creating a secure, inviting environment in beauty and beyond.

                        Our makeup is designed for a positive experience, embracing your
                        uniqueness. Plus, it's entirely vegan and cruelty-free.

                    </Typography>
                </Box>
            </Box>
            <Box sx={{mt: 8, ml: 4} }>
      <Typography variant="h4" gutterBottom>
        Reviews of People
      </Typography>

      <Box display="flex" justifyContent="space-between" my={4}>
        {/* First review */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={girls} alt="Avatar 1" width={100} height={100} />
          <Typography variant="h6" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vel hendrerit urna."
          </Typography>
        </Box>

        {/* Second review */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={girls} alt="Avatar 2" width={100} height={100} />
          <Typography variant="h6" gutterBottom>
            Jane Smith
          </Typography>
          <Typography variant="body1">
            "Sed et justo vitae eros lacinia dignissim. Fusce dignissim ligula
            vitae orci tempus, ac lobortis arcu porta."
          </Typography>
        </Box>

        {/* Third review */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={girls} alt="Avatar 3" width={100} height={100} />
          <Typography variant="h6" gutterBottom>
            Alex Johnson
          </Typography>
          <Typography variant="body1">
            "Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas."
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box bgcolor="#D9D9D9" p={4}>
      <Grid container spacing={4}>
        {/* Left side with image */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <Image src={girl} alt="Sample Image" width={400} height={300} />
          </Box>
        </Grid>

        {/* Right side with title, description, and button */}
        <Grid item xs={12} md={6} mt={6}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h4" gutterBottom>
            FALL MAKEUP COLLECTION
            </Typography>
            <Typography variant="body1" gutterBottom>
            "Introducing our latest makeup collection—a symphony of colors and
 textures. Elevate your beauty routine with these exquisite, trend
setting essentials."            </Typography>
            <Button variant="contained" color="primary">
              Shop the collection
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>

    <Box bgcolor="#DEC5B7" py={4} display="flex" justifyContent='space-around'>
      <Box textAlign="center" mb={2}>
        <Typography variant="h5" gutterBottom>
          About the Shop
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Nullam scelerisque<br />
          aliquam nunc, eget aliquam est congue eu.
        </Typography>
      </Box>

      <Box textAlign="center" mb={2}>
        <Typography variant="h5" gutterBottom>
          Main Menu
        </Typography>
        <Typography variant="body1">
           Home
          <br />
           Products
          <br />
           Services
          <br />
           Contact Us
        </Typography>
      </Box>

      <Box textAlign="center">
        <Typography variant="h5" gutterBottom>
          Shop
        </Typography>
        <Typography variant="body1">
          Address: 1234 Street, City, Country
          <br />
          Phone: +123 456 789
          <br />
          Email: info@example.com
        </Typography>
      </Box>
      
    </Box>
    <Box position="absolute" >
        <IconButton color="inherit" aria-label="facebook">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" aria-label="instagram">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" aria-label="pinterest">
          <Pinterest />
        </IconButton>
      </Box>

        </>
    );
};

export default Dashboard;
