import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

// Sample data for user and purchases
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://www.example.com/avatar.jpg',
};

const purchases = [
  {
    id: 1,
    title: 'Motobike A1',
    description: 'A high-performance motobike for urban commuting.',
    price: '$1500',
    imageUrl: 'images/thruxton-rs-chrome.png',
  },
  {
    id: 2,
    title: 'Motobike B2',
    description: 'A robust motobike ideal for long trips.',
    price: '$2000',
    imageUrl: 'images/bonnevilleamerica1.png',
  },
];

const Account = () => {
  return (
    <Container sx={{ maxWidth: 'lg', minHeight: '100vh' }}>
      <Box my={4}>
        <Grid
          container
          spacing={4}
          sx={{
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* User Info Section */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box display='flex' alignItems='center' flexDirection='column'>
                  <Avatar
                    alt={user.name}
                    src={user.avatar}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography variant='h5' component='h2' mt={2}>
                    {user.name}
                  </Typography>
                  <Typography variant='body1' color='textSecondary'>
                    {user.email}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Purchases Section */}
          <Grid item xs={12} md={8}>
            <Typography variant='h4' component='h1' gutterBottom>
              Your Purchases
            </Typography>
            <Grid container spacing={4}>
              {purchases.map((purchase) => (
                <Grid item xs={12} sm={6} md={4} key={purchase.id}>
                  <Card>
                    <CardMedia
                      component='img'
                      height='140'
                      image={purchase.imageUrl}
                      alt={purchase.title}
                    />
                    <CardContent>
                      <Typography variant='h6' component='h2'>
                        {purchase.title}
                      </Typography>
                      <Typography variant='body2' color='textSecondary'>
                        {purchase.description}
                      </Typography>
                      <Typography variant='h6' color='primary' mt={2}>
                        {purchase.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Account;
