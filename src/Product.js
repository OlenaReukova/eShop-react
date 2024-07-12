import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  CardActions,
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
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component='img'
        width={'100%'}
        height='400'
        image={image}
        alt={title}
        sx={{ objectFit: 'contain' }}
      />
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
      <CardActions>
        <Button variant='contained' color='primary' onClick={addToBasket}>
          Add to basket
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
