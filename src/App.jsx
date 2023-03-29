import React from "react";
import Navbar from "./components/Navbar";
import ModelY from "./components/ModelY";
import ModelS from "./components/ModelS";
import ModelX from "./components/ModelX";
import SolarPanels from "./components/SolarPanels";
import Solarroof from "./components/Solarroof";
import Accesories from "./components/Accesories";

function App() {
  return (
    <div>
      <Navbar />
      <ModelY />
      <ModelS />
      <ModelX />
      <SolarPanels />
      <Solarroof />
      <Accesories />
    </div>
  );
}

export default App;
