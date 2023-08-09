import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail";

const BadgeMui = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <Badge color="secondary" badgeContent={count}>
        <MailIcon />
      </Badge>

      <ButtonGroup>
        <Button aria-label="increase" onClick={increment}>
          <AddIcon fontSize="small" />
        </Button>
        <Button aria-label="reduce" onClick={decrement}>
          <RemoveIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default BadgeMui;
