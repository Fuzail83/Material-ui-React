import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SelectMui = () => {
  const [course, setCourse] = useState("");
  const selectUpdateValue = (e) => {
    setCourse(e.target.value);
  };

  console.log(course);
  return (
    <div>
      <Select value={course} displayEmpty onChange={selectUpdateValue}>
        <MenuItem value="">Select Course</MenuItem>
        <MenuItem value="react">React</MenuItem>
        <MenuItem value="javascript">Javascript</MenuItem>
        <MenuItem value="PHP">PHP</MenuItem>
      </Select>
    </div>
  );
};

export default SelectMui;
