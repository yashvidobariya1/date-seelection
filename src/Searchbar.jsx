// import React, { useMemo, useState } from "react";
// import { ListSubheader, Select, TextField, MenuItem } from "@mui/material";

// function Searchbar() {
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

//   const [selectedEmployee, setSelectedEmployee] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredEmployeeList = useMemo(() => {
//     return employeeList.filter((emp) =>
//       emp.userName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [employeeList, searchTerm]);

//   const handleEmployeeChange = (value) => {
//     setSelectedEmployee(value);
//     setSearchTerm("");
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Employee Select</h1>
//       <Select
//         value={selectedEmployee}
//         onChange={(e) => handleEmployeeChange(e.target.value)}
//         displayEmpty
//         renderValue={(selected) => {
//           if (selected === "") {
//             return <em>Select Employee</em>;
//           }
//           if (selected === "allUsers") {
//             return "All Employees";
//           }
//           const emp = employeeList.find((e) => e._id === selected);
//           return emp ? emp.userName : "Unknown";
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

//         <MenuItem value="allUsers">All Employees</MenuItem>

//         {filteredEmployeeList.length > 0 ? (
//           filteredEmployeeList.map((emp) => (
//             <MenuItem key={emp._id} value={emp._id}>
//               {emp.userName}
//             </MenuItem>
//           ))
//         ) : (
//           <MenuItem disabled>No employees found</MenuItem>
//         )}
//       </Select>
//     </div>
//   );
// }

// export default Searchbar;
