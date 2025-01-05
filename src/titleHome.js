import React from "react";
import { Typography, Button, Box } from "@mui/material";

const TitleWithButton = () => {
  const handleClick = () => {
    alert("Discover more about Triumph!");
  };

  return (
    <Box
      sx={{
        py: 4,
        textAlign: { lg: "left", xs: "center" },
        left: "50%",
        width: "100%",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontWeight: "bold",
          marginBottom: 2,
          fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
          textAlign: { lg: "left", xs: "center" },
        }}
      >
        Triumph Street Scrambler
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontWeight: "bold",
          marginBottom: 2,
          fontSize: { xs: "2rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          textAlign: { lg: "left", xs: "center" },
        }}
      >
        Born For Freedom and Fun
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
        sx={{
          backgroundColor: "#ff0000",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        Discover more
      </Button>
    </Box>
  );
};

export default TitleWithButton;
