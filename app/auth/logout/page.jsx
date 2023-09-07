"use client"

import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const signoutApp = async () => {
      try {
        await signOut({
          redirect: false
        });
    
        router.push('/auth/signin');
      }
      catch (err) {
        console.log(err);
      }
    }
    signoutApp();
  }, []);

  return (
    <Box component={"main"} minHeight={"85vh"} pt={"200px"}>
      <Container>
        <Typography textAlign={"center"}>Logging Out...</Typography>
      </Container>
    </Box>
  )
}

export default Logout;