import React from "react";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box
      className="home"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        className="home__container"
        sx={{
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="images/home.png"
          alt="Home Image"
          sx={{
            width: "100%",
            maxWidth: "100%",
            height: "100vh",
            objectFit: "cover",
            display: "block",
          }}
          className="home__image"
        />
      </Box>
    </Box>
  );
}

export default Home;
