import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box } from '@mui/material';

function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#0A0A0A',
        color: '#ffffff',

        p: 6,
      }}>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='#ffffff' gutterBottom>
              About Us
            </Typography>
            <Typography variant='body2' color='#ffffff'>
              This web site is a project developed for the learning purpose.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='#ffffff' gutterBottom>
              Contact Us
            </Typography>
            <Typography variant='body2' color='#ffffff'>
              London, UK
            </Typography>
            <Typography variant='body2' color='#ffffff'>
              Email: info@example.com
            </Typography>
            <Typography variant='body2' color='#ffffff'>
              Phone: +44 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='#ffffff' gutterBottom>
              Follow Us
            </Typography>
            <Link href='https://www.facebook.com/' color='inherit'>
              <Facebook />
            </Link>
            <Link
              href='https://www.instagram.com/'
              color='inherit'
              sx={{ pl: 1, pr: 1 }}>
              <Instagram />
            </Link>
            <Link href='https://www.twitter.com/' color='inherit'>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant='body2' color='#ffffff' align='center'>
            {'© '}
            <Link
              color='inherit'
              href='https://www.linkedin.com/in/olenareukova'>
              Created by Olena Reukova
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default Footer;
