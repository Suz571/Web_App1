/*
//renders in DOM
function renderQuestion(){
    $('.questionAnswerForm').html(quizTemplate());
} */

 //start quiz?

function startButtonAction() {
    $('.js-start-button').click((e)=>{
        $('.start_board').remove();
        quizTemplate();
    })
} 

const questionNumber = 0;
const score = 0;

//create quiz page 

function quizTemplate(correctAnswers, question, questionsAnswered) {
    if (questionNumber < QUIZ.length){
        return 
           ` <section class="quiz-page" role= "main">
                <div id="score_banner">
                    <h2>
                      <span id="question-count">Question:${QUIZ.num}/10</span>
                      <span id="score-count">Score: ${correctAns}/${questionsAnswered}</span>
                     </h2>       
                </div>   
                <div class="question_field">'
                '   
                    <h3 id="question">${QUIZ[questionNumber].question}</h3>
                               
                    <p>
                        <label class="answerChoices">
                            <input type="radio" value="${QUIZ[questionNumber].answers[0]}"
                            name="answer" required></input>
                            <span>${QUIZ[questionNumber].answers[0]} </span>
                        </label>
                     </p>
                     <p>
                        <label class="answerChoices">
                            <input type="radio" value="${QUIZ[questionNumber].answers[1]}"
                            name="answer" required></input>
                            <span>${QUIZ[questionNumber].answers[1]} </span>
                        </label>
                    </p>
                    <p>
                        <label class="answerChoices">
                            <input type="radio" value="${QUIZ[questionNumber].answers[2]}"
                            name="answer" required></input>
                            <span>${QUIZ[questionNumber].answers[2]} </span>
                        </label>
                    </p>
                    <button type="submit" class="submit-button">Submit</button>
                    
                </div>                    
            </section>;`
           
    } else {
        generateResults();
        //reStartQuiz();
       $('.questionNum').question(10)
    }
}
/*
//start quiz upon user clicking start button
function runQuiz () {
    $('.start_board').on('click','.js-start-button',function(e){
        $('.start_board').remove();
        $('.questionAnswerForm').css('display','block');
        $('.questionNumber').text(1);
    });
    renderQuestion();
}
*/

//increment question# 
function increaseQuestionNumber (){
    if (questionNumber < QUIZ.length) {
        questionNumber ++;
    }
    $('.questionNUmber').question(questionNumber+1);
}

//increment score
function changeScore(){
    score++;
}


//submit button records answer and gives feedback
function submitButtonAction(){
    $('.container').on('click','#js-submit-button', (e)=>{
        e.preventDefault()

        const userAnswer = $('input:checked');
        //const userAnswer = selected.val();

        const answerIsCorrect = "${QUIZ[questionNumber].correctAnswer}";
            if (userAnswer === correctAnswer){
                selected.parent().addClass('correct');
                ifUserIsCorrect();
                } else {
                selected.parent().addClass('wrong');
                ifUserisIncorrect();         
                }
            });
}

//if user is correct- gives correct feedback
function ifUserIsCorrect(){
    userAnswerFeedbackCorrect();
    updateScore();
}

//if user is incorrect- incorrect feedback runs
function ifUserisIncorrect(){
    userAnswerFeedbackIncorret();
}

//generates user feedback-correct
function userAnswerFeedbackCorret(){
    let correctAnswer = `${QUIZ[questionNumber].correctAnswer}`;
    $('.questionAnswerForm').html(
        `<div class="correctFeedback">
            <p> CORRECT! </p>
            <div class="feedback-image">
            <img src="http://worldartsme.com/images/halloween-happy-ghost-clipart-1.jpg"
            alt="Happy ghost"/>
            </div>
        <button type= button class="js-next-button">NEXT</button>
        </div>`);`
        `

//generates user feedback- incorrect
function userAnswerFeedbackIncorrect(){
    let correctAnswer = `${QUIZ[questionNumber].correctAnswer}`;
    $('.questionAnswerForm').html(
        `<div class="correctFeedback">
            <p> CORRECT! </p>
            <div class="feedback-image">
            <img src="https://www.logolynx.com/images/logolynx/ad/ad5172e4d0f50b1f80da99275472c636.jpeg"
            alt="ghost crossed out"/>
            </div>
        <button type= button class="js-next-button">NEXT</button>
        </div>`);
}

//update score banner
function updateScore() {
    changeScore();
    $('.score').text(score);
}

function generateResults(correctAnswers){
    $('.container').html(
         `<section class="results_board">
             <h2>
                    Final Score: ${correctAnswers} /10
             </h2>
            <button id="js-restart-button">Restart</button>
        </section>`
        )

    }
}
//next button function
function generateNextQuestion (){
    $('.js-next-button').click(function(event){
        increaseQuestionNumber();
        quizTemplate();
        userSelectAnswer(); //review
    });
}

//restarting the quiz
function restartQuiz(){
    $('.js-restart-button').click(function(event){
        location.reload();  //review
    });
}

function createQuiz(){
    startButtonAction();
    quizTemplate();
    
    generateNextQuestion();
}
$(createQuiz);
