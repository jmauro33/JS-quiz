//variables time left, high scores(array) index of current questions
// var questions
// start quiz 

function startQuiz(){

document.getElementById("start")

    start.addEventListener("click",start)   


};

//show first question




//display question

var currentQuestionIndex = 0;

function showQuestions(){
    console.log('called showQuestions')

     document.getElementById("quiz").textContent = questions[currentQuestionIndex].title

};    


// show the answers


//click functions to move between questions

function nextQuestion(nextQuestion){
    currentQuestionIndex++
    showQuestions()
};

var incrementEl = document.querySelector("#next");

incrementEl.addEventListener("click", nextQuestion);


function previousQuestion(previousQuestion){
    currentQuestionIndex--
    showQuestions()
};
console.log('called previousQuestion')

var decrementEl = document.querySelector("#previous");

decrementEl.addEventListener("click", previousQuestion); 
      

function submitQuiz(){


    console.log('submitted')

document.getElementById("submit")


    submit.addEventListener("click", submitQuiz);
     

};


function answerScore(questions){
    var questions =
    document.getElementById(questions)
};


//toggle timer

//hide everything unncessary

//score the answer
//feedback box
//if wrong subtract time

//timer ticks
//decremnt time left
//update display

//show high showScores
//display scores
//hide unneccesary stuff
//display scores after completing questions
//if done display score
});  