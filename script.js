// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

// Selects Start Button as click event
var startButton = document.querySelector(".startbutton");

var secondsLeft = 60;

// Defines each question element group
var listOne = document.getElementById("list-group1");
var listTwo = document.getElementById("list-group2");
var listThree = document.getElementById("list-group3");


var rightAnswer1 = document.querySelector(".correct1");


 
startButton.addEventListener("click", function setTime() {
  

  // Sets interval in variable

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " quasi-seconds* left until Quizzy goes buh-bye...";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
      listOne.className = "visible";
      quizzyQuiz();
      preventDefault();
      




  }, 600);

})

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

function quizzyQuiz() {
rightAnswer1.addEventListener("click", javaQuiz);

    function javaQuiz(){
      listOne.className = "invisible";
      listTwo.className = 'visible';


}
}

