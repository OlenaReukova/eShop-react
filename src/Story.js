import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Story.css';

export default function Story() {
  return (
    <div className='section_story'>
      <h1>WELCOME TO TRIUMPH</h1>
      <h3 className='section-block__title'>WHERE WOULD YOU LIKE TO START?</h3>
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
            }}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ objectFit: 'cover' }}
                component='img'
                width={'100%'}
                alt='Explorer Models'
                height='400'
                image='/images/pic8.png'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Explorer Models
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  THE TRIUMPH OF YOUR DREAMS, CLOSER THAN EVER
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ objectFit: 'cover' }}
                component='img'
                alt='Offers and Finance'
                height='400'
                image='/images/pic6.jpg'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Offers and Finance
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  OFFERING YOU THE PERFECT RIDE
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ objectFit: 'cover' }}
                component='img'
                alt='Triumph Owners'
                height='400'
                image='/images/pic9.png'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Triumph Owners
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  PROVIDING TOTAL PEACE OF MIND
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
