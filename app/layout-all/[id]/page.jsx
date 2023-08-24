import React from 'react';
import { getSingleLayout } from '@/app/_services/axios/AllServerSideApi';

const SingleLayout = async ({ params }) => {

  // get single layout data
  await getSingleLayout(params.id).then(res => {
    console.log(res);
  }).catch (error => {
    console.log(error);
  });
  
  return (
    <div>page</div>
  )
}

export default SingleLayout;