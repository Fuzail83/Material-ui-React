import { Switch, TextField } from "@mui/material";
import React, { useState } from "react";

const SwitchMui = () => {
  const [switchToggle, setSwitchToggle] = useState(false);

  const handleSwitchChange = () => {
    setSwitchToggle(!switchToggle);
  };
  return (
    <div>
      <Switch color="primary" size="large" />

      <Switch color="primary" size="small" onChange={handleSwitchChange} />
      {switchToggle && (
        <p>
          <TextField
            type="text"
            label="Enter Name"
            variant="outlined"
            color="secondary"
          />
        </p>
      )}
    </div>
  );
};

export default SwitchMui;
