let verify = (document.getElementById("form-btn").onclick = function() {
  let fullName = document.getElementById("fname").value;
  let userPwd = document.getElementById("psw").value;
  let employeesID = document.getElementById("employee").value;

  if (fullName == null || fullName == "") {
    alert("Please name cannot be blank");
  } else if (userPwd == null || userPwd.length < 5) {
    alert("check the password and try again");
  } else if (employeesID == null || employeesID == "") {
    alert("pls enter your employee ID number");
  }

  document.getElementById("form-btn").addEventListener("click", check);

  function check() {
    let defValue = document.getElementById("branch");
    let noneSelect = defValue.value == "Select branch";

    if (noneSelect) {
      alert("please select your branch");
    }

    if (
      document.getElementById("postn").value == "manager" &&
      document.getElementById("branch").value != noneSelect
    ) {
      alert("welcome to manager's online Porter");
    } else {
      alert("Welcome and Good to have u back!");
    }
    return false;
  }
});
