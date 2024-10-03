const form = document.getElementById("contact-form");

// Form Elements
var fullName = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");

//Form Errors
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var subjectError = document.getElementById("subjectError");
var messageError = document.getElementById("messageError");

// Modal Elements
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close-btn");

// Function to validate email format using a regular expression
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Function to validate name format using a regular expression
function isValidName(name) {
  const namePattern = /^[A-Za-z\s'-]+$/;
  return namePattern.test(String(name).toLowerCase());
}

form.addEventListener("submit", (event) => {
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  fullName.classList.remove("error-border");
  email.classList.remove("error-border");
  subject.classList.remove("error-border");
  message.classList.remove("error-border");

  nameError.classList.remove("show");
  emailError.classList.remove("show");
  subjectError.classList.remove("show");
  messageError.classList.remove("show");

  let isValid = true;

  if (fullName.value.trim() == "") {
    nameError.textContent = "Please enter your full name.";
    fullName.classList.add("error-border");
    nameError.classList.add("show");
    isValid = false;
  } else if (!isValidName(fullName.value)) {
    nameError.textContent = "Invalid input.";
    fullName.classList.add("error-border");
    nameError.classList.add("show");
  }

  if (email.value.trim() == "") {
    emailError.textContent = "Please enter your email.";
    email.classList.add("error-border");
    emailError.classList.add("show");
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    emailError.textContent = "Invalid input.";
    email.classList.add("error-border");
    emailError.classList.add("show");
    isValid = false;
  }

  if (subject.value.trim() == "") {
    subjectError.textContent = "Please enter a subject.";
    subject.classList.add("error-border");
    subjectError.classList.add("show");
    isValid = false;
  }

  if (message.value.trim() == "") {
    messageError.textContent = "Please enter your message.";
    message.classList.add("error-border");
    messageError.classList.add("show");
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    showModal();
    event.preventDefault();
  }
});

// Show Modal Function
function showModal() {
  modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
