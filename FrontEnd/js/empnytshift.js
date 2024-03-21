var nightShiftDetails = [
    { nightShiftId: "001", empId: "101", nightShiftDate: "2024-01-05", nightShiftAmount: 200 },
    { nightShiftId: "002", empId: "102", nightShiftDate: "2024-01-06", nightShiftAmount: 250 },
    { nightShiftId: "003", empId: "103", nightShiftDate: "2024-01-07", nightShiftAmount: 220 },
    { nightShiftId: "004", empId: "101", nightShiftDate: "2024-01-08", nightShiftAmount: 200 },
    { nightShiftId: "005", empId: "102", nightShiftDate: "2024-01-09", nightShiftAmount: 250 },
];

function getNightShiftDetails(empId) {
    return nightShiftDetails.filter(function(shift) {
        return shift.empId === empId;
    });
}

// Example usage:
var empId = "101"; // Specify the employee ID for whom you want to retrieve night shift details
var employeeNightShiftDetails = getNightShiftDetails(empId);
var nightShiftDetailsBody = document.getElementById("nightShiftDetails");
        employeeNightShiftDetails.forEach(function(shift) {
            var row = document.createElement("tr");
            row.innerHTML = `<td>${shift.nightShiftId}</td>
                             <td>${shift.empId}</td>
                             <td>${shift.nightShiftDate}</td>
                             <td>${shift.nightShiftAmount}</td>`;
            nightShiftDetailsBody.appendChild(row);
        });
