import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./App.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function App() {
  // Use useState to store form data
  const [formData, setFormData] = useState({
    dateOfBirth: "",
  });

  // Handle changes to the input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [gender, setGender] = useState("");

  const handleChange1 = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <div>
        <TextField
          fullWidth
          sx={{ maxWidth: 200 }}
          type="date"
          className="addemployee-input"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <FormControl fullWidth sx={{ maxWidth: 200 }}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender-select"
          value={gender}
          label="Gender"
          onChange={handleChange1}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default App;
