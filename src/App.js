import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function App() {
  const [formData, setFormData] = useState({
    dateOfBirth: null,
    gender: "",
  });

  const handleGenderChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      gender: event.target.value,
    }));
  };

  const handleDateChange = (newValue) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: newValue,
    }));
  };

  return (
    <div style={{ padding: 20, maxWidth: 300 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender-select"
          value={formData.gender}
          label="Gender"
          onChange={handleGenderChange}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
