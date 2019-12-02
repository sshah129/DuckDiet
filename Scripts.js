// CONTACT FORM VALIDATION

function validateFirst() {
    var x = document.forms["contactForm"]["firstname"].value;
    if (x == "") {
      alert("Please fill in your First Name");
      return false;
    }
  };

function validateLast() {
    var x = document.forms["contactForm"]["lastname"].value;
    if (x == "") {
      alert("Please fill in your Last Name");
      return false;
    }
  };

function validateEmail() {
    var x = document.forms["contactForm"]["email"].value;
    var validemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validemail.test(x.toLowerCase())) {
        pass
    } else {
        alert("Please enter a valid Email");
        return false;
    }
  };

function validateOccupation() {
    var x = document.forms["contactForm"]["occupation"].value;
    if (x == "default") {
      alert("Please select your Occupation");
      return false;
    }
  };

/** 
function submitConfirm() {
    if (validateFirst() && validateLast() && validateEmail() && validateOccupation()) {
    return alert("Your response has been submitted!");
    }
  };
*/
