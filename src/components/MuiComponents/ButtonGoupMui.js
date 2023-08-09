import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const ButtonGoupMui = () => {
  return (
    <div>
      <ButtonGroup color="secondary" orientation="vertical">
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGoupMui;
