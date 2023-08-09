import React, { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckBoxMui = () => {
  const initialCheckboxValue = {
    favorite1: false,
    favorite2: false,
    requiredCheckbox: false,
  };
  const [checkboxValues, setCheckboxValues] = useState(initialCheckboxValue);

  const handleCheckboxChange = (name) => (e) => {
    setCheckboxValues({
      ...checkboxValues,
      [name]: e.target.checked,
    });
  };

  console.log("checkboxValues", checkboxValues);

  return (
    <>
      <div>
        <Checkbox
          checked={checkboxValues.favorite1}
          onChange={handleCheckboxChange("favorite1")}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          checked={checkboxValues.favorite2}
          onChange={handleCheckboxChange("favorite2")}
          disabled
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          checked={checkboxValues.requiredCheckbox}
          onChange={handleCheckboxChange("requiredCheckbox")}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </div>
    </>
  );
};

export default CheckBoxMui;
