// CONTACT FORM VALIDATION
function alertFirst() {
  var x = document.forms["contactForm"]["firstname"].value;
  if (x == "") {
    alert("Please fill in your First Name");
  }
};

function alertLast() {
  var x = document.forms["contactForm"]["lastname"].value;
  if (x == "") {
    alert("Please fill in your Last Name");
  }
};

function alertEmail() {
  var x = document.forms["contactForm"]["email"].value;
  var validemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!(validemail.test(x.toLowerCase()))) {
    alert("Please enter a valid Email");
  }
};

function alertOccupation() {
  var x = document.forms["contactForm"]["occupation"].value;
  if (x == "default") {
    alert("Please select your Occupation");
  }
};

function alertContact() {
  alertFirst();
  alertLast();
  alertEmail();
  alertOccupation();
};


function validateFirst() {
    var x = document.forms["contactForm"]["firstname"].value;
    if (x == "") {
      return false;
    } else {
      return true;
    }
  };

function validateLast() {
    var x = document.forms["contactForm"]["lastname"].value;
    if (x == "") {
      return false;
    } else {
      return true;
    }
  };

function validateEmail() {
    var x = document.forms["contactForm"]["email"].value;
    var validemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(validemail.test(x.toLowerCase()))) {
      return validemail.test(x.toLowerCase())
    } else {
      return true;
    }
  };

function validateOccupation() {
    var x = document.forms["contactForm"]["occupation"].value;
    if (x == "default") {
      return false;
    } else {
      return true;
    }
  };

function validateForm() {
    if (validateFirst() && validateLast() && validateEmail() && validateOccupation()) {
      alert("Your response has been submitted!");
      document.getElementById("contactForm").reset();
      return true;
    } else {
      return false;
    }
}

function submitForm() {
  alertContact();
  if (validateForm()) {
    return true;
  } else {
    return false;
  }
}