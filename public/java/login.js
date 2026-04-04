const user_name = document.querySelector('input[type="text"]');
const user_password = document.querySelector('input[type="password"]');
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {

  e.preventDefault();

  let user_name_input = user_name.value;
  let user_password_input = user_password.value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let found = false;

  for (let x of users) {
    if (
      user_name_input === x.name && user_password_input === x.password
    ) {
      found = true;
      break;
    }
  }

  if (found) {
    window.location.href="../index.html",alert("Successful Login");
} else {
    alert("Invalid username or password");
  }

  user_name.value = "";
  user_password.value = "";


});