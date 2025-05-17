import React from "react";
import TemperatureChart from "./TemperatureChart";
import { Container, Grid, Stack } from "@mui/system";
import TodayWeather from "./TodayWeather";
import WeekWeather from "./WeekWeather";


function MainContent() {
  return (
  <Container>
      <Grid spacing={2} container sx={{ marginTop: "10%" }}>
      <Grid size={5}>
        <TodayWeather />
      </Grid>
      <Grid size={7}>
        <TemperatureChart />
      </Grid>
      <Grid>
        <WeekWeather />
      </Grid>
    </Grid>
  </Container>
  );
}

export default MainContent;
