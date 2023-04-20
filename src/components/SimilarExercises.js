import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

function SimilarExercises({ equipmentExercises, targetMuscleExercises }) {
  return (
    <Box
      sx={{
        mt: { lg: "100px", sm: "0" },
        
      }}
      
    >
      <Typography variant="h4" mb="30px" ml="40px">
        Exercises that target the same muscle group.
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
          ml:"20px",
          
        }}
      >
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises} />
         : 
          <Loader />
        }
      </Stack>
      <Typography variant="h4" mb="30px" ml="40px">
        Exercises that use the same equipment.
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
          ml:"20px",
          
        }}
      >
        {equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises} />
         : 
          <Loader />
        }
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
