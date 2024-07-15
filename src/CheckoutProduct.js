import React from 'react';
import { useStateValue } from './StateProvider';
import { Button, Typography, Box } from '@mui/material';

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <Box style={{ display: 'flex', marginBottom: '20px' }}>
      <img
        src={image}
        alt={title}
        style={{
          width: '180px',
          height: '180px',
          objectFit: 'contain',
        }}
      />
      <Box
        style={{
          paddingLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='body2'>
          <small>$</small>
          <strong>{price}</strong>
        </Typography>
        <Box style={{ display: 'flex' }}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i} style={{ margin: 0 }}>
                ⭐
              </p>
            ))}
        </Box>
        <Button
          variant='contained'
          color='secondary'
          onClick={removeFromBasket}
          style={{ marginTop: '10px' }}>
          Remove from Basket
        </Button>
      </Box>
    </Box>
  );
}

export default CheckoutProduct;
