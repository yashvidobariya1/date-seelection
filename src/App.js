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
import Cleave from "cleave.js";
import Inputmask from "inputmask";
import Searchbar from "./Searchbar";
import MultipleselectionSearch from "./MultipleselectionSearch";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";
// import { DatePicker2, Form } from "antd";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef3 = useRef(null);
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
    new Cleave(inputRef.current, {
      date: true,
      delimiter: "/",
      datePattern: ["d", "m", "Y"],
    });
  }, []);

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

  useEffect(() => {
    const mask = new Inputmask("99/99/9999");
    mask.mask(inputRef3.current);
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 300 }}>
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
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date of Birth"
            value={formData.dateOfBirth}
            format="DD/MM/YYYY"
            onChange={(newValue) => handleDateChange(newValue)}
            slotProps={{
              textField: { fullWidth: true },
              field: { inputFormat: "DD/MM/YYYY", clearable: true },
            }}
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
        <h1>Cleave js</h1>
        <input type="text" ref={inputRef1} placeholder="dd/mm/yyyy" />
        <h1>inputmask</h1>
        <input
          ref={inputRef3}
          type="text"
          placeholder="dd/mm/yyyy"
          className="p-2 border rounded w-60 focus:outline-none focus:border-blue-500 hover:border-blue-500 text-black"
          style={{
            backgroundColor: "#fff",
            fontSize: "16px",
            letterSpacing: "0.1em",
          }}
        />
        <h1>Simple Input</h1>
        <input
          type="date"
          className="addemployee-input"
          name="dateOfBirth"
          data-testid="dateofbirth"
          value={formData.dateOfBirth}
          onChange={handleDateChange}
          placeholder="DD/MM/YYYY"
        />

        <h1>Simple selection</h1>
        <select
          className="addemployee-input"
          name="gender"
          data-testid="gender-select"
          value={formData?.gender}
          onChange={handleGenderChange}
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <Searchbar />
      <MultipleselectionSearch />
    </div>
  );
}

export default App;
