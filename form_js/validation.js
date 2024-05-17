"use strict";
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// form evenet

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInput();
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
function checkInput() {
  console.log("checks");
  // remove white space
  const usernameValue = username.ariaValueMax?.trim();
  const emailValue = email.ariaValueMax?.trim();
  const passwordValue = password.ariaValueMax?.trim();
  const password2Value = password2.ariaValueMax?.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") setErrorFor(email, "email cannot be blank");
  else if (!isEmail(emailValue)) setErrorFor(email, "Not a valid email");
  else setSuccessFor(email);
  if (passwordValue === "") setErrorFor(password, "Password cannot be blank");
  else setSuccessFor(password);
  if (password2Value === "")
    setErrorFor(password2, "Password2 cannot be blank");
  else if (passwordValue !== password2Value)
    setErrorFor(password2, "password does not match");
  else setSuccessFor(password2);
}
