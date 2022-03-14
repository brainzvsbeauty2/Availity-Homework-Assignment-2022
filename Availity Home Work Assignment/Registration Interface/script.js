let isFormValid = false;

function validate(event) {
  //tells the system if this event does not happen it normal action should not be taken
  event.preventDefault();

  // Storing the input information into variable to be accessed by the dom
  let firstName = document.querySelector("#fname");
  let lastName = document.querySelector("#lname");
  let npi = document.querySelector("#npi");
  let baddress = document.querySelector("#baddress");
  let telephone = document.querySelector("#telephone");
  let email = document.querySelector("#email");
  let terms = document.querySelector("#Terms");

  //This will move to a simple thank you page once the form is validated
  if (
    validateFirstName(firstName) &&
    validateLastName(lastName) &&
    validNPI(npi) &&
    validateAddress(baddress) &&
    validatePhoneNumber(telephone) &&
    ValidateEmail(email) &&
    validateCheck(terms)
  ) {
    location.href = "/thankyoupage/page2.html";
  }
}

//nextElementSibling - property returns the next element in the same tree level

function validateFirstName(firstName) {
  var regName = /^[a-zA-Z]+$/;
  if (!regName.test(firstName.value)) {
    firstName.nextElementSibling.style.display = "block";
    return false;
  } else {
    firstName.nextElementSibling.style.display = "none";
    return true;
  }
}

function validateLastName(lastName) {
  var regName = /^[a-zA-Z]+$/;
  if (!regName.test(lastName.value)) {
    lastName.nextElementSibling.style.display = "block";
    return false;
  } else {
    lastName.nextElementSibling.style.display = "none";
    return true;
  }
}

//pareInt a function used to analyze a string element by element and returns a number

function validNPI(npiInput) {
  let npiNumber = parseInt(npiInput.value);

  if (npiInput === NaN) {
    npiInput.nextElementSibling.style.display = "block";
    return false;
  }
  if (npiNumber.toString().length !== 10) {
    npiInput.nextElementSibling.style.display = "block";
    return false;
  } else {
    npiInput.nextElementSibling.style.display = "none";
    return true;
  }
}

function validateAddress(address) {
  if (address.value === "") {
    address.nextElementSibling.style.display = "block";
    return false;
  } else {
    address.nextElementSibling.style.display = "none";
    return true;
  }
}

function validatePhoneNumber(phNumber) {
  let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!regex.test(phNumber.value)) {
    phNumber.nextElementSibling.style.display = "block";
    return false;
  } else {
    phNumber.nextElementSibling.style.display = "none";
    return true;
  }
}

function ValidateEmail(email) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmail.test(email.value)) {
    email.nextElementSibling.style.display = "block";
    return false;
  } else {
    email.nextElementSibling.style.display = "none";
    return true;
  }
}

function validateCheck(terms) {
  if (!terms.checked) {
    document.querySelector(".terms-Section").nextElementSibling.style.display =
      "block";
    return false;
  } else {
    document.querySelector(".terms-Section").nextElementSibling.style.display =
      "none";
    return true;
  }
}
