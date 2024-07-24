import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Models() {
  return (
    <Box
      className='models'
      sx={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Box
        className='models__container'
        sx={{
          position: 'absolut',
          backgroundColor: 'black',
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
        }}>
        <Box
          component='img'
          src='images/motorbike.jpg'
          alt='Home Image'
          sx={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
          }}
          className='models__image'
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: { lg: '50%', xs: '50%' },
          left: { lg: '25%', xs: '50%' },
          transform: 'translate(-50%, -50%)',
          color: 'white',
          px: 2,
          width: { lg: '50%', xs: '100%' },
        }}>
        <Typography
          variant='h1'
          sx={{
            texttransform: 'uppercase',
            fontWeight: '1000',
            textAlign: { lg: 'left', sm: 'center' },
            fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3rem', lg: '4rem' },
          }}>
          EXPLORE THE MOTORCYCLES
        </Typography>
      </Box>
    </Box>
  );
}
