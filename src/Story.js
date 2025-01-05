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

export default function Story() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        backgroundColor: "white",
        padding: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontWeight: "inherit",
          lineHeight: "90px",
        }}
      >
        WELCOME TO TRIUMPH
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        WHERE WOULD YOU LIKE TO START?
      </Typography>
      <Box sx={{ flexGrow: 1, minHeight: 600 }}>
        <Grid container spacing={2}>
          {/* First Card */}
          <Grid
            xs={12}
            sm={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 500,
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt="Explorer Models"
                height="400"
                image="/images/pic8.png"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ textTransform: "uppercase" }}
                >
                  Models
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  THE TRIUMPH OF YOUR DREAMS, CLOSER THAN EVER
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
                  Explore Models
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 500,
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt="Offers and Finance"
                height="400"
                image="/images/pic6.jpg"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ textTransform: "uppercase" }}
                >
                  Offers and Finance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  OFFERING YOU THE PERFECT RIDE
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
                  Explore Offers and Finance
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 500,
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt="Triumph Owners"
                height="400"
                image="/images/pic9.png"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ textTransform: "uppercase" }}
                >
                  Triumph Owners
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  PROVIDING TOTAL PEACE OF MIND
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
                  Explore Owners
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
