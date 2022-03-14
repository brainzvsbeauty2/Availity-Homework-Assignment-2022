let isFormValid = false;

function validate(event) {
  event.preventDefault();
  let firstName = document.querySelector("#fname");
  let lastName = document.querySelector("#lname");
  let npi = document.querySelector("#npi");
  let baddress = document.querySelector("#baddress");
  let telephone = document.querySelector("#telephone");
  let email = document.querySelector("#email");
  let terms = document.querySelector("#Terms");

  validateName(firstName);
  validateName(lastName);
  validNPI(npi);
  validateAddress(baddress);
  validatePhoneNumber(telephone);
  ValidateEmail(email);
  validateCheck(terms);

  if (isFormValid) {
    location.href = "/thankyoupage/page2.html";
  }
}

function validateName(name) {
  var regName = /^[a-zA-Z]+$/;
  if (!regName.test(name.value)) {
    isFormValid = false;
    name.nextElementSibling.style.display = "block";
  } else {
    isFormValid = true;
    name.nextElementSibling.style.display = "none";
  }
}

function validNPI(npiInput) {
  let npiNumber = parseInt(npiInput.value);
  if (npiInput === NaN) {
    isFormValid = false;
    npiInput.nextElementSibling.style.display = "block";
  }
  if (npiNumber.toString().length !== 10) {
    isFormValid = false;
    npiInput.nextElementSibling.style.display = "block";
  } else {
    isFormValid = true;
    npiInput.nextElementSibling.style.display = "none";
  }
}

function validateAddress(address) {
  if (address.value === "") {
    isFormValid = false;
    address.nextElementSibling.style.display = "block";
  } else {
    isFormValid = true;
    address.nextElementSibling.style.display = "none";
  }
}

function validatePhoneNumber(phNumber) {
  let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!regex.test(phNumber.value)) {
    isFormValid = false;
    phNumber.nextElementSibling.style.display = "block";
  } else {
    isFormValid = true;
    phNumber.nextElementSibling.style.display = "none";
  }
}

function ValidateEmail(email) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmail.test(email.value)) {
    isFormValid = false;
    email.nextElementSibling.style.display = "block";
  } else {
    isFormValid = true;
    email.nextElementSibling.style.display = "none";
  }
}

function validateCheck(terms) {
  if (!terms.checked) {
    isFormValid = false;
    document.querySelector(".terms-Section").nextElementSibling.style.display =
      "block";
  } else {
    isFormValid = true;
    document.querySelector(".terms-Section").nextElementSibling.style.display =
      "none";
  }
}
