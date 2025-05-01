import React, { useRef, useState, useEffect } from "react";
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
// import DatePicker1 from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import dayjs from "dayjs";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";
// import { DatePicker2, Form } from "antd";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const inputRef = useRef(null);
  const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
  const [showCalendar, setShowCalendar] = useState(false);
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
  const handleInputClick = () => {
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    const input = inputRef.current;

    flatpickr(input, {
      dateFormat: "d/m/Y",
      allowInput: true,
    });

    const handleInput = (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length >= 2) value = value.slice(0, 2) + "/" + value.slice(2);
      if (value.length >= 5)
        value = value.slice(0, 5) + "/" + value.slice(5, 9);
      e.target.value = value;
    };

    input.addEventListener("input", handleInput);

    return () => {
      input.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <>
      <h1>antd</h1>
      {/* <Form>
        <Form.Item label="Date">
          <DatePicker2 />
        </Form.Item>
      </Form> */}
      <h1>react-datepicker</h1>
      <div>
        <input
          id="datePicker"
          type="date"
          value={selectedDate ? selectedDate.toLocaleDateString() : ""}
          onClick={handleInputClick}
          readOnly // Make the input read-only to avoid manual editing
        />
      </div>

      <h1>react-day-picker</h1>

      <h1>MUI</h1>
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

        <h1>custom input</h1>
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          maxLength={10}
          placeholder="dd/mm/yyyy"
          className="p-2 border rounded w-60 placeholder-gray-500 text-black"
          style={{ backgroundColor: "#fff" }}
        />
      </div>
    </>
  );
}

export default App;
