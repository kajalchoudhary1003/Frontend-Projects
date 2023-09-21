const toggle = document.getElementById("toggle");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("cnfpwd");
const form = document.getElementById("form");
const display = document.getElementById("display");

form.removeChild(display);

password.addEventListener("input", () => {
  form.appendChild(display);
});

toggle.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle below is a different function
  this.classList.toggle("fa-eye");
});

validate = () => {
  if (password.value != confirmpassword.value) {
    confirmpassword.setCustomValidity("Passwords don't Match");
  } else {
    confirmpassword.setCustomValidity("");
  }
};

password.onchange = validate;
confirmpassword.onkeyup = validate;
