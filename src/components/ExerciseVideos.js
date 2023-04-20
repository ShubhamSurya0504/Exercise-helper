import React from "react";
import { Stack, Box, Typography } from "@mui/material";

function ExerciseVideos({ youTubeVideosData, name }) {
  return (
    <Box
      sx={{
        marginTop: { lg: "100px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h3" mb="50px" ml="30px">
        watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos.
      </Typography>
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{
            flexDirection: {lg:"row"},
            gap:{lg:"50px" , xs:'0'},
            mb:'10px'
            
        }}
      >
        {youTubeVideosData?.slice(0,6).map((item,index)=>(
            <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            
            >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>
                    <Typography color="#000" fontSize="15px">
                        {item.video.title}
                    </Typography>
                    <Typography fontSize="18px" color="#ff2625">
                        {item.video.channelName}
                    </Typography>
                </Box>
            </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
