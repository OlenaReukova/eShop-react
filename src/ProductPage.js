import React from 'react';
import Product from './Product';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function ProductPage() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      minHeight={600}
      backgroundColor={'#000000'}
      paddingTop={10}>
      <Grid container spacing={2} minHeight={600}>
        <Grid
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Product
            id='12321341'
            title='TRIUMPH BONNEVILLE AMERICA LT'
            price={12995.0}
            rating={5}
            image='images/bonnevilleamerica1.png'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product
            id='49538094'
            title='TRIUMPH BONNEVILLE T120 GOLD'
            price={13100.0}
            rating={4}
            image='images/Triumph Bonneville T120 Gold .png'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product
            id='4903850'
            title='STREET SCRAMBLER TRIUMPH'
            price={12000.0}
            rating={3}
            image='images/Street Scrambler Gold.png'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product
            id='23445930'
            title='TRIUMPH BOBBER GOLD'
            price={12000.0}
            rating={5}
            image='images/Triumph Bobber Gold.jpg'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product
            id='3254354345'
            title='THRUXTON RS CHROME'
            price={14500.0}
            rating={4}
            image='images/thruxton-rs-chrome.png'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product
            id='90829332'
            title='TRIUMPH BONNEVILLE T100'
            price={12900.0}
            rating={4}
            image='images/T100-Blue-LHS-800x560.png'
          />
        </Grid>
      </Grid>
    </Box>
  );
}
