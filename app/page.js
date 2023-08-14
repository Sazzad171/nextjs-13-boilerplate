import { Box, Container, Typography } from '@mui/material';
import { getLayoutCategories } from './_services/axios/AllServerSideApi';

export default async function Home() {
  
  await getLayoutCategories().then(res => {
    // console.log(res);
  }).catch(err => {
    // console.log(err.message);
  })
  
  return (
    <Box component={"main"} minHeight={"85vh"}>
      <Container>
        <Typography>home page</Typography>
      </Container>
    </Box>
  )
}
