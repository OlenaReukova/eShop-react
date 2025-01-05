import React from "react";
import { Box, Typography } from "@mui/material";

export default function Models() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        padding: 0,
      }}
    >
      <Box
        className="models"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "100%",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          className="models__container"
          sx={{
            position: "absolute",
            backgroundColor: "black",
            width: "100%",
            maxWidth: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="images/motorbike.jpg"
            alt="Home Image"
            sx={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
            className="models__image"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: { lg: "30%", xs: "50%" },
            transform: "translate(-50%, -50%)",
            color: "white",
            px: 2,
            width: { lg: "50%", xs: "100%" },
            maxWidth: "100%",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textTransform: "uppercase",
              fontWeight: "1000",
              fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
              textAlign: { lg: "left", xs: "center" },
            }}
          >
            EXPLORE THE MOTORCYCLES
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
