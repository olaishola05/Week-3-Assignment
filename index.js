let verify = (document.getElementById("form-btn").onclick = function() {
    let fullName = document.getElementById("fname").value;
    let userPwd = document.getElementById("userPass").value;
    let employeesID = document.getElementById("employee").value;

    if (fullName == null || fullName == "") {
        alert("Please name cannot be blank");
    } else if (userPwd == null || userPwd.length < 5) {
        alert("check the password and try again");
    } else if (employeesID == null || employeesID == "") {
        alert("pls enter your employee ID number");
    }
});

function validateSelect(select) {
    let getName = document.getElementById("fname").value;
    let branchName = document.getElementById("branch").value;
    if (select.branch.value == "") {
        alert("Please select your branch");
        select.branch.focus();
        return false;
    }

    if (select.position.value == "") {
        alert("Please select your Position");
        select.position.focus();
        return false;
    }

    if (select.position.value == "manager") {
        alert("Welcome " + getName + "!" + " from " + branchName + " to your private manager's remote office");
        select.position.focus();
        return false;
    } else {
        alert("Hello! " + getName + " from " + branchName + " Welcome to your remote office");
    }
}
