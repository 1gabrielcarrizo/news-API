import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Box padding={1} sx={{
      background: '#1976D2'
    }}>
    <footer>
      <Typography align='center' marginY={5} component="h6" variant='h5'>
        Copyright &copy; {year}. All rights reserved. <Link color={'#000'} href="https://www.linkedin.com/in/1gabrielcarrizo/" target='_blank' sx={{
          textDecoration: 'none'
        }}>Gabriel</Link>
      </Typography>
    </footer>
    </Box>
  )
}

export default Footer