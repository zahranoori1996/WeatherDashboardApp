import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface IWather {
  day: string;
  image: string;
  temp: number;
}
function Weather({ day, image, temp }: IWather) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#CDD9E0",
        // width: "90px",
        height: "250px",
        gap: 3,
        padding: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
      }}
    >
      <Typography
        sx={{
          borderBottom: "2px solid #ccc",
          color: "#003464",
          paddingBottom: "20px",
          fontSize:"14px"
        }}
      >
        {day}
      </Typography>
      <img src={image} />
      <Typography sx={{ color: "#003464",fontSize:"18px" }}>{temp}°C</Typography>
    </Box>
  );
}

export default Weather;
