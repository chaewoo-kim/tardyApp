// import React, { useState } from "react";

import './App.css';
import Distance from './component/Distance';
import Header from "./component/Header";
import Map from "./component/Map";
import SpeedCheck from "./component/SpeedCheck";

function App() {


  return (
    <div className="App">
      <Header />
      <Map />
      <Distance />
      <SpeedCheck />
    </div>
  );
}

export default App;
