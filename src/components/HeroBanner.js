import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroImage from "../assets/images/banner.png";


function HeroBanner(props) {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="20px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "40px", xs: "40px" } }}
        mb="20px"
      >
        Sweat, Smile
        <br />
        and Repeat
      </Typography>
      <Typography fontSize="20px" lineHeight="20px" mb={2}>
        Check out the most effective exercise
      </Typography>
      <Button
        mb="0px"
        href="#exercises"
        variant="contained"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="180px"
        ml="60px"
      >
        Exercise
      </Typography>
      <img src={HeroImage} alt="" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
