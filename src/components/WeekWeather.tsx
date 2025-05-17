import React from "react";
import Weather from "./Weather";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";

function WeekWeather() {
  return (
    <Box sx={{background:"#E1E9EE", padding:2,borderRadius:6 , boxShadow: "3px 5px 7px -3px #ccc"}}>
      <Typography sx={{color:"#003464" , fontWeight:600, padding:"10px 0 25px 25px"}}>2 weeks Forecast</Typography>
      <Container sx={{ display: "flex", gap: 2, overflowX: "clip" }}>
        <Weather day="Today" image="./src/assets/images/cloudy.png" temp={28} />
        <Weather day="Mon" image="./src/assets/images/cloudy.png" temp={28} />
        <Weather day="Tue" image="./src/assets/images/rainy.png" temp={28} />
        <Weather day="Wed" image="./src/assets/images/stormy.png" temp={28} />
        <Weather day="Thu" image="./src/assets/images/cloudy.png" temp={28} />
        <Weather day="Fri" image="./src/assets/images/sunny.png" temp={28} />
        <Weather day="Sat" image="./src/assets/images/rainy.png" temp={28} />
        <Weather day="Sun" image="./src/assets/images/sunny.png" temp={28} />
        <Weather day="Mon" image="./src/assets/images/stormy.png" temp={28} />
        <Weather day="Tue" image="./src/assets/images/sunny.png" temp={28} />
        <Weather day="Wen" image="./src/assets/images/sunny.png" temp={28} />
        <Weather day="Thu" image="./src/assets/images/rainy.png" temp={28} />
      </Container>
    </Box>
  );
}

export default WeekWeather;
