import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }} minHeight={600}>
      <Grid container spacing={1} minHeight={600}>
        <Grid
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}></Grid>
        <Card sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia component='img' height='140' image={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <strong>£{price}</strong>
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <Typography key={i} variant='body2' color='text.secondary'>
                    ⭐
                  </Typography>
                ))}
            </Box>
          </CardContent>
          <Button variant='contained' color='primary' onClick={addToBasket}>
            Add to basket
          </Button>
        </Card>
      </Grid>
    </Box>
  );
}

export default Product;
