import { Box, Container, Typography } from '@mui/material';
import { getLayoutCategories } from './_services/axios/AllServerSideApi';
import { authOptions } from './utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {

  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/api/auth/signin");
  // }
  
  await getLayoutCategories().then(res => {
    // console.log(res);
  }).catch(err => {
    // console.log(err.message);
  });
  
  return (
    <Box component={"main"} minHeight={"85vh"}>
      <Container>
        <Typography>home page public</Typography>
      </Container>
    </Box>
  )
}
