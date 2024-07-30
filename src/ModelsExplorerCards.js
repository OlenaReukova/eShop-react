import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

export default function ModelsExplorerCards() {
  return (
    <Box sx={{ background: 'white' }}>
      <Box sx={{ flexGrow: 1, pt: 8, pb: 8, flexShrink: 0 }}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          <Grid
            xs={12}
            sm={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
            }}>
            <Card
              sx={{
                maxWidth: 500,
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
              }}>
              <CardMedia
                sx={{ objectFit: 'cover' }}
                component='img'
                alt='Explorer Models'
                height='400'
                image='/images/adventure_tiger.jpg'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant='h3'
                  component='div'
                  sx={{ textTransform: 'uppercase' }}>
                  ADVENTURE
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  State-of-the-art adventure motorcycles with thrilling
                  signature triple engines, innovative progressive technology
                  and equipment, commanding rider ergonomics, and agile neutral
                  handling, all built to take you everywhere with style, comfort
                  and control.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                  component={Link}
                  to='/models'
                  size='small'
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    padding: 0,
                    backgroundColor: 'white',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'black',
                    },
                  }}>
                  Explorer ADVENTURE
                </Button>
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
              alignItems: 'stretch',
            }}>
            <Card
              sx={{
                maxWidth: 500,
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
              }}>
              <CardMedia
                sx={{ objectFit: 'cover' }}
                component='img'
                alt='Offers and Finance'
                height='400'
                image='/images/triumph_speed.jpg'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant='h3'
                  component='div'
                  sx={{ textTransform: 'uppercase' }}>
                  Modern Classics
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  With a sound that stirs your soul, a style that’s truly
                  iconic, and a spirit that burns as bright as ever, the feeling
                  of riding a Triumph Modern Classic is as legendary as the
                  bikes themselves.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                  size='small'
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    padding: 0,
                    backgroundColor: 'white',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'black',
                    },
                  }}>
                  Explorer Modern Classics
                </Button>
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
              alignItems: 'stretch',
            }}>
            <Card
              sx={{
                maxWidth: 500,
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
              }}>
              <CardMedia
                sx={{ objectFit: 'cover' }}
                component='img'
                alt='Triumph Owners'
                height='400'
                image='/images/triumph_streettriple.jpg'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant='h3'
                  component='div'
                  sx={{ textTransform: 'uppercase' }}>
                  ROADSTERS
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Performance naked bikes at their game-changing best. Triumph's
                  incredible signature Triple engines, are built for power,
                  torque and instant responsiveness.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                  size='small'
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    padding: 0,
                    backgroundColor: 'white',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'black',
                    },
                  }}>
                  Explorer ROADSTERS
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
