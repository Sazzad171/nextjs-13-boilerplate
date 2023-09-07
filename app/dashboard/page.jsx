'use client'

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { getCurrentUser } from '../_services/axios/AllServerSideApi';

const Dashboard = () => {

  // useEffect(() => {
  //   const userRes = getCurrentUser();
  //   console.log("user:", userRes.data);
  // }, []);

  const fetchData = async () => {
    const userRes = await getCurrentUser();
    console.log("user:", userRes.data);
  }

  return (
    <Box component="main">
      <Container>
        <Typography textAlign={"center"}>Dashboard page protected</Typography>
        <button onClick={fetchData}>fetch data</button>
      </Container>
    </Box>
  )
}

export default Dashboard;