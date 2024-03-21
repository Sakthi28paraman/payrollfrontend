var users = {
    "admin": {"password": "1234", "type": "admin"},
    
    "001": {
        "password": "password001",
        "type": "employee"
    }
};



function loginFunc(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var selectedUserType = document.querySelector('input[name="userType"]:checked').value;


    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("errorMessage").innerHTML = "Please enter both username and password.";
        return;
    }
    var found = false;
            for (var user in users) {
                if (users.hasOwnProperty(user)) {
                    if (user === username && users[user].password === password && users[user].type === selectedUserType) {
                        if (selectedUserType === "admin") {
                            window.location.href = "admin.html";
                        } else if (selectedUserType === "employee") {
                            window.location.href = "employee.html";
                        }
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                document.getElementById("errorMessage").innerHTML = "Invalid username or password. Please try again.";
            }
    return username;
}


// var employeeSalaryDetails = [
//     { empId: "001", month: "January", year: 2024, HRA: 5000, Conveyance: 1000, PF: 2000, ESI: 1500, ProfessionTax: 500, TSDIT: 3000, totalEarning: 30000, totalDeduction: 8000, netSalary: 22000 },
//     { empId: "002", month: "January", year: 2024, HRA: 6000, Conveyance: 1200, PF: 2500, ESI: 1800, ProfessionTax: 600, TSDIT: 3500, totalEarning: 35000, totalDeduction: 9000, netSalary: 26000 },
//     { empId: "003", month: "January", year: 2024, HRA: 5500, Conveyance: 1100, PF: 2200, ESI: 1600, ProfessionTax: 550, TSDIT: 3200, totalEarning: 32000, totalDeduction: 8500, netSalary: 23500 },
//     { empId: "002", month: "February", year: 2024, HRA: 5200, Conveyance: 1050, PF: 2100, ESI: 1550, ProfessionTax: 520, TSDIT: 3050, totalEarning: 30500, totalDeduction: 8200, netSalary: 22300 },
//     { empId: "004", month: "February", year: 2024, HRA: 5800, Conveyance: 1150, PF: 2400, ESI: 1750, ProfessionTax: 580, TSDIT: 3600, totalEarning: 36000, totalDeduction: 9200, netSalary: 26800 },
//     { empId: "003", month: "February", year: 2024, HRA: 5300, Conveyance: 1060, PF: 2250, ESI: 1650, ProfessionTax: 530, TSDIT: 3250, totalEarning: 32500, totalDeduction: 8700, netSalary: 23800 },
//     { empId: "001", month: "March", year: 2024, HRA: 5100, Conveyance: 1030, PF: 2150, ESI: 1570, ProfessionTax: 510, TSDIT: 3100, totalEarning: 31000, totalDeduction: 8300, netSalary: 22700 },
//     { empId: "004", month: "March", year: 2024, HRA: 5900, Conveyance: 1180, PF: 2450, ESI: 1800, ProfessionTax: 590, TSDIT: 3650, totalEarning: 36500, totalDeduction: 9350, netSalary: 27150 },
//     { empId: "003", month: "March", year: 2024, HRA: 5400, Conveyance: 1080, PF: 2300, ESI: 1680, ProfessionTax: 540, TSDIT: 3300, totalEarning: 33000, totalDeduction: 8900, netSalary: 24100 },
//     { empId: "001", month: "April", year: 2024, HRA: 5300, Conveyance: 1060, PF: 2250, ESI: 1650, ProfessionTax: 530, TSDIT: 3250, totalEarning: 32500, totalDeduction: 8700, netSalary: 23800 }
// ];

// // Retrieve logged-in employee's ID (replace with actual logged-in ID)
// var loggedInEmpId = empId;
// console.log(loggedInEmpId);

// // Filter employee salary details based on logged-in employee's ID
// var filteredSalaryDetails = employeeSalaryDetails.filter(function(salary) {
//     return salary.empId === loggedInEmpId;
// });

// // Display filtered salary details in the table
// var salaryDetailsBody = document.getElementById("salaryDetails");
// filteredSalaryDetails.forEach(function(salary) {
//     var row = document.createElement("tr");
//     row.innerHTML = `<td>${salary.empId}</td>
//                      <td>${salary.month}</td>
//                      <td>${salary.year}</td>
//                      <td>${salary.HRA}</td>
//                      <td>${salary.Conveyance}</td>
//                      <td>${salary.PF}</td>
//                      <td>${salary.ESI}</td>
//                      <td>${salary.ProfessionTax}</td>
//                      <td>${salary.TSDIT}</td>
//                      <td>${salary.totalEarning}</td>
//                      <td>${salary.totalDeduction}</td>
//                      <td>${salary.netSalary}</td>`;
//     salaryDetailsBody.appendChild(row);
// });



