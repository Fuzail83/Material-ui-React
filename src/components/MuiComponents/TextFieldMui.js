import { Delete, Edit, Save } from "@mui/icons-material";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

const TextFieldMui = () => {
  const initialState = {
    name: "",
    password: "",
    email: "",
  };

  const [data, setData] = useState(initialState);
  const [submitData, setSubmittedData] = useState([]);
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    setSubmittedData([...submitData, data]);
    setData(initialState); // Reset the form fields
    console.log("submitData", submitData);
  };

  console.log(data);

  const deleteData = (index) => {
    console.log("Delete", index);
    const updatedData = submitData.filter((value, i) => {
      return i !== index;
    });
    setSubmittedData(updatedData);
  };
  return (
    <>
      <div style={{ margin: 20 }}>
        <TextField
          type="text"
          label="Enter Name"
          variant="outlined"
          color="secondary"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div style={{ margin: 20 }}>
        <TextField
          type="password"
          label="Enter Password"
          variant="standard"
          color="primary"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <div style={{ margin: 20 }}>
        <TextField
          type="email"
          label="Enter Email"
          variant="filled"
          color="primary"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <Button
        variant="text"
        size="small"
        onClick={onSubmitData}
        endIcon={<Save />}
      >
        Save
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {submitData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.password}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  Delete <Delete onClick={() => deleteData(index)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TextFieldMui;
