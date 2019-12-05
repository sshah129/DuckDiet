// MENU SCRIPT
var dailyCaloriesInputed;
var isOverLimit = false;
var currentCalories = 0;

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
    alert("You have gone over your daily calorie limit!");
    isOverLimit = true;
  }
  else{
  currentCalories = parseInt(currentCalories);
  dailyCaloriesInputed -= inputCalorie;
  currentCalories += parseInt(inputCalorie);
  document.getElementById("calPar").innerHTML = "Your daily calories remaining: " + dailyCaloriesInputed + " calories." + "<br><br>" 
                                                + "Your current calorie count is " + parseInt(currentCalories) + " calories.";
  }
}

function checkCal(){
    dailyCaloriesInputed = document.getElementById("calNum").value;
    currentCalories = document.getElementById("calNum").value;
    currentCalories -= currentCalories;
    document.getElementById("calPar").innerHTML = "Your daily calories remaining: " + dailyCaloriesInputed + " calories.";
    var x = document.getElementById("buttonDiv");
    x.style.display = "none"; 
}

function resetCalGoal(){
  var x = document.getElementById("buttonDiv");
  x.style.display = "block";
  document.getElementById("calPar").innerHTML = "";
  dailyCaloriesInputed = null;
}

