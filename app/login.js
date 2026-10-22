const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const error = document.getElementById("error");

// The "Intră" button stays disabled while either field is empty.
function updateSubmit() {
  submit.disabled = email.value.trim() === "" || password.value === "";
}

function showError(message) {
  error.textContent = message;
  error.hidden = false;
}

email.addEventListener("input", updateSubmit);
password.addEventListener("input", updateSubmit);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (submit.disabled) return;

  error.hidden = true;
  submit.disabled = true;
  try {
    if (await signIn(email.value, password.value)) {
      sessionStorage.setItem("user", email.value.trim());
      location.assign("home.html");
      return;
    }
    showError("E-mail sau parolă greșită.");
  } catch {
    showError("Autentificarea nu a reușit. Încearcă din nou.");
  }
  updateSubmit();
});

// Browsers may autofill the fields before this script runs.
updateSubmit();
