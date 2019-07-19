import React from "react";
import "./App.css";
import Grid from "./components/grid/Grid.js";
import Rules from "./components/rules/Rules.js";
import About from "./components/about/About.js";
import Preset from "./components/presets/Presets";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>"Conway's Game of Life"</h1>
      </header>
      <div className='grid-rules'>
        <Grid />
        <Preset />
        <Rules />
      </div>
    </div>
  );
}

export default App;
