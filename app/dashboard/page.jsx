import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box component="main">
      <Container>
        <Typography textAlign={"center"}>Dashboard page protected</Typography>
      </Container>
    </Box>
  )
}

export default Dashboard;