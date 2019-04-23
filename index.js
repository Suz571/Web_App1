//start quiz upon user clicking start button
function runQuiz () {
    $('.quizStart').on('click','.startButton',function(e){
        $('.quizStart').remove();
        $('.questionAnswerForm').css('display','block');
        $('.questionNumber').text(1);
    });
}

//renders in DOM
function renderQuestion(){
    $('.questionAnswerForm').html(quizTemplate());
}

/* //start quiz?

function startButtonAction() {
    $('.js-start-button').click((e)=>{
        quizTemplate();
    })
} */

const questionNumber = 0;
const score = 0;

//create quiz page 

function quizTemplate() {
    if (questionNumber < QUIZ.length){
        return 
           ` <section class="quiz-page" role= "main">
                <div id="score_banner">
                    <h2>
                        <ul>
                            <li>
                                <span id="question-count">Question:${QUIZ.num}/10</span>
                            </li>
                            <li>
                                <span id="score-count">Score: ${correctAns}/${questionsAnswered}</span>
                            </li>
                        </ul> 
                    </h2>           
                </div>   
                <div class="question_field">'
                '<div class="question-${questionNumber}">
                    <h3>${QUIZ[questionNumber].question}</h3>
                </div>
                
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

        const answerIsCorrect = '${QUIZ[questionNumber].correctAnswer}`;
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
    userAnswerFeedbackCorret();
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
            alt="ghost crossed out"/>
            </div>
        <button type= button class="js-next-button">NEXT</button>
        </div>
        `
    )
}




    function generateResults(correctAnswers){
        $('.container').html(
            <section id="results_board">
                <h2>
                    Final Score: ${correctAnswers} /10
                </h2>
                <button id="js-restart-button">Restart</button>
            </section>
        )

    }
}