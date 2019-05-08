$(document).ready(function(){

    const questionNumber = 0;
    const score = 0;
    
    function quizTemplate(){//(correctAnswers, question, questionsAnswered) {

        if (questionNumber < QUIZ.length){
            return `
                <section class="quiz-page" role= "main">
                    <div id="score_banner">
                        <h2>
                          <span id="question-count">Question:${questionNumber}/10</span>
                          <span id="score-count">Score: ${score}/${questionNumber}</span>
                         </h2>       
                    </div>   
                    <div class="question_field">'
                    '   
                        <h3 id="question">${QUIZ[questionNumber].question}</h3>
                                   
                        <p>
                            <label class="answerChoices">
                                <input type="radio" value="${QUIZ[questionNumber].answers.ans1}"
                                name="answer" required></input>
                                <span>${QUIZ[questionNumber].answers.ans1} </span>
                            </label>
                         </p>
                         <p>
                            <label class="answerChoices">
                                <input type="radio" value="${QUIZ[questionNumber].answers.ans2}"
                                name="answer" required></input>
                                <span>${QUIZ[questionNumber].answers.ans2} </span>
                            </label>
                        </p>
                        <p>
                            <label class="answerChoices">
                                <input type="radio" value="${QUIZ[questionNumber].answers.ans3}"
                                name="answer" required></input>
                                <span>${QUIZ[questionNumber].answers.ans3} </span>
                            </label>
                        </p>
                        <button type="submit" class="submit-button">Submit</button>
                        
                    </div>                    
                </section>;`
               
        } else {
            generateResults();
            reStartQuiz();
           $('.questionNumber').text(10)
        }
    }
    function startButtonAction() {
    
      $('.container').on('click','#js-start-button',function(e){
     
       // $('.container-start').remove();
        // $('.question-container').show(); 
        $('.questionNumber').text(1);
     
        generateQuestions();
      });
      
    }
    
    function generateQuestions(){
        const quizHtml = quizTemplate();
     
      $('.container').html(quizHtml);
    }
    
    //increment question number //on submit button
    function changeQuestionNumber () {
      if (questionNumber < STORE.length) {
        questionNumber ++;
      }
      $('.questionNumber').text(questionNumber+1);
    }
    
    //increment score //on submit button
    function changeScore () {
      score ++;
    };

    startButtonAction();



//Next actions from Submit button. Compare answer with correct answer. 
//generate feedback. change score and question number. 
//generate next question

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
      );

      function startQuizApp() {
        startButtonAction();
        submitButtonAction();
        userAnswerFeedbackCorret();
        userAnswerFeedbackIncorrect();
        generateResults();
        updateScore();

      }
      startQuizApp();
      


     /*
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

    //increment question number //on submit button
    function changeQuestionNumber () {
      if (questionNumber < STORE.length) {
        questionNumber ++;
      }
      $('.questionNumber').text(questionNumber+1);
    }

    //increment score //on submit button
    function changeScore () {
      score ++;
    };


    startButtonAction();
    quizTemplate();

    generateNextQuestion();
}
$(createQuiz);
    })
    */ 
    
    
    
    
    })
    
    