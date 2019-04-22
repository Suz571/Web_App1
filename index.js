function startButtonAction() {
    $('.js-start-button').click((e)=>{
        quizTemplate();
    })
}

const questionNumber = 0;
const score = 0;

//create quiz page

function quizTemplate() {
    if (questionNumber < QUIZ.length){
        return 
            <section class="quiz-page" role= "main">
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
                <form>
                `<div class="question-${questionNumber}">
                    <h3>${QUIZ[questionNumber].question}</h3>
                </div>
                
                    <fieldset>
                        <label class="answerChoices">
                            <input type="radio" value="${QUIZ[questionNumber].answers[0]}"
                            name="answer" required></input>
                        </label>
                        <label class="answerChoices">
                            <input type="radio" value="${QUIZ[questionNumber].answers[1]}"
                            name="answer" required></input>
                        </label>
                        <label class="answerChoices">
                            <input type="radio" value="${QUIZ[questionNumber].answers[2]}"
                            name="answer" required></input>
                        </label>
                    <button type="submit" class="submit-button">Submit</button>
                    </fieldset>
                </form>                    
            </section>
           
    } else {
        generateResults();
        //reStartQuiz();
       // $('.questionNum').question(10)
    }


    }

function submitButtonAction(){
    $('.container').on('click','#js-submit-button', (e)=>{
        e.preventDefault()

        const userAnswer = $('input:checked');

        const answerIsCorrect = checkUserAnswer(userAnswer);
            if (answerIsCorrect){
                correctFeedback();
            } else {
                incorrectFeedback();
            }
    });
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