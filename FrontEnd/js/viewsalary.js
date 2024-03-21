var employeeSalaryDetails = [
    { empId: "001", month: "January", year: 2024, HRA: 5000, Conveyance: 1000, PF: 2000, ESI: 1500, ProfessionTax: 500, TSDIT: 3000, totalEarning: 30000, totalDeduction: 8000, netSalary: 22000 },
    { empId: "002", month: "January", year: 2024, HRA: 6000, Conveyance: 1200, PF: 2500, ESI: 1800, ProfessionTax: 600, TSDIT: 3500, totalEarning: 35000, totalDeduction: 9000, netSalary: 26000 },
    { empId: "003", month: "January", year: 2024, HRA: 5500, Conveyance: 1100, PF: 2200, ESI: 1600, ProfessionTax: 550, TSDIT: 3200, totalEarning: 32000, totalDeduction: 8500, netSalary: 23500 },
    { empId: "002", month: "February", year: 2024, HRA: 5200, Conveyance: 1050, PF: 2100, ESI: 1550, ProfessionTax: 520, TSDIT: 3050, totalEarning: 30500, totalDeduction: 8200, netSalary: 22300 },
    { empId: "004", month: "February", year: 2024, HRA: 5800, Conveyance: 1150, PF: 2400, ESI: 1750, ProfessionTax: 580, TSDIT: 3600, totalEarning: 36000, totalDeduction: 9200, netSalary: 26800 },
    { empId: "003", month: "February", year: 2024, HRA: 5300, Conveyance: 1060, PF: 2250, ESI: 1650, ProfessionTax: 530, TSDIT: 3250, totalEarning: 32500, totalDeduction: 8700, netSalary: 23800 },
    { empId: "001", month: "March", year: 2024, HRA: 5100, Conveyance: 1030, PF: 2150, ESI: 1570, ProfessionTax: 510, TSDIT: 3100, totalEarning: 31000, totalDeduction: 8300, netSalary: 22700 },
    { empId: "004", month: "March", year: 2024, HRA: 5900, Conveyance: 1180, PF: 2450, ESI: 1800, ProfessionTax: 590, TSDIT: 3650, totalEarning: 36500, totalDeduction: 9350, netSalary: 27150 },
    { empId: "003", month: "March", year: 2024, HRA: 5400, Conveyance: 1080, PF: 2300, ESI: 1680, ProfessionTax: 540, TSDIT: 3300, totalEarning: 33000, totalDeduction: 8900, netSalary: 24100 },
    { empId: "001", month: "April", year: 2024, HRA: 5300, Conveyance: 1060, PF: 2250, ESI: 1650, ProfessionTax: 530, TSDIT: 3250, totalEarning: 32500, totalDeduction: 8700, netSalary: 23800 }
];

function displaySalaryDetails() {
    var salaryDetailsTable = document.getElementById("salaryDetails");
    employeeSalaryDetails.forEach(function(employee) {
        var row = salaryDetailsTable.insertRow();
        row.insertCell().textContent = employee.empId;
        row.insertCell().textContent = employee.month;
        row.insertCell().textContent = employee.year;
        row.insertCell().textContent = employee.HRA;
        row.insertCell().textContent = employee.Conveyance;
        row.insertCell().textContent = employee.PF;
        row.insertCell().textContent = employee.ESI;
        row.insertCell().textContent = employee.ProfessionTax;
        row.insertCell().textContent = employee.TSDIT;
        row.insertCell().textContent = employee.totalEarning;
        row.insertCell().textContent = employee.totalDeduction;
        row.insertCell().textContent = employee.netSalary;
    });
}

// window.onload = function() {
//     populateSalaryDetails();
// }
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sortByIdButton").addEventListener("click", function() {
        document.getElementById("employeeIdInput").style.display = "block";
        document.getElementById("monthYearInput").style.display = "none";
    });

    document.getElementById("sortByMonthYearButton").addEventListener("click", function() {
        document.getElementById("employeeIdInput").style.display = "none";
        document.getElementById("monthYearInput").style.display = "block";
    });

    document.getElementById("filterByIdButton").addEventListener("click", function() {
        sortByEmployeeId();
    });

    document.getElementById("filterByMonthYearButton").addEventListener("click", function() {
        sortByMonthYear();
    });
});

function sortByEmployeeId() {
    var employeeId = document.getElementById("empId").value.trim();
    if (employeeId === "") {
        return;
    }

    var filteredDetails = employeeSalaryDetails.filter(function(detail) {
        return detail.empId === employeeId;
    });

    displayEmployeeDetails(filteredDetails);
}


function sortByMonthYear() {
    var monthYear = document.getElementById("month").value.trim() + "-" + document.getElementById("year").value.trim();
    if (monthYear === "-") {
        return;
    }

    var [year, month] = monthYear.split("-");
    month = parseInt(month);

    var filteredDetails = employeeSalaryDetails.filter(function(detail) {
        return detail.year === parseInt(year) && getMonthNumber(detail.month) === month;
    });

    displayEmployeeDetails(filteredDetails);
}


function displayEmployeeDetails(details) {
    var tableBody = document.getElementById("salaryDetails");
    tableBody.innerHTML = "";

    details.forEach(function(detail) {
        var row = tableBody.insertRow();
        row.insertCell().textContent = detail.empId;
        row.insertCell().textContent = detail.month;
        row.insertCell().textContent = detail.year;
        row.insertCell().textContent = detail.HRA;
        row.insertCell().textContent = detail.Conveyance;
        row.insertCell().textContent = detail.PF;
        row.insertCell().textContent = detail.ESI;
        row.insertCell().textContent = detail.ProfessionTax;
        row.insertCell().textContent = detail.TSDIT;
        row.insertCell().textContent = detail.totalEarning;
        row.insertCell().textContent = detail.totalDeduction;
        row.insertCell().textContent = detail.netSalary;
    });
}

function getMonthNumber(month) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(month) + 1;
}

