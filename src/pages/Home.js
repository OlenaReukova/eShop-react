import React from "react";
import { Box } from "@mui/material";
import TitleWithButton from "../titleHome";

function Home() {
  return (
    <Box
      className="home"
      sx={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        className="home__container"
        sx={{
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Box
          component="img"
          src="images/home.png"
          alt="Home Image"
          sx={{
            width: "100%",
            maxWidth: "100%",
            height: "80vh",
            objectFit: "cover",
            display: "block",
          }}
          className="home__image"
        />
      </Box>
      <Box
        className="home__content"
        sx={{
          position: "absolute",
          top: { xs: "20%", md: "40%", lg: "50%" },
          left: { xs: "10%", md: "50%", lg: "30%" },
          transform: { xs: "none", md: "translate(-50%, -50%)" },
          width: { xs: "80%", md: "auto" },
          textAlign: { xs: "left", md: "center" },
          zIndex: 1,
        }}
      >
        <TitleWithButton />
      </Box>
    </Box>
  );
}

export default Home;
