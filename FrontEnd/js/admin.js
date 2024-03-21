

function fillText(button, content) {
    var paragraph = button.querySelector('p');
    paragraph.innerText = content;
}

function reModel(button){
    var paragraph = button.querySelector('p');
    paragraph.innerText = "";
}

function loginPage(){
    window.location.href = "login.html";
}

function adminPage(){
    window.location.href = "admin.html";
}

function CreateRedirect(){
    window.location.href = "adminCreate.html";
}
function SalaryCalculationRedirect(){
    window.location.href = "SalaryDetails.html";
}
function viewRedirect(){
    window.location.href = "adminView.html"
}

function viewsalaryDetails(){
    window.location.href = "salaryview.html";
}

function viewleaveDetails(){
    window.location.href = "leaveview.html";
}

function viewNytShiftDetails(){
    window.location.href = "nightShiftview.html";
}
function LeaveDetailRedirect(){
    window.location.href = "leaveDetail.html";
}

function NytShiftDetailRedirect(){
    window.location.href = "nytshiftdetails.html";
}

function EmpSalaryDetailsRedirect(){
    window.location.href = "employeesalary.html"
}


function EmpNytShiftDetailsRedirect(){
    window.location.href = "employeenytshift.html"
}

function EmpLeaveDetailsRedirect(){
    window.location.href = "empleavedetail.html"
}

function PdfGenerator(){
    window.location.href = "pdfgenerator";
}