
function validateForm() {
    const errorMessages = document.querySelectorAll('.error');
    for (const error of errorMessages) {
        if (error.textContent !== "") {
            return false;
        }
    }

    alert("Form submitted successfully!");
    return true;
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
    } else {
        document.getElementById('emailError').textContent = "";
    }
}

function validateConfirmEmail() {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const email = emailInput.value;
    const confirmEmail = confirmEmailInput.value;

    if (email !== confirmEmail) {
        document.getElementById('confirmEmailError').textContent = "Email addresses do not match.";
    } else {
        document.getElementById('confirmEmailError').textContent = "";
    }
}

function validateName(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const errorElement = document.getElementById(`${inputId}Error`);

    const namePattern = /^[a-zA-Z\s]+$/;  // This allows spaces between names (e.g., "John Doe")

    if (inputValue === "") {
        errorElement.textContent = "Name cannot be empty.";
    } else if (!namePattern.test(inputValue)) {
        errorElement.textContent = "Name should only contain characters and no numbers or special characters.";
    } else {
        errorElement.textContent = "";
    }
}

function validateStateCode() {
    const stateCodeInput = document.getElementById('stateCode');
    const stateCode = stateCodeInput.value;

    if (stateCode.length !== 2) {
        document.getElementById('stateCodeError').textContent = "State code should have exactly 2 characters.";
    } else {
        document.getElementById('stateCodeError').textContent = "";
    }
}


function validateContactNumber() {
    const contactInput = document.getElementById('contactNumber');
    const contactValue = contactInput.value;
    const contactError = document.getElementById('contactNumberError');

    const contactPattern = /^[0-9]+$/;  // This ensures the contact is numeric

    if (!contactPattern.test(contactValue)) {
        contactError.textContent = "Contact number should be numeric.";
    } else {
        contactError.textContent = "";
    }
}

function resetForm() {
    document.getElementById('myForm').reset();

    // Clear error messages on form reset
    const errorMessages = document.querySelectorAll('.error');
    for (const error of errorMessages) {
        error.textContent = "";
    }
}