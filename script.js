

// start quiz 

function startQuiz(){

document.getElementById("start")

    start.addEventListener("click",start)   
};

//display questions

var currentQuestionIndex = 0;

function showQuestions(){
    
    document.getElementById("quiz").textContent = questions[currentQuestionIndex].title

};    
console.log('called showQuestions')

// show the answers

function nextQuestion(){
    currentQuestionIndex++
    showQuestions()
};
console.log('called nextQuestion')
var incrementEl = document.querySelector("#next");

incrementEl.addEventListener("click", nextQuestion);


function previousQuestion(){
    currentQuestionIndex--
    showQuestions()
};
console.log('called previousQuestion')

var decrementEl = document.querySelector("#previous");

decrementEl.addEventListener("click", previousQuestion); 

      

function submitQuiz(){

document.getElementById("submit")
    submit.addEventListener("click", submitQuiz);
};
console.log('submitted')

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
