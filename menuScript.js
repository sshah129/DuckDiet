// CONTACT FORM VALIDATION
var dailyCaloriesInputed;
var isOverLimit = false;
var currentCalories = 0;

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

function handleNewCalendarData(event){
  event.preventDefault();
  
  var foodItemValue = document.getElementById("foodItemInput").value;
  var inputDateValue = document.getElementById("formDates").value;
  var inputCalorie = document.getElementById("calorieInput").value;

  updateCal(inputCalorie);
  addNewCalendarData(foodItemValue, inputDateValue);
  
}

function addNewCalendarData(foodItem, inputDate){
  if (!isOverLimit){
    var newDiv = document.createElement("div");

    //var newDateDiv = document.createElement("div");

    var newFoodItem = document.createTextNode(foodItem);

    var currentDate = document.getElementById(inputDate);

    newDiv.appendChild(newFoodItem);
    currentDate.appendChild(newDiv);
    //console.log("submitted");
  }
  else {
    return;
  }
}

  
window.onload = () => {
  postForm.addEventListener('submit', handleNewCalendarData);
};


function updateCal(inputCalorie){
  if(dailyCaloriesInputed - inputCalorie < 0){
    alert("You have gone over your daily limit!");
    isOverLimit = true;
  }
  else{
  currentCalories = parseInt(currentCalories);
  dailyCaloriesInputed -= inputCalorie;
  currentCalories += parseInt(inputCalorie);
  document.getElementById("calPar").innerHTML = "Your daily calories remaining " + dailyCaloriesInputed + " calories." + "\n" 
                                                + "Your current calorie count is " + parseInt(currentCalories) + " calories.";
  }
}

function checkCal(){
    dailyCaloriesInputed = document.getElementById("calNum").value;
    currentCalories = document.getElementById("calNum").value;
    currentCalories -= currentCalories;
    document.getElementById("calPar").innerHTML = "Your daily calories remaining " + dailyCaloriesInputed + " calories.";
    var x = document.getElementById("buttonDiv");
    x.style.display = "none"; 
}

function resetCalGoal(){
  var x = document.getElementById("buttonDiv");
  x.style.display = "block";
  document.getElementById("calPar").innerHTML = "";
  dailyCaloriesInputed = null;
}

/** 
function submitConfirm() {
    if (validateFirst() && validateLast() && validateEmail() && validateOccupation()) {
    return alert("Your response has been submitted!");
    }
  };
*/

