'use client'

import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import useUserStore from '../_services/store/useUserStore';

const page = () => {
  const userInfo = useUserStore(state => state);

  useEffect(() => {
    console.log(userInfo);
  }, []);

  return (
    <Box component="main">
      <Container>
        <Typography textAlign={"center"}>About page</Typography>
        {
          userInfo.name !== '' ? (
            <Box>
              <Typography>User Name: {userInfo.fullName}</Typography>
            </Box>
          ) : 
          <Typography>Please login to view user information! <Link href='/auth/signin'>Login here</Link></Typography>
        }
      </Container>
    </Box>
  )
}

export default page;