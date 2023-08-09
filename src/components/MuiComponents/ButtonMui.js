import React, { useState } from "react";
import { Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const ButtonMui = () => {
  const [color, setColor] = useState("primary");
  const buttonClick = () => {
    setColor((prevColor) =>
      prevColor === "primary" ? "secondary" : "primary"
    );
  };

  console.log("color", color);
  return (
    <>
      <div className="App">
        <button>Normal Button</button>
        <Button
          variant="text"
          size="small"
          color={color}
          onClick={buttonClick}
          startIcon={<Delete />}
          endIcon={<Edit />}
        >
          Text Button MUI
        </Button>

        <Button variant="outlined" size="large">
          Outlined Button MUI
        </Button>
        <Button variant="filled" size="large">
          Filled Button MUI
        </Button>
        <Button variant="contained" size="medium">
          Contained Button MUI
        </Button>
      </div>
    </>
  );
};

export default ButtonMui;
