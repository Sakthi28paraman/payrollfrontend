// Function to retrieve details for empId "001"

var employeeLeaveDetails = [
    { empId: "001", fromDate: "2024-01-01", toDate: "2024-01-05", leaveType: "SL", leaveSalary: 2000, numOfDays: 5, oneDaySalary: 400 },
    { empId: "002", fromDate: "2024-02-10", toDate: "2024-02-15", leaveType: "CL", leaveSalary: 2500, numOfDays: 6, oneDaySalary: 416.67 },
    { empId: "001", fromDate: "2024-03-20", toDate: "2024-03-25", leaveType: "LOP", leaveSalary: 0, numOfDays: 6, oneDaySalary: 0 },
];
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
var nightShiftDetails = [
    { nightShiftId: "001", empId: "101", nightShiftDate: "2024-01-05", nightShiftAmount: 200 },
    { nightShiftId: "002", empId: "102", nightShiftDate: "2024-01-06", nightShiftAmount: 250 },
    { nightShiftId: "003", empId: "103", nightShiftDate: "2024-01-07", nightShiftAmount: 220 },
    { nightShiftId: "004", empId: "101", nightShiftDate: "2024-01-08", nightShiftAmount: 200 }
]
function getEmployeeDetails(empId) {
    var employeeDetails = {
        leaveDetails: [],
        salaryDetails: [],
        nightShiftDetails: []
    };

    // Retrieve leave details for empId "001"
    employeeDetails.leaveDetails = employeeLeaveDetails.filter(function(leave) {
        return leave.empId === empId;
    });

    // Retrieve salary details for empId "001"
    employeeDetails.salaryDetails = employeeSalaryDetails.filter(function(salary) {
        return salary.empId === empId;
    });

    // Retrieve night shift details for empId "001"
    employeeDetails.nightShiftDetails = nightShiftDetails.filter(function(shift) {
        return shift.empId === empId;
    });

    return employeeDetails;
}

// Function to generate PDF from employee details
function generatePDF() {
    var employeeId = "001"; // Employee ID for which PDF will be generated
    var employeeDetails = getEmployeeDetails(employeeId);

    var doc = new jsPDF();

    // Add leave details to PDF
    doc.text("Leave Details:", 10, 10);
    doc.autoTable({html: '#leave-table'});

    // Add salary details to PDF
    doc.text("Salary Details:", 10, doc.autoTable.previous.finalY + 10);
    doc.autoTable({html: '#salary-table'});

    // Add night shift details to PDF
    doc.text("Night Shift Details:", 10, doc.autoTable.previous.finalY + 10);
    doc.autoTable({html: '#nightshift-table'});

    doc.save("employee_details.pdf");
}

// Button click event to generate PDF
document.getElementById("generatePDFButton").addEventListener("click", generatePDF);
