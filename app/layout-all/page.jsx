import { Box, Container, Grid, Typography } from '@mui/material';
import { LayoutItem } from '../_components/pages/layout/LayoutItem';
import { getAllLayouts } from '../_services/axios/AllServerSideApi';

export default async function Layout() {

  // get all layouts data
  try {
    var layoutsData = await getAllLayouts();
  } catch (error) {
    throw new Error(error);
  }
  
  return (
    <Box component={"main"} minHeight={"85vh"} pb={4}>
      <Container>
        <Typography variant={"h4"} py={2}>All Layouts:</Typography>
        <Grid container spacing={2}>
          {
            layoutsData.data.data.map((item, i) => (
              <Grid item md={4} key={i}>
                <LayoutItem item={item} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  )
}
