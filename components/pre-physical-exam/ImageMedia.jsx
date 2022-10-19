import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ImgMediaCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="https://i.imgur.com/uXlCmgT.gif"
      />
      <CardActions>
        <Stack spacing={2} direction="row-reverse">
            <Button size="small" variant="contained">Upload</Button>
        </Stack>
      </CardActions>
    </Card>
  );
}