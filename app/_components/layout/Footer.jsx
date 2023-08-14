import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" bgcolor={"#eee"} py={2}>
      <Container>
        <Typography textAlign={'center'}>Copyright &copy; {new Date().getFullYear()} Nextjs Boilerplate</Typography>
      </Container>
    </Box>
  )
}

export default Footer;