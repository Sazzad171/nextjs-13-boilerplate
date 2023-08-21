import { Box, Container, Grid, Typography } from '@mui/material';
import { LayoutItem } from '../_components/pages/layout/LayoutItem';

export default async function Layout() {
  
  return (
    <Box component={"main"} minHeight={"85vh"}>
      <Container>
        <Typography variant={"h4"} py={2}>All Layouts:</Typography>
        <Grid container>
          <Grid item md={4}>
            <LayoutItem />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
