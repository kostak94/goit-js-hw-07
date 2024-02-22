const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const data = {
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value.trim(),
  };
  if (!data.email || !data.password)
    return alert("All form fields must be filled in");

  console.log(data);
  e.target.reset();
}
