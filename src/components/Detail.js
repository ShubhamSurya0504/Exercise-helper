import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";
import bodyPartImage from "../assets/icons/body-part.png";

export default function Detail({ exerciseDetails }) {
  const { name, gifUrl, target, equipment, bodyPart } = exerciseDetails;
  const extraDetails = [
    { icon: bodyPartImage, name: bodyPart },
    { icon: targetImage, name: target },
    { icon: equipmentImage, name: equipment },
  ];
  console.log(gifUrl);
  return (
    <Stack
      gap="80px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        ml: "20px",
      }}
    >
      <img src={gifUrl} alt={name} className="detail-image" loading="lazy" />
      <Stack
        sx={{
          gap: { lg: "30px", xs: "20px" },
        }}
        width="500px"
      >
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong.
          {name} is one of the best exercises to target your {target}. It will
          help you improve youe mood and gain energy.
        </Typography>
        {extraDetails.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
