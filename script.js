document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let display = document.querySelector(".displayResult");
  let name = document.querySelector("#name");
  let fashion = document.querySelector("#fashion");
  let travel = document.querySelector("#travel");
  let relax = document.querySelector("#relax");
  
  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.

let userName;
let userFashion;
let userTravel;
let userRelax;
let image;
let chairResult;


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    
    userName = name.value;
    userFashion = fashion.value.toLowerCase();
    userTravel = travel.value.toLowerCase();
    userRelax = relax.value.toLowerCase();

    // task 7: create a conditional statement for the responses to Question 1 based on the user input.

    function fashionScore(fashion) {
      if (fashion === "trendy"){
        return 2;
      }
      if (fashion === "vintage"){
        return 3;
      }
      if (fashion === "comfy"){
        return 4;
      }
      if (fashion === "whatever is clean"){
        return 5;
      }
      else {
        return 0;
      }
    }

    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    
    function travelScore(travel) {
      if (travel === "la"){
        return 2;
      }
      if (travel === "paris"){
        return 3;
      }
      if (travel === "hanoi"){
        return 4;
      }
      if (travel === "tokyo"){
        return 5;
      }
      else {
        return 0;
      }
    }

    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
    
    function relaxScore(relax) {
      if (relax === "partying"){
        return 2;
      }
      if (relax === "calling friends"){
        return 3;
      }
      if (relax === "reading"){
        return 4;
      }
      if (relax === "playing video games"){
        return 5;
      }
      else {
        return 0;
      }
    }

    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.

totalScore = fashionScore(userFashion) + travelScore(userTravel) + relaxScore(userRelax);

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.

function displayResult(userName, chairResult, image){
    display.innerHTML = `<h3>According to my extensive and meticulous calculations, you are the <em>${chairResult}</em>! Congratulations, ${userName}.</h3><br><img src="${image}">`
  }

function displayChairResult(totalScore){
  if (totalScore > 12 && totalScore <= 15){
    chairResult = "gummy bear chair";
    image = "https://sc04.alicdn.com/kf/HTB1U7MAdlaE3KVjSZLeq6xsSFXaX.jpg";
    displayResult(userName, chairResult, image);
  }
  if (totalScore > 9 && totalScore <= 12){
    chairResult = "balloon dog stool";
    image = "https://i.pinimg.com/564x/30/76/2e/30762e6b42bc81b8de300870ea43130d.jpg";
  displayResult(userName, chairResult, image);
}
  if (totalScore > 6 && totalScore <= 9){
    chairResult = "limbs chair";
    image = "https://i.pinimg.com/736x/c3/fc/2e/c3fc2e5d3dd5174d042763eacdbc02e6--the-picture-furniture-ideas.jpg";
  displayResult(userName, chairResult, image);
  }
  if (totalScore == 6){
    chairResult = "school chair";
    image = "https://s3-us-west-2.amazonaws.com/assets.eastidahonews.com/wp-content/uploads/2018/04/04201958/S091964014-860x645.jpg";
    displayResult(userName, chairResult, image);
  }
}
    displayChairResult(totalScore);
};
}