const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");

function passwordValidate() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match!")
    } else {
        confirmPassword.setCustomValidity("")
    }
}

password.onchange = passwordValidate;
confirmPassword.onkeyup = passwordValidate;