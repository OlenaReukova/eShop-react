import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

export default function ModelsExplorerTwoCards() {
  return (
    <Box sx={{ background: "white" }}>
      <Box
        sx={{ flexGrow: 1, pt: 8, flexShrink: 0, background: "white" }}
        minHeight={600}
      >
        <Grid
          container
          spacing={2}
          sx={{ height: "100%", margin: 0, width: "100%" }}
        >
          <Grid
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card>
              <CardMedia
                sx={{ objectFit: "cover" }}
                component="img"
                width={"100%"}
                alt="Explorer Models"
                height="400"
                image="/images/triumph_daytona.webp"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ textTransform: "uppercase" }}
                >
                  Sport
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover the detail in the Daytona DNA. Dynamic sports
                  attitude for every road and every ride, with head-turning
                  style, intuitive agility and thrilling performance to put you
                  on top of your game.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to="/models"
                  size="small"
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    padding: 0,
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "black",
                    },
                  }}
                >
                  Explorer Sport
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card>
              <CardMedia
                sx={{ objectFit: "cover" }}
                component="img"
                alt="Offers and Finance"
                height="400"
                width="100%"
                image="/images/triumph_steeladdition.webp"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ textTransform: "uppercase" }}
                >
                  STEALTH EDITIONS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Triumph Stealth Editions – a collection of eight new modern
                  classics showcasing dramatic and unique hand-crafted paint
                  finishes, adding a contemporary twist to Triumph’s iconic
                  design DNA.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    padding: 0,
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "black",
                    },
                  }}
                >
                  Explorer STEALTH EDITIONS
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* <Grid
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
                image='/images/triumph_streettriple.jpg'
              />
              <CardContent>
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
              <CardActions>
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
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}
