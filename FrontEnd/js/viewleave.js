var employeeLeaveDetails = [
    { empId: "001", fromDate: "2024-01-01", toDate: "2024-01-05", leaveType: "SL", leaveSalary: 2000, numOfDays: 5, oneDaySalary: 400 },
    { empId: "002", fromDate: "2024-02-10", toDate: "2024-02-15", leaveType: "CL", leaveSalary: 2500, numOfDays: 6, oneDaySalary: 416.67 },
    { empId: "003", fromDate: "2024-03-20", toDate: "2024-03-25", leaveType: "LOP", leaveSalary: 0, numOfDays: 6, oneDaySalary: 0 },
];

function displayLeaveDetails(details) {
    var leaveDetailsTable = document.getElementById("leaveDetails");
    leaveDetailsTable.innerHTML = ""; // Clear existing content

    if (details) { // Check if details is defined
        details.forEach(function(leave) {
            var row = leaveDetailsTable.insertRow();
            row.insertCell().textContent = leave.empId;
            row.insertCell().textContent = leave.fromDate;
            row.insertCell().textContent = leave.toDate;
            row.insertCell().textContent = leave.leaveType;
            row.insertCell().textContent = leave.leaveSalary;
            row.insertCell().textContent = leave.numOfDays;
            row.insertCell().textContent = leave.oneDaySalary;
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("viewAllButton").addEventListener("click", function() {
        displayLeaveDetails(employeeLeaveDetails);
    });

    document.getElementById("filterByIdSubmitButton").addEventListener("click", function() {
        filterByEmployeeId();
    });

    document.getElementById("filterByDateSubmitButton").addEventListener("click", function() {
        filterByDateRange();
    });

    document.getElementById("filterByIdButton").addEventListener("click", function() {
        document.getElementById("employeeIdInput").style.display = "block";
        document.getElementById("dateRangeInput").style.display = "none";
    });

    document.getElementById("filterByDateButton").addEventListener("click", function() {
        document.getElementById("employeeIdInput").style.display = "none";
        document.getElementById("dateRangeInput").style.display = "block";
    });
});


function filterByEmployeeId() {
    // console.log("clicked1");
    var employeeId = document.getElementById("empId").value.trim();
    if (employeeId === "") {
        return;
    }

    var filteredDetails = employeeLeaveDetails.filter(function(detail) {
        return detail.empId === employeeId;
    });

    displayLeaveDetails(filteredDetails);
}

function filterByDateRange() {
    // console.log("clicked2");
    var fromDate = new Date(document.getElementById("fromDate").value.trim());
    var toDate = new Date(document.getElementById("toDate").value.trim());
    if (!fromDate || !toDate) {
        return;
    }

    var filteredDetails = employeeLeaveDetails.filter(function(detail) {
        var leaveFromDate = new Date(detail.fromDate);
        var leaveToDate = new Date(detail.toDate);
        return leaveFromDate >= fromDate && leaveToDate <= toDate;
    });

    displayLeaveDetails(filteredDetails);
}
