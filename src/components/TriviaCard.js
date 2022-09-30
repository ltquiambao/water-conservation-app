import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TriviaCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/4058699/pexels-photo-4058699.jpeg"
        alt="fridge"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          How to save water?
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Keep water in the fridge. This will save you from letting the tap run to get cold water.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}