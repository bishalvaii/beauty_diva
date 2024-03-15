import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import aboutus from "../images/aboutus.png"

import sammu from "../images/sammu.png"

const AboutUsPage = () => {
    return (
        <>
            <Box bgcolor="#ffff" p={4}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} mt={6}>
                        <Box display="flex" flexDirection="column" justifyContent="center"  alignItems="centre">
                            <Typography variant="h2" gutterBottom marginTop={15}>
                                ABOUT US
                            </Typography>
                            <Typography variant="h5" gutterBottom marginTop={5}>
                                Beauty Diva is dismantling unrealistic ideals
                                of perfection.

                                Our makeup is designed to enhance your
                                natural beauty and embrace what makes you
                                unique. Beauty Diva is all about
                                celebrating your authentic self,
                                not conforming to someone else's standards.
                            </Typography>

                        </Box>
                    </Grid>
                    {/* Left side with image */}
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center">
                            <Image src={aboutus} alt="Sample Image" width={500} height={600} />
                        </Box>
                    </Grid>

                    {/* Right side with title, description, and button */}

                </Grid>
            </Box>
            <Box>
                <Box display="flex" alignItems="center" mt={8} ml={0} sx={{ bgcolor: "#DEC5B7" }}>
                    {/* Left side: Circular image */}
                    <Box borderRadius="50%" overflow="hidden" width={250} height={250} marginRight={4}>
                        <Image src={sammu} alt="Circular Image" width={250} height={250} />
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
            </Box>
        </>
    )
}

export default AboutUsPage