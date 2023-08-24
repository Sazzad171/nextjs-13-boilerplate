"use client"

import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Formik } from 'formik';
import * as Yup from 'yup'

const Signin = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  // validate form
  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please input valid email address")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(8, 'Password must be at least 8 characters')
  });

  // onsubmit form
  const handleFormSubmit = async (values, setSubmitting) => {
    try {
      // trigger nextauth signin function
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false // page won't reload
      });

      setSubmitting(false);

      // if valid credentials then login
      if (res.ok && res.error === null) {
        console.log("login status i", res);
        router.push("/dashboard");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // when logged in user then redirect to dashboard
  useEffect(() => {
    if (session?.user) {
      console.log("login status", status);
      console.log("session", session);
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <Box component={"main"} minHeight={"85vh"} pt={"200px"}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={5}>
            <Box borderRadius={4} border={1} borderColor={"#ccc"} p={4}>
              <Typography variant={"h5"} textAlign={"center"} mb={2}>Sign in to Nextjs Auth App</Typography>

              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={signInSchema}
                onSubmit={(values, { setSubmitting }) => handleFormSubmit(values, setSubmitting)}
              >
                {
                  ({
                    values,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    errors,
                    touched
                  }) => (
                    <Box component={"form"} onSubmit={handleSubmit}>
                      <Box mb={2}>
                        <TextField
                          type='email'
                          id='email'
                          fullWidth
                          label="Email"
                          name='email'
                          value={values.email}
                          onChange={handleChange}
                        />
                        {
                          errors.email && touched.email ? 
                            <Typography color="red">{errors.email}</Typography> :
                            ''
                        }
                      </Box>
                      <Box mb={2}>
                        <TextField
                          type='password'
                          id='password'
                          fullWidth
                          label="password"
                          name='password'
                          value={values.password}
                          onChange={handleChange}
                        />
                        {
                          errors.password && touched.password ? 
                            <Typography color="red">{errors.password}</Typography> :
                            ''
                        }
                      </Box>
                      <Button fullWidth variant="contained" sx={{background: "#aaa !important"}} type='submit' disabled={isSubmitting}>Submit</Button>
                    </Box>
                  )
                }
              </Formik>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Signin;