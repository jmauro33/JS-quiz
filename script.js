

// start quiz 

function startQuiz() {

    document.getElementById("start")

    start.addEventListener("click", start)
};

//display questions

var currentQuestionIndex = 0;

function showQuestions() {
   
};
    console.log('called showQuestions')
 var counter = 0;
    for (var i = 0; i < questions.length; i++) {
        var answer = prompt(questions[i][0]);
        if (answer === questions[i][1]) {
            correctAnswers.push([questions[i][0]]);
            counter += 1;
        } else {
            wrongAnswers.push([questions[i][0]]);
        }
  document.getElementById("quiz").textContent = questions[currentQuestionIndex].title





function nextQuestion() {
        currentQuestionIndex++
        showQuestions()
    };
    console.log('called nextQuestion')
    var incrementEl = document.querySelector("#next");

    incrementEl.addEventListener("click", nextQuestion);


function previousQuestion() {
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

function answerScore(questions) {
        var questions =
            document.getElementById(questions)
};
}
