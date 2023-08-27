import React from 'react';
import { getSingleLayout } from '@/app/_services/axios/AllServerSideApi';
import { Box, Chip, Container, Typography } from '@mui/material';
import Image from 'next/image';

const SingleLayout = async ({ params }) => {
  var singleLayoutData = {};

  // get single layout data
  await getSingleLayout(params.id).then(res => {
    singleLayoutData = res?.data;
    console.log(res?.data);
  }).catch (error => {
    console.log(error);
  });
  
  return (
    <Box component={"section"} py={2}>
      <Container>
        <Image src={singleLayoutData?.banner} width={200} height={200} alt='banner' style={{'marginBottom': '8px'}} />
        <Typography>
          {singleLayoutData?.tags?.map((tag, i) => (
            <>
              {tag}{singleLayoutData?.tags?.length !== i+1 ? ', ' : ''}
            </>
          ))}
        </Typography>
        <Typography variant='h5'>{singleLayoutData?.title}</Typography>
        <Typography>{singleLayoutData?.created_times_ago}</Typography>
      </Container>
    </Box>
  )
}

export default SingleLayout;