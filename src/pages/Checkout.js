import React from 'react';
import CheckoutProduct from '../CheckoutProduct';
import Subtotal from '../Subtotal';
import { useStateValue } from '../StateProvider';
import { Box, Typography } from '@mui/material';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: 600,
        backgroundColor: '#000000',
        paddingTop: 10,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: { xs: 'flex-start', md: 'flex-start' },
        height: '100%',
      }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '100%',
        }}>
        {/* <img
            src='images/ad_electric200px.jpg'
            alt='Checkout Ad'
            style={{
              width: '100%',
              marginBottom: '10px',
              objectFit: 'cover',
            }}
          /> */}
        <Box
          sx={{
            padding: '20px',
            backgroundColor: '#fff',
          }}>
          <Typography variant='h5' style={{ marginBottom: '10px' }}>
            Your Shopping Basket
          </Typography>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', md: '300px' },
          marginLeft: { xs: '0', md: '20px' },
          marginTop: { xs: '20px', md: '0' },
        }}>
        <Subtotal />
      </Box>
    </Box>
  );
}

export default Checkout;
