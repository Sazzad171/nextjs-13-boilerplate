"use client"

import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Signin = () => {
  const [formData, setFormData] = useState({});

  // onsubmit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false // page won't reload
    });

    // if valid credentials then login
    if (res.ok && res.error === null) { 
      redirect("/");
    }
  }

  return (
    <Box component={"main"} minHeight={"85vh"} pt={"200px"}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={5}>
            <Box borderRadius={4} border={1} borderColor={"#ccc"} p={4}>
              <Typography variant={"h5"} textAlign={"center"} mb={2}>Sign in to Nextjs Auth App</Typography>
              <Box component={"form"} onSubmit={(e) => handleFormSubmit(e)}>
                <Box mb={2}>
                  <TextField
                    type='email'
                    id='email'
                    fullWidth
                    required
                    label="Email"
                    name='email'
                    onChange={(e) => {setFormData({...formData, email: e.target.value})}}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type='password'
                    id='password'
                    fullWidth
                    required
                    label="password"
                    name='password'
                    onChange={(e) => {setFormData({...formData, password: e.target.value})}}
                  />
                </Box>
                <Button fullWidth variant="contained" sx={{background: "#aaa !important"}} type='submit'>Submit</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Signin;