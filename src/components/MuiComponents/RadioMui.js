import { Radio } from "@mui/material";
import React, { useState } from "react";

const RadioMui = () => {
  const [selectedValue, setSelectedValue] = useState("male"); // default checked

  const radioOnChange = (e) => {
    setSelectedValue(e.target.value);
    //console.log(e.target.value);
  };
  console.log(selectedValue);

  return (
    <div>
      <span>Male</span>
      <Radio
        value="male"
        onChange={radioOnChange}
        checked={selectedValue === "male"}
      />
      <span>Female</span>
      <Radio
        value="female"
        onChange={radioOnChange}
        checked={selectedValue === "female"}
      />
    </div>
  );
};

export default RadioMui;
