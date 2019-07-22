const emailDot = document.querySelector("#email-dot");
const nameDot = document.querySelector("#name-dot");
const organisationDot = document.querySelector("#organisation-dot");
const name = document.querySelector(".name-input");
const email = document.querySelector(".email-input");
const organisation = document.querySelector(".organisation-input");
const emailLabel = document.getElementById("email-label");
const nameLabel = document.getElementById("name-label");
const organisationLabel = document.getElementById("organisation-label");
const submit = document.getElementById("submit");

// Check if email input is empty
const validateEmail = () => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email.value).toLowerCase());
};

// Check if text input is empty 
const validateText = element => {
  return element.value !== "";
};

// Prevent default form submission - Only use if not wpcf7
submit.addEventListener("click", (event) => {
  event.preventDefault()
});

// On submit check if boxes are filled in / throw error
const checkSubmission = () => {
  if (!validateEmail() || email.value === "") {
    emailLabel.textContent = "Please enter a valid email";
    emailLabel.style.color = "#f05056";
  }

  if (!validateText(name)) {
    nameLabel.textContent = "Please enter a name";
    nameLabel.style.color = "#f05056";
  }

  if (!validateText(organisation)) {
    organisationLabel.textContent = "This field is required";
    organisationLabel.style.color = "#f05056";
  }
};

// On user input actions
// Check if name input is empty
const checkNameOnInput = () => {
  if (name.value === "") {
    nameDot.className = "red";
  } else {
    nameDot.className = "green";
    nameLabel.textContent = "Full name";
    nameLabel.style.color = "#16232d";
  }
};

// Check if email input is empty
const checkEmailOnInput = () => {
  if (!validateEmail() || email.value === "") {
    emailDot.className = "red";
  } else {
    emailDot.className = "green";
  }
};

// Restore email text label on input 
const restoreEmailLabel = () => {
  if (email.value != "") {
    emailLabel.textContent = "Email";
    emailLabel.style.color = "#16232d";
  } else {
    return;
  }
}

// Check if organisation input empty
const checkOrganisationOnInput = () => {
  if (organisation.value === "") {
    organisationDot.className = "red";
  } else {
    organisationDot.className = "green";
    organisationLabel.textContent = "Organisation";
    organisationLabel.style.color = "#16232d";
  }
};


submit.addEventListener("click", checkSubmission);

name.addEventListener("input", checkNameOnInput);

email.addEventListener("input", () => {
  checkEmailOnInput();
  restoreEmailLabel();
});
organisation.addEventListener("input", checkOrganisationOnInput);