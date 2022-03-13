let fn = document.forms["myForm"]["firstname"].value;
let ln = document.forms["myForm"]["lastname"].value;
let npi = document.forms["myForm"]["npi"].value;
let busAdd = document.forms["myForm"]["baddress"].value;
let number = document.forms["myForm"]["telephone"].value;
let email = document.forms["myForm"]["email"].value;
let checked = document.forms["myForm"]['Terms'].value;

document.querySelector(".submitButton").addEventListener("click", function () {
  validFirstName(fn);
  validLastName(ln);
    validNPI(npi);
    validAddress(busAdd);
  validatePhoneNumber(number);
    ValidateEmail(email);
    validateCheck(checked)
    console.log(email)
});

function validFirstName(firstName) {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!regName.test(firstName)) {
    console.log("Please enter in a valid first name.");
  } 
}

function validLastName(lastName) {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regName.test(lastName)) {
        console.log("Please enter in a valid last name.")
  
  
    }
}


function validNPI(npiInput) {
    npiArray = Array.from(npiInput);

    if (npiArray.length !== 10) {
        console.log('Please enter a valid NPI');
        document.getElementById("invalid").style.display = "block";
    }
}

function validAddress(address) {
    let regAddress = /^[0-9]{1,4}(([\-\/][0-9]{1,4})|(\/[ABCDFGHJKLMNPRSTV]{1,2}))*$/;

    if (!regAddress.test(address)) {
        console.log('Please Enter a Valid business address')
    }
}

function validatePhoneNumber(input_str) {
 let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

   if ( !regex.test(input_str)) {
     console.log("You have entered a invalid telephone")   
  } 
    
}

function ValidateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regex.test(email))
    if (!regex.test(email)) {
    console.log('You entered a invalid email address');
  
  }
}

function validateCheck() {
  if (!document.getElementById("Terms").checked) {
    console.log("You didn't check it");
  }
}
