import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export const LayoutItem = ({
  item
}) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={item.banner}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created: {item.created_times_ago}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={`/layout-all/${item.id}`}>View More</a>
        </Button>
      </CardActions>
    </Card>
  )
}
