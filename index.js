
const questionNumber = 0;
const score = 0;

//create quiz page

function quizTemplate() {
    if (questionNumber < QUIZ.length){
        return 
            <section class="quiz-page" role= "amin">
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