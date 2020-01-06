function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
      
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);