const formStudentReg = document.getElementById("myBigForm");

formStudentReg.addEventListener("submit", e => {

    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const studentId = document.getElementById("studentId").value.trim();

    let isValid = true;

    if (firstName === "") {
        document.getElementById("firstNameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("firstNameError").style.display = "none";
    }

    if (lastName === "") {
        document.getElementById("lastNameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("lastNameError").style.display = "none";
    }

    if (!validateEmail(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    if (!validatePassword(password)) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    if (studentId < 10000 || studentId > 99999) {
        document.getElementById("studentIdError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("studentIdError").style.display = "none";
    }

    if (isValid) {
        console.log(`Welcome, ${firstName} ${lastName}!`);
        formStudentReg.reset();
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}