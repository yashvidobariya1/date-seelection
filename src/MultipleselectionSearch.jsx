// import React, { useMemo, useState } from "react";
// import {
//   ListSubheader,
//   Select,
//   TextField,
//   MenuItem,
//   Checkbox,
//   ListItemText,
// } from "@mui/material";

// function MultipleselectionSearch() {
//   const employeeList = [
//     { _id: "1", userName: "Demo Employee 1" },
//     { _id: "2", userName: "Demo Employee 11" },
//     { _id: "3", userName: "Demo Employee 2" },
//     { _id: "4", userName: "Demo Employee 3" },
//     { _id: "5", userName: "Employee 2" },
//     { _id: "6", userName: "Demo" },
//     { _id: "7", userName: "clients" },
//     { _id: "8", userName: "2" },
//     { _id: "9", userName: "employee 2" },
//     { _id: "10", userName: "mamnager 3" },
//     { _id: "11", userName: "manager 4" },
//     { _id: "12", userName: "superadmin" },
//     { _id: "13", userName: "Demo Employee 2" },
//     { _id: "14", userName: "client" },
//     { _id: "15", userName: "animal" },
//     { _id: "16", userName: "Earth" },
//     { _id: "17", userName: "Tree" },
//     { _id: "18", userName: "Mobiles" },
//   ];

//   // Change selectedEmployee from string to array of strings
//   const [selectedEmployee, setSelectedEmployee] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredEmployeeList = useMemo(() => {
//     return employeeList.filter((emp) =>
//       emp.userName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [employeeList, searchTerm]);

//   const handleEmployeeChange = (event) => {
//     const value = event.target.value;

//     // Handle "allUsers" selection
//     if (value.includes("allUsers")) {
//       if (selectedEmployee.length === employeeList.length) {
//         // If all selected, unselect all
//         setSelectedEmployee([]);
//       } else {
//         // Select all employees
//         setSelectedEmployee(employeeList.map((emp) => emp._id));
//       }
//     } else {
//       setSelectedEmployee(value);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginBottom: "500px" }}>
//       <h1>Multi Select Employee</h1>
//       <Select
//         multiple
//         value={selectedEmployee}
//         onChange={handleEmployeeChange}
//         displayEmpty
//         renderValue={(selected) => {
//           if (selected.length === 0) {
//             return <em>Select Employee</em>;
//           }
//           if (selected.length === employeeList.length) {
//             return "All Employees";
//           }
//           const names = selected
//             .map((id) => employeeList.find((e) => e._id === id)?.userName)
//             .filter(Boolean)
//             .join(", ");
//           return names;
//         }}
//         MenuProps={{
//           disableAutoFocusItem: true,
//           PaperProps: {
//             style: {
//               width: 200,
//               maxHeight: 300,
//             },
//           },
//           MenuListProps: {
//             onMouseDown: (e) => {
//               if (e.target.closest(".search-textfield")) {
//                 e.stopPropagation();
//               }
//             },
//           },
//         }}
//       >
//         <ListSubheader>
//           <TextField
//             size="small"
//             placeholder="Search Employee"
//             fullWidth
//             className="search-textfield"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={(e) => e.stopPropagation()}
//           />
//         </ListSubheader>

//         {/* Select All option */}
//         <MenuItem value="allUsers" dense>
//           <Checkbox
//             checked={selectedEmployee.length === employeeList.length}
//             indeterminate={
//               selectedEmployee.length > 0 &&
//               selectedEmployee.length < employeeList.length
//             }
//           />
//           <ListItemText primary="All Employees" />
//         </MenuItem>

//         {filteredEmployeeList.length > 0 ? (
//           filteredEmployeeList.map((emp) => (
//             <MenuItem key={emp._id} value={emp._id} dense>
//               <Checkbox checked={selectedEmployee.includes(emp._id)} />
//               <ListItemText primary={emp.userName} />
//             </MenuItem>
//           ))
//         ) : (
//           <MenuItem disabled>No employees found</MenuItem>
//         )}
//       </Select>
//     </div>
//   );
// }

// export default MultipleselectionSearch;
