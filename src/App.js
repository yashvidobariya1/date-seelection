// import React, { useRef, useState, useEffect } from "react";
// import {
//   TextField,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
// } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// // import DatePicker1 from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import dayjs from "dayjs";
// import Cleave from "cleave.js";
// import Inputmask from "inputmask";
// import Searchbar from "./Searchbar";
// import MultipleselectionSearch from "./MultipleselectionSearch";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// // import { DayPicker } from "react-day-picker";
// // import "react-day-picker/style.css";
// // import { DatePicker2, Form } from "antd";

// function App() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const inputRef = useRef(null);
//   const inputRef1 = useRef(null);
//   const inputRef3 = useRef(null);
//   const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [formData, setFormData] = useState({
//     dateOfBirth: null,
//     gender: "",
//   });

//   const handleGenderChange = (event) => {
//     setFormData((prev) => ({
//       ...prev,
//       gender: event.target.value,
//     }));
//   };

//   const handleDateChange = (newValue) => {
//     setFormData((prev) => ({
//       ...prev,
//       dateOfBirth: newValue,
//     }));
//   };
//   const handleInputClick = () => {
//     setShowCalendar(!showCalendar);
//   };

//   useEffect(() => {
//     new Cleave(inputRef.current, {
//       date: true,
//       delimiter: "/",
//       datePattern: ["d", "m", "Y"],
//     });
//   }, []);

//   useEffect(() => {
//     const input = inputRef.current;

//     flatpickr(input, {
//       dateFormat: "d/m/Y",
//       allowInput: true,
//     });

//     const handleInput = (e) => {
//       let value = e.target.value.replace(/\D/g, "");
//       if (value.length >= 2) value = value.slice(0, 2) + "/" + value.slice(2);
//       if (value.length >= 5)
//         value = value.slice(0, 5) + "/" + value.slice(5, 9);
//       e.target.value = value;
//     };

//     input.addEventListener("input", handleInput);

//     return () => {
//       input.removeEventListener("input", handleInput);
//     };
//   }, []);

//   useEffect(() => {
//     const mask = new Inputmask("99/99/9999");
//     mask.mask(inputRef3.current);
//   }, []);

//   return (
//     <div style={{ padding: 20, maxWidth: 300 }}>
//       <h1>antd</h1>
//       {/* <Form>
//         <Form.Item label="Date">
//           <DatePicker2 />
//         </Form.Item>
//       </Form> */}
//       <h1>react-datepicker</h1>
//       <div>
//         <input
//           id="datePicker"
//           type="date"
//           value={selectedDate ? selectedDate.toLocaleDateString() : ""}
//           onClick={handleInputClick}
//           readOnly // Make the input read-only to avoid manual editing
//         />
//       </div>

//       <h1>react-day-picker</h1>

//       <h1>MUI</h1>
//       <div>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DesktopDatePicker
//             label="Date of Birth"
//             value={formData.dateOfBirth}
//             format="DD/MM/YYYY"
//             disableMaskedInput
//             onChange={(newValue) => handleDateChange(newValue)}
//             slotProps={{
//               textField: { fullWidth: true },
//               field: { inputFormat: "DD/MM/YYYY", clearable: true },
//             }}
//           />
//         </LocalizationProvider>

//         <FormControl fullWidth sx={{ mt: 2 }}>
//           <InputLabel id="gender-label">Gender</InputLabel>
//           <Select
//             labelId="gender-label"
//             id="gender-select"
//             value={formData.gender}
//             label="Gender"
//             onChange={handleGenderChange}
//           >
//             <MenuItem value="male">Male</MenuItem>
//             <MenuItem value="female">Female</MenuItem>
//             <MenuItem value="other">Other</MenuItem>
//           </Select>
//         </FormControl>

//         <h1>custom input</h1>
//         <input
//           ref={inputRef}
//           type="text"
//           inputMode="numeric"
//           maxLength={10}
//           placeholder="dd/mm/yyyy"
//           className="p-2 border rounded w-60 placeholder-gray-500 text-black"
//           style={{ backgroundColor: "#fff" }}
//         />
//         <h1>Cleave js</h1>
//         <input type="text" ref={inputRef1} placeholder="dd/mm/yyyy" />
//         <h1>inputmask</h1>
//         <input
//           ref={inputRef3}
//           type="text"
//           placeholder="dd/mm/yyyy"
//           className="p-2 border rounded w-60 focus:outline-none focus:border-blue-500 hover:border-blue-500 text-black"
//           style={{
//             backgroundColor: "#fff",
//             fontSize: "16px",
//             letterSpacing: "0.1em",
//           }}
//         />
//         <h1>Simple Input</h1>
//         <input
//           type="date"
//           className="addemployee-input"
//           name="dateOfBirth"
//           data-testid="dateofbirth"
//           value={formData.dateOfBirth}
//           onChange={handleDateChange}
//           placeholder="DD/MM/YYYY"
//         />

//         <h1>Simple selection</h1>
//         <select
//           className="addemployee-input"
//           name="gender"
//           data-testid="gender-select"
//           value={formData?.gender}
//           onChange={handleGenderChange}
//         >
//           <option value="" disabled>
//             Select Gender
//           </option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <Searchbar />
//       <MultipleselectionSearch />
//     </div>
//   );
// }

// export default App;

// import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// export default function BasicDatePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["DatePicker"]}>
//         <DatePicker label="Basic date picker" />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

// import * as React from "react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// export default function BasicDatePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         label="Select date"
//         format="DD/MM/YYYY" // 👈 Set strict format
//         disableMaskedInput // 👈 Disable auto-masking interference
//         slotProps={{
//           textField: {
//             inputProps: {
//               placeholder: "dd/mm/yyyy", // 👈 Help user know the format
//             },
//           },
//         }}
//       />
//     </LocalizationProvider>
//   );
// }

// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

// export default function CustomDatePicker() {
//   const [value, setValue] = React.useState(null);
//   const [inputValue, setInputValue] = React.useState("");

//   const handleInputChange = (event) => {
//     const val = event.target.value;
//     setInputValue(val);

//     const parsed = dayjs(val, "DD/MM/YYYY", true);
//     if (parsed.isValid()) {
//       setValue(parsed);
//     } else {
//       setValue(null); // optional: clear invalid values
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         value={value}
//         onChange={(newValue) => {
//           if (dayjs.isDayjs(newValue) && newValue.isValid()) {
//             setValue(newValue);
//             setInputValue(newValue.format("DD/MM/YYYY"));
//           }
//         }}
//         format="DD/MM/YYYY"
//         disableMaskedInput
//         slots={{
//           textField: (params) => (
//             <TextField
//               {...params}
//               label="Select date"
//               value={inputValue}
//               onChange={handleInputChange}
//               placeholder="dd/mm/yyyy"
//             />
//           ),
//         }}
//       />
//     </LocalizationProvider>
//   );
// }

// import React, { useState } from "react";
// import {
//   TextField,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
// } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// function App() {
//   const [formData, setFormData] = useState({
//     dateOfBirth: null,
//     gender: "",
//   });

//   const handleDateChange = (newValue) => {
//     setFormData((prev) => ({
//       ...prev,
//       dateOfBirth: newValue,
//     }));
//   };

//   return (
//     <div style={{ padding: 20, maxWidth: 300 }}>
//       <h1>MUI Date Picker</h1>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           label="Date of Birth"
//           value={formData.dateOfBirth}
//           onChange={handleDateChange}
//           format="DD/MM/YYYY"
//           slotProps={{
//             textField: {
//               placeholder: "DD/MM/YYYY",
//             },
//           }}
//         />
//       </LocalizationProvider>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { TextField } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// function App() {
//   const [formData, setFormData] = useState({
//     dateOfBirth: null,
//   });

//   const handleDateChange = (newValue) => {
//     setFormData((prev) => ({
//       ...prev,
//       dateOfBirth: newValue,
//     }));
//   };

//   return (
//     <div style={{ padding: 20, maxWidth: 300 }}>
//       <h1>MUI Date Picker</h1>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DesktopDatePicker
//           // label="Date of Birth"
//           value={formData.dateOfBirth}
//           onChange={handleDateChange}
//           format="DD/MM/YYYY"
//           // disableMaskedInput
//           slotProps={{
//             textField: {
//               placeholder: "DD/MM/YYYY",
//             },
//           }}
//         />
//       </LocalizationProvider>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { TextField } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";

// function App() {
//   const [formData, setFormData] = useState({
//     dateOfBirth: null,
//   });

//   const handleDateChange = (newValue) => {
//     setFormData((prev) => ({
//       ...prev,
//       dateOfBirth: newValue,
//     }));
//   };

//   return (
//     <div style={{ padding: 20, maxWidth: 300 }}>
//       <h1>MUI Date Picker</h1>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DesktopDatePicker
//           label="Date of Birth"
//           value={formData.dateOfBirth}
//           onChange={handleDateChange}
//           inputFormat="DD/MM/YYYY" // ✅ Use this instead of `format`
//           disableMaskedInput={false} // ✅ Use input mask
//           renderInput={(params) => (
//             <TextField {...params} placeholder="DD/MM/YYYY" />
//           )}
//         />
//       </LocalizationProvider>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { TextField } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";

// export default function ContinuousTypingDatePicker() {
//   const [selectedDate, setSelectedDate] = useState(null);

//   return (
//     <div style={{ padding: 20, maxWidth: 300 }}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           label="Date of Birth"
//           value={selectedDate}
//           onChange={(newValue) => setSelectedDate(newValue)}
//           format="DD/MM/YYYY"
//           slotProps={{
//             textField: {
//               placeholder: "DD/MM/YYYY",
//               variant: "outlined",
//               fullWidth: true,
//             },
//             inputAdornment: {
//               position: "end",
//             },
//           }}
//         />
//       </LocalizationProvider>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Box, TextField } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";

// export default function App() {
//   const [value, setValue] = useState(null);

//   return (
//     <div style={{ padding: 20, maxWidth: 300 }}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             position: "relative",
//           }}
//         >
//           <DemoItem label="DesktopDatePicker">
//             <DesktopDatePicker
//               sx={{ width: 260 }}
//               slotProps={{
//                 field: { clearable: true },
//               }}
//             />
//           </DemoItem>
//         </Box>
//       </LocalizationProvider>
//     </div>
//   );
// }

// import * as React from "react";
// import { DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import Box from "@mui/material/Box";

// export default function ClearableProp() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box
//         sx={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           justifyContent: "center",
//           position: "relative",
//         }}
//       >
//         <DemoItem label="DesktopDatePicker">
//           <DesktopDatePicker
//             sx={{ width: 260 }}
//             slotProps={{
//               field: { clearable: true },
//             }}
//           />
//         </DemoItem>
//       </Box>
//     </LocalizationProvider>
//   );
// }

// import * as React from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import Box from "@mui/material/Box";
// import dayjs from "dayjs";

// export default function DateFilter() {
//   const [selectedDate, setSelectedDate] = React.useState(null);

//   React.useEffect(() => {
//     if (
//       selectedDate &&
//       dayjs(selectedDate).isValid() &&
//       dayjs(selectedDate).year() >= 1900
//     ) {
//       const formatted = dayjs(selectedDate).format("YYYY-MM-DD");
//       console.log("api call", formatted);
//     }
//   }, [selectedDate]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         <DesktopDatePicker
//           sx={{ width: 260 }}
//           value={selectedDate}
//           onChange={(newValue) => setSelectedDate(newValue)}
//           format="DD-MM-YYYY"
//           slotProps={{
//             field: { clearable: true },
//           }}
//         />
//       </Box>
//     </LocalizationProvider>
//   );
// }

// import React, { useState } from "react";
// import dayjs from "dayjs";
// import { DatePicker, PickersDay } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Chip from "@mui/material/Chip";

// const CustomPickersDay = styled(PickersDay, {
//   shouldForwardProp: (prop) => prop !== "selectedDay",
// })(({ theme, selectedDay }) => ({
//   ...(selectedDay && {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     "&:hover, &:focus": {
//       backgroundColor: theme.palette.primary.main,
//     },
//   }),
// }));

// export default function MultiDatePicker() {
//   const [selectedDates, setSelectedDates] = useState([]);

//   const handleDateChange = (newDate) => {
//     const exists = selectedDates.some((d) => dayjs(d).isSame(newDate, "day"));
//     if (exists) {
//       setSelectedDates(
//         selectedDates.filter((d) => !dayjs(d).isSame(newDate, "day"))
//       );
//     } else {
//       setSelectedDates([...selectedDates, newDate]);
//     }
//   };

//   const handleRemoveDate = (dateToRemove) => {
//     setSelectedDates(
//       selectedDates.filter((d) => !dayjs(d).isSame(dateToRemove, "day"))
//     );
//   };

//   const renderDay = (day, _value, DayComponentProps) => {
//     const isSelected = selectedDates.some((d) => dayjs(d).isSame(day, "day"));
//     return <CustomPickersDay {...DayComponentProps} selectedDay={isSelected} />;
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         onChange={handleDateChange}
//         value={null}
//         renderDay={renderDay}
//       />

//       <div style={{ marginTop: "1rem" }}>
//         <strong>Selected Dates:</strong>
//         <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
//           {selectedDates.map((date) => (
//             <Chip
//               key={dayjs(date).format("YYYY-MM-DD")}
//               label={dayjs(date).format("DD/MM/YYYY")}
//               onDelete={() => handleRemoveDate(date)}
//               color="primary"
//               sx={{ margin: "4px" }}
//             />
//           ))}
//         </Stack>
//       </div>
//     </LocalizationProvider>
//   );
// }

// import React, { useState } from "react";
// import dayjs from "dayjs";
// import { DesktopDatePicker, PickersDay } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Chip from "@mui/material/Chip";

// const CustomPickersDay = styled(PickersDay, {
//   shouldForwardProp: (prop) => prop !== "selectedDay",
// })(({ theme, selectedDay }) => ({
//   ...(selectedDay && {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     "&:hover, &:focus": {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   }),
// }));

// export default function MultiDatePicker() {
//   const [selectedDates, setSelectedDates] = useState([]);
//   const [open, setOpen] = useState(false);

//   const handleDateChange = (newDate) => {
//     const exists = selectedDates.some((d) => dayjs(d).isSame(newDate, "day"));
//     if (exists) {
//       setSelectedDates((prev) =>
//         prev.filter((d) => !dayjs(d).isSame(newDate, "day"))
//       );
//     } else {
//       setSelectedDates((prev) => [...prev, newDate]);
//     }
//   };

//   const handleRemoveDate = (dateToRemove) => {
//     setSelectedDates((prev) =>
//       prev.filter((d) => !dayjs(d).isSame(dateToRemove, "day"))
//     );
//   };

//   const renderDay = (day, _value, DayComponentProps) => {
//     const isSelected = selectedDates.some((d) => dayjs(d).isSame(day, "day"));
//     return <CustomPickersDay {...DayComponentProps} selectedDay={isSelected} />;
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DesktopDatePicker
//         value={null}
//         onChange={handleDateChange}
//         closeOnSelect={false}
//         renderDay={renderDay}
//         open={open}
//         onClose={() => setOpen(false)}
//         onOpen={() => setOpen(true)}
//       />

//       <div style={{ marginTop: "1rem" }}>
//         <strong>Selected Dates:</strong>
//         <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
//           {selectedDates.map((date) => (
//             <Chip
//               key={dayjs(date).format("YYYY-MM-DD")}
//               label={dayjs(date).format("DD/MM/YYYY")}
//               onDelete={() => handleRemoveDate(date)}
//               color="primary"
//               sx={{ margin: "4px" }}
//             />
//           ))}
//         </Stack>
//       </div>
//     </LocalizationProvider>
//   );
// }

// import React, { useState } from "react";
// import dayjs from "dayjs";
// import { DesktopDatePicker, PickersDay } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Chip from "@mui/material/Chip";

// const CustomPickersDay = styled(PickersDay, {
//   shouldForwardProp: (prop) => prop !== "selectedDay",
// })(({ theme, selectedDay }) => ({
//   ...(selectedDay && {
//     backgroundColor: "pink",
//     color: theme.palette.common.white,
//     fontWeight: theme.typography.fontWeightBold,
//     borderRadius: "50%",
//     "&:hover, &:focus": {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   }),
// }));

// export default function MultiDatePicker() {
//   const [selectedDates, setSelectedDates] = useState([]);
//   const [open, setOpen] = useState(false);

//   const handleDateChange = (newDate) => {
//     const exists = selectedDates.some((d) => dayjs(d).isSame(newDate, "day"));
//     if (exists) {
//       setSelectedDates((prev) =>
//         prev.filter((d) => !dayjs(d).isSame(newDate, "day"))
//       );
//     } else {
//       setSelectedDates((prev) => [...prev, newDate]);
//     }
//   };

//   const handleRemoveDate = (dateToRemove) => {
//     setSelectedDates((prev) =>
//       prev.filter((d) => !dayjs(d).isSame(dateToRemove, "day"))
//     );
//   };

//   const renderDay = (day, _value, DayComponentProps) => {
//     const isSelected = selectedDates.some((d) => dayjs(d).isSame(day, "day"));
//     return <CustomPickersDay {...DayComponentProps} selectedDay={isSelected} />;
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DesktopDatePicker
//         value={null}
//         onChange={handleDateChange}
//         closeOnSelect={false}
//         renderDay={renderDay}
//         open={open}
//         onClose={() => setOpen(false)}
//         onOpen={() => setOpen(true)}
//         slotProps={{
//           field: { clearable: true },
//         }}
//       />

//       <div style={{ marginTop: "1rem" }}>
//         <strong>Selected Dates:</strong>
//         <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
//           {selectedDates.map((date) => (
//             <Chip
//               key={dayjs(date).format("YYYY-MM-DD")}
//               label={dayjs(date).format("DD/MM/YYYY")}
//               onDelete={() => handleRemoveDate(date)}
//               color="primary"
//               sx={{ margin: "4px" }}
//             />
//           ))}
//         </Stack>
//       </div>
//     </LocalizationProvider>
//   );
// }

// import React, { useState } from "react";
// import dayjs from "dayjs";
// import { DesktopDatePicker, PickersDay } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Chip from "@mui/material/Chip";

// const CustomPickersDay = styled(PickersDay, {
//   shouldForwardProp: (prop) => prop !== "selectedDay",
// })(({ theme, selectedDay }) => ({
//   ...(selectedDay && {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     fontWeight: theme.typography.fontWeightBold,
//     borderRadius: "50%",
//     "&:hover, &:focus": {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   }),
// }));

// export default function MultiDatePicker() {
//   const [selectedDates, setSelectedDates] = useState([]);
//   const [open, setOpen] = useState(false);

//   const handleDateChange = (newDate) => {
//     const exists = selectedDates.some((d) => dayjs(d).isSame(newDate, "day"));
//     if (exists) {
//       setSelectedDates((prev) =>
//         prev.filter((d) => !dayjs(d).isSame(newDate, "day"))
//       );
//     } else {
//       setSelectedDates((prev) => [...prev, newDate]);
//     }
//   };

//   const handleRemoveDate = (dateToRemove) => {
//     setSelectedDates((prev) =>
//       prev.filter((d) => !dayjs(d).isSame(dateToRemove, "day"))
//     );
//   };

//   const renderDay = (day, _value, DayComponentProps) => {
//     const isSelected = selectedDates.some((d) => dayjs(d).isSame(day, "day"));
//     return (
//       <CustomPickersDay
//         {...DayComponentProps}
//         selectedDay={isSelected}
//         selected={isSelected}
//       />
//     );
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DesktopDatePicker
//         value={null}
//         onChange={handleDateChange}
//         closeOnSelect={false}
//         renderDay={renderDay}
//         open={open}
//         onClose={() => setOpen(false)}
//         onOpen={() => setOpen(true)}
//         slotProps={{
//           field: { clearable: true },
//         }}
//       />

//       <div style={{ marginTop: "1rem" }}>
//         <strong>Selected Dates:</strong>
//         <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
//           {selectedDates.map((date) => (
//             <Chip
//               key={dayjs(date).format("YYYY-MM-DD")}
//               label={dayjs(date).format("DD/MM/YYYY")}
//               onDelete={() => handleRemoveDate(date)}
//               color="primary"
//               sx={{ margin: "4px" }}
//             />
//           ))}
//         </Stack>
//       </div>
//     </LocalizationProvider>
//   );
// }

// import React, { useState } from "react";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker, PickersDay } from "@mui/x-date-pickers";
// import { styled } from "@mui/material/styles";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";

// const CustomPickersDay = styled(PickersDay, {
//   shouldForwardProp: (prop) => prop !== "selectedDay",
// })(({ theme, selectedDay }) => ({
//   ...(selectedDay && {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     fontWeight: theme.typography.fontWeightBold,
//     borderRadius: "50%",
//     "&:hover, &:focus": {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   }),
// }));

// export default function MultiDatePicker() {
//   const [selectedDates, setSelectedDates] = useState([]);

//   const handleDateChange = (newDate) => {
//     if (!newDate || !dayjs(newDate).isValid()) return;

//     const exists = selectedDates.some((d) => dayjs(d).isSame(newDate, "day"));
//     if (exists) {
//       setSelectedDates((prev) =>
//         prev.filter((d) => !dayjs(d).isSame(newDate, "day"))
//       );
//     } else {
//       setSelectedDates((prev) => [...prev, newDate]);
//     }
//   };

//   const renderDay = (day, _value, DayComponentProps) => {
//     const isSelected = selectedDates.some((date) =>
//       dayjs(date).isSame(day, "day")
//     );
//     return (
//       <CustomPickersDay
//         {...DayComponentProps}
//         selectedDay={isSelected}
//         disableMargin
//       />
//     );
//   };

//   const handleRemoveDate = (dateToRemove) => {
//     setSelectedDates((prev) =>
//       prev.filter((d) => !dayjs(d).isSame(dateToRemove, "day"))
//     );
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           value={null}
//           onChange={handleDateChange}
//           closeOnSelect={false}
//           renderDay={renderDay}
//         />

//         <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
//           {selectedDates.map((date) => (
//             <Chip
//               key={dayjs(date).format("YYYY-MM-DD")}
//               label={dayjs(date).format("DD/MM/YYYY")}
//               onDelete={() => handleRemoveDate(date)}
//               color="primary"
//             />
//           ))}
//         </Stack>
//       </LocalizationProvider>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import dayjs from "dayjs";
// import Badge from "@mui/material/Badge";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import { DatePicker, PickersDay } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const Highlight = (props) => {
//   console.log("props", props);

//   const { day, outsideCurrentMonth, selectedDates, ...other } = props;
//   const isSelected = selectedDates.some((d) => dayjs(d).isSame(day, "day"));

//   return (
//     <Badge
//       key={day.toString()}
//       overlap="circular"
//       badgeContent={isSelected ? "-" : undefined}
//     >
//       <PickersDay
//         {...other}
//         day={day}
//         outsideCurrentMonth={outsideCurrentMonth}
//         selected={isSelected}
//       />
//     </Badge>
//   );
// };

// export default function MultiDatePickerWithEmoji() {
//   const [lastSelectedDate, setLastSelectedDate] = useState(null);
//   const [selectedDates, setSelectedDates] = useState([]);

//   const handleDateChange = (newDate) => {
//     if (!newDate || !dayjs(newDate).isValid()) return;

//     setLastSelectedDate(newDate);
//     console.log("selecteddate", selectedDates);

//     setSelectedDates((prev) => {
//       const exists = prev.some((d) => dayjs(d).isSame(dayjs(newDate), "day"));
//       return exists
//         ? prev.filter((d) => !dayjs(d).isSame(dayjs(newDate), "day"))
//         : [...prev, dayjs(newDate)];
//     });
//   };


//   const renderDay = (day, _value, DayComponentProps) => {
//     console.log("day", day);
//     console.log("DayComponentProps", DayComponentProps);

//     return (
//       <Highlight
//         {...DayComponentProps}
//         day={day}
//         selectedDates={selectedDates}
//       />
//     );
//   };

//   const handleRemoveDate = (dateToRemove) => {
//     setSelectedDates((prev) =>
//       prev.filter((d) => !dayjs(d).isSame(dateToRemove, "day"))
//     );
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           value={lastSelectedDate}
//           onChange={handleDateChange}
//           closeOnSelect={false}
//           renderDay={renderDay}
//           renderInput={({ inputRef, inputProps, InputProps }) => (
//             <div ref={inputRef} style={{ display: "flex", alignItems: "center" }}>
//               <input {...inputProps} />
//               {InputProps?.endAdornment}
//             </div>
//           )}
//         />

//         <Stack direction="row" spacing={1} mt={2} flexWrap="wrap" useFlexGap>
//           {selectedDates.map((date) => (
//             <Chip
//               key={dayjs(date).format("YYYY-MM-DD")}
//               label={dayjs(date).format("DD/MM/YYYY")}
//               onDelete={() => handleRemoveDate(date)}
//               color="primary"
//               variant="outlined"
//             />
//           ))}
//         </Stack>
//       </LocalizationProvider>
//     </div>
//   );
// }

// ------------------------- working as expect but show full calender -----------------------------
// import React, { useState } from "react";
// import dayjs from "dayjs";
// import Badge from "@mui/material/Badge";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
// import { DatePicker, PickersDay } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const CustomPickersDay = styled(PickersDay)(({ theme }) => ({
//   "&.Mui-selected": {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     "&:hover": {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   },
// }));

// const Highlight = ({ day, selectedDates, ...props }) => {
//   const isSelected = selectedDates.some((d) => dayjs(d).isSame(day, "day"));

//   return (
//     <Badge overlap="circular">
//       <CustomPickersDay
//         {...props}
//         day={day}
//         selected={isSelected}
//         onClick={(e) => {
//           e.stopPropagation();
//           props.onToggle(day);
//         }}
//       />
//     </Badge>
//   );
// };

// export default function MultiDateCalendar() {
//   const [selectedDates, setSelectedDates] = useState([]);
//   const [open, setOpen] = useState(false);

//   const toggleDate = (date) => {
//     const exists = selectedDates.some((d) => dayjs(d).isSame(date, "day"));
//     setSelectedDates((prev) =>
//       exists
//         ? prev.filter((d) => !dayjs(d).isSame(date, "day"))
//         : [...prev, date]
//     );
//   };

//   const renderDay = (day, _value, DayComponentProps) => {
//     return (
//       <Highlight
//         {...DayComponentProps}
//         day={day}
//         selectedDates={selectedDates}
//         onToggle={toggleDate}
//       />
//     );
//   };

//   const handleRemoveDate = (dateToRemove) => {
//     setSelectedDates((prev) =>
//       prev.filter((d) => !dayjs(d).isSame(dateToRemove, "day"))
//     );
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           disableHighlightToday
//           onChange={(newDate) => {
//             if (
//               newDate &&
//               dayjs(newDate).isValid() &&
//               dayjs(newDate).year().toString().length === 4
//             ) {
//               toggleDate(newDate);
//             }
//           }}

//           closeOnSelect={false}
//           open={open}
//           onClose={() => setOpen(false)}
//           onOpen={() => setOpen(true)}
//           showDaysOutsideCurrentMonth
//           slots={{ day: (props) => renderDay(props.day, null, props) }}
//           slotProps={{
//             field: { clearable: true },
//           }}
//         />
//       </LocalizationProvider>

//       <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
//         {[...new Set(selectedDates.map(d => dayjs(d).format("YYYY-MM-DD")))].map((dateStr) => (
//           <Chip
//             key={dateStr}
//             label={dayjs(dateStr).format("DD/MM/YYYY")}
//             onDelete={() => handleRemoveDate(dateStr)}
//             color="primary"
//             variant="outlined"
//           />
//         ))}

//       </Stack>
//     </div>
//   );
// }


import React, { useState } from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { DatePicker, PickersDay } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const CustomPickersDay = styled(PickersDay)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Highlight = ({ day, selectedDates, ...props }) => {
  const isSelected = selectedDates.some((d) => dayjs(d).isSame(day, "day"));
  return (
    <Badge overlap="circular">
      <CustomPickersDay
        {...props}
        day={day}
        selected={isSelected}
        onClick={(e) => {
          e.stopPropagation();
          props.onToggle(day);
        }}
      />
    </Badge>
  );
};

export default function MultiRangeDatePicker() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [open, setOpen] = useState(false);
  const [rangeMode, setRangeMode] = useState(false);
  const [rangeStart, setRangeStart] = useState(null);

  const toggleDate = (date) => {
    if (rangeMode) {
      if (!rangeStart) {
        setRangeStart(date);
      } else {
        const start = dayjs(rangeStart).isBefore(date) ? dayjs(rangeStart) : dayjs(date);
        const end = dayjs(rangeStart).isAfter(date) ? dayjs(rangeStart) : dayjs(date);

        const rangeDates = [];
        let current = start;
        while (current.isBefore(end) || current.isSame(end)) {
          rangeDates.push(current.toDate());
          current = current.add(1, "day");
        }

        const newDates = [
          ...selectedDates,
          ...rangeDates.filter(
            (rd) =>
              !selectedDates.some((d) => dayjs(d).isSame(rd, "day"))
          ),
        ];
        setSelectedDates(newDates);
        setRangeStart(null);
      }
    } else {
      const exists = selectedDates.some((d) => dayjs(d).isSame(date, "day"));
      setSelectedDates((prev) =>
        exists ? prev.filter((d) => !dayjs(d).isSame(date, "day")) : [...prev, date]
      );
    }
  };

  const renderDay = (day, _value, DayComponentProps) => {
    return (
      <Highlight
        {...DayComponentProps}
        day={day}
        selectedDates={selectedDates}
        onToggle={toggleDate}
      />
    );
  };

  const handleRemoveDate = (dateToRemove) => {
    setSelectedDates((prev) =>
      prev.filter((d) => !dayjs(d).isSame(dateToRemove, "day"))
    );
  };

  return (
    <div style={{ margin: "20px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disableHighlightToday
          onChange={(newDate) => {
            if (
              newDate &&
              dayjs(newDate).isValid() &&
              dayjs(newDate).year().toString().length === 4
            ) {
              toggleDate(newDate);
            }
          }}
          closeOnSelect={false}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          showDaysOutsideCurrentMonth
          slots={{ day: (props) => renderDay(props.day, null, props) }}
          slotProps={{
            field: { clearable: true },
          }}
        />
      </LocalizationProvider>

      <Stack direction="row" spacing={2} mt={2} alignItems="center">
        <Button
          variant={rangeMode ? "contained" : "outlined"}
          color="secondary"
          onClick={() => {
            setRangeMode(!rangeMode);
            setRangeStart(null);
          }}
        >
          {rangeMode ? "Range Mode: ON" : "Range Mode: OFF"}
        </Button>
      </Stack>

      <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
        {[...new Set(selectedDates.map((d) => dayjs(d).format("YYYY-MM-DD")))].map((dateStr) => (
          <Chip
            key={dateStr}
            label={dayjs(dateStr).format("DD/MM/YYYY")}
            onDelete={() => handleRemoveDate(dateStr)}
            color="primary"
            variant="outlined"
          />
        ))}
      </Stack>
    </div>
  );
}

