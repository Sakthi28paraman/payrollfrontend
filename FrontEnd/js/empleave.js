var employeeLeaveDetails = [
    { empId: "001", fromDate: "2024-01-01", toDate: "2024-01-05", leaveType: "SL", leaveSalary: 2000, numOfDays: 5, oneDaySalary: 400 },
    { empId: "002", fromDate: "2024-02-10", toDate: "2024-02-15", leaveType: "CL", leaveSalary: 2500, numOfDays: 6, oneDaySalary: 416.67 },
    { empId: "001", fromDate: "2024-03-20", toDate: "2024-03-25", leaveType: "LOP", leaveSalary: 0, numOfDays: 6, oneDaySalary: 0 },
];

var empId = "001"; // Employee ID for which you want to display leave details

var leaveDetailsBody = document.getElementById("leaveDetails");
employeeLeaveDetails.forEach(function(leave) {
    if (leave.empId === empId) {
        var row = document.createElement("tr");
        row.innerHTML = `<td>${leave.empId}</td>
                         <td>${leave.fromDate}</td>
                         <td>${leave.toDate}</td>
                         <td>${leave.leaveType}</td>
                         <td>${leave.leaveSalary}</td>
                         <td>${leave.numOfDays}</td>
                         <td>${leave.oneDaySalary}</td>`;
        leaveDetailsBody.appendChild(row);
    }
});
