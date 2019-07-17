import React from "react";

import "./Presets.css";

const Presets = () => {
  return (
    <div>
      <h2>Preset:</h2>
      <br />
      <div>
        <div className='individualPreset'>
          <img />
          <button className='presetButton'>Preset 1</button>
        </div>
        <div className='individualPreset'>
          <img />
          <button className='presetButton'>Preset 2</button>
        </div>
        <div className='individualPreset'>
          <img />
          <button className='presetButton'>Preset 3</button>
        </div>
        <div className='individualPreset'>
          <img />
          <button className='presetButton'>Preset 4</button>
        </div>
      </div>
    </div>
  );
};

export default Presets;
