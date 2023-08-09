import { Slider } from "@mui/material";
import React, { useState } from "react";

const SliderMui = () => {
  const [val, setValue] = useState([40, 70]);

  // Range value change handle

  const rangeUpdateValue = (e, value) => {
    setValue(value);
  };

  const marks = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 50,
      label: "middle",
    },

    {
      value: 100,
      label: "end",
    },
  ];
  return (
    <>
      <div style={{ width: 300, margin: 40 }}>
        <Slider
          color="primary"
          defaultValue={50}
          // step={20}
          valueLabelDisplay="auto"
          // valueLabelDisplay="on"
          marks={marks}
          //   orientation   // By default horizontal
        />
      </div>

      <div style={{ width: 300, height: 300, margin: 40 }}>
        <Slider
          color="primary"
          defaultValue={50}
          // step={20}
          valueLabelDisplay="auto"
          // valueLabelDisplay="on"
          marks={marks}
          orientation="vertical" // Vertical Slider
        />
      </div>

      <div style={{ width: 300, height: 300, margin: 40 }}>
        <Slider
          color="primary"
          defaultValue={50}
          valueLabelDisplay="auto"
          value={val}
          onChange={rangeUpdateValue}
        />
      </div>
    </>
  );
};

export default SliderMui;
