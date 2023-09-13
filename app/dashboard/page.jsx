'use client'

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { getCurrentUser } from '../_services/axios/AllServerSideApi';
import useUserStore from '../_services/store/useUserStore';

const Dashboard = () => {

  // useEffect(() => {
  //   const userRes = getCurrentUser();
  //   console.log("user:", userRes.data);
  // }, []);

  const setUserData = useUserStore(state => state.setUserInfo);

  const fetchData = async () => {
    const userRes = await getCurrentUser();
    console.log("user:", userRes.data);

    // set user data to global state
    setUserData(userRes.data);
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