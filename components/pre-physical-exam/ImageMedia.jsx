import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="400"
        alt="green iguana"
        image="https://i.imgur.com/uXlCmgT.gif"
      />
    </Card>
  );
}