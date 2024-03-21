var nightShiftDetails = [
    { nightShiftId: "001", empId: "101", nightShiftDate: "2024-01-05", nightShiftAmount: 200 },
    { nightShiftId: "002", empId: "102", nightShiftDate: "2024-01-06", nightShiftAmount: 250 },
    { nightShiftId: "003", empId: "103", nightShiftDate: "2024-01-07", nightShiftAmount: 220 },
    { nightShiftId: "004", empId: "101", nightShiftDate: "2024-01-08", nightShiftAmount: 200 },
    { nightShiftId: "005", empId: "102", nightShiftDate: "2024-01-09", nightShiftAmount: 250 },
];

function displayNightShiftDetails(details) {
    var nightShiftDetailsTable = document.getElementById("nightShiftDetails");
    nightShiftDetailsTable.innerHTML = "";

    if (details && details.length > 0) { // Check if details is defined and not empty
        details.forEach(function(shift) {
            var row = nightShiftDetailsTable.insertRow();
            row.insertCell().textContent = shift.nightShiftId;
            row.insertCell().textContent = shift.empId;
            row.insertCell().textContent = shift.nightShiftDate;
            row.insertCell().textContent = shift.nightShiftAmount;

            var numOfDays = details.filter(function(item) {
                return item.empId === shift.empId;
            }).length;
            row.insertCell().textContent = numOfDays;

            var nightShiftSalary = shift.nightShiftAmount * numOfDays;
            row.insertCell().textContent = nightShiftSalary;
        });
    } else {
        var row = nightShiftDetailsTable.insertRow();
        var cell = row.insertCell();
        cell.colSpan = 6; // Span all columns
        cell.textContent = "No matching records found";
    }
}


document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("viewAllButton").addEventListener("click", function() {
        displayNightShiftDetails(nightShiftDetails); 
    });

    document.getElementById("filterByIdButton").addEventListener("click", function() {
        document.getElementById("employeeIdInput").style.display = "block";
        document.getElementById("dateInput").style.display = "none";
    });

    document.getElementById("filterByDateButton").addEventListener("click", function() {
        document.getElementById("employeeIdInput").style.display = "none";
        document.getElementById("dateInput").style.display = "block";
    });

    document.getElementById("filterByIdSubmitButton").addEventListener("click", function() {
        filterByEmployeeId();
    });

    document.getElementById("filterByDateSubmitButton").addEventListener("click", function() {
        filterByDate();
    });
});

function filterByEmployeeId() {
    var employeeId = document.getElementById("empId").value.trim();
    if (employeeId === "") {
        return;
    }

    var filteredShifts = nightShiftDetails.filter(function(shift) {
        return shift.empId === employeeId;
    });

    displayNightShiftDetails(filteredShifts);
}

function filterByDate() {
    var shiftDate = document.getElementById("shiftDate").value.trim();
    if (shiftDate === "") {
        return;
    }

    var filteredShifts = nightShiftDetails.filter(function(shift) {
        return shift.nightShiftDate === shiftDate;
    });

    displayNightShiftDetails(filteredShifts);
}
