import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TemperatureChart from "../components/TemperatureChart";
import MainContent from "../components/MainContent";

function Dashboard() {
  return (
    <div>
      <Header />
      <MainContent/>
      <Footer />
    </div>
  );
}

export default Dashboard;
