import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const paymentesewa = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{fontFamily: 'Poppins', fontSize: '50px', fontWeight: 500}} variant="h4" gutterBottom>
        Esewa integration will be done soon!
      </Typography>
      <Typography sx={{fontFamily: 'Poppins', fontSize: '30px', fontWeight: 300}}variant="body1">
        For now please you cash on delivery as your payment method
      </Typography>
      {/* You can add more details or customize this component further based on your requirements */}
    </Box>
  )
}

export default paymentesewa