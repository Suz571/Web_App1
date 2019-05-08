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
      if (questionNumber < QUIZ.length) {
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
  $('.container').on('click','#js-submit-button', function(e){
      e.preventDefault();
      console.log('a');
      const userAnswer = $('input:checked');
      //const userAnswer = selected.val();
      const correctAnswer = `${QUIZ[num].correctAns}`;  //scope issue?  object issue? num vs. questionNumber?
      console.log(userAnswer === correctAnswer);
          if (userAnswer === correctAnswer){
              selected.parent().addClass('correct');
              ifUserIsCorrect();
              } else {
              selected.parent().addClass('wrong');
              ifUserisWrong();         
              }
          });
}

//if user is correct- gives correct feedback
function ifUserIsCorrect(){
  generateCorrectFeedback();
  updateScore();
}

//if user is incorrect- incorrect feedback runs
function ifUserisWrong(){
  generateWrongFeedback();
}

//generates user feedback-correct             
function generateCorrectFeedback(){
  //let correctAnswer = `${QUIZ[questionNumber].correctAns}`;
  const correctHtml=      
  `<div class="Feedback">
  <p> CORRECT! </p>
  <div class="feedback-image">
  <img src="http://worldartsme.com/images/halloween-happy-ghost-clipart-1.jpg"
  alt="Happy ghost"/>
  
  </div>
<button type= button class="js-next-button">NEXT</button>
</div>`
  console.log('b');
   $('.container').html(correctHtml);
};`
      `

//generates user feedback- wrong   //need to show correct answer
function generateWrongFeedback(){
  //let correctAnswer = `${QUIZ[questionNumber].correctAns}`;
  console.log('c');
  const wrongHtml=      
  `<div class="Feedback">
  <p> INCORRECT </p>
  <div class="feedback-image">
  <img src="https://www.logolynx.com/images/logolynx/ad/ad5172e4d0f50b1f80da99275472c636.jpeg"
  alt="ghost crossed out"/>

  </div>
<button type= button class="js-next-button">NEXT</button>
</div>`
  $('.container').html(wrongHtml);
};

//update score banner
function updateScore() {
  console.log('d');
  changeScore();
  $('.score').text(score);
}



//starts quiz

startButtonAction();
submitButtonAction();
      
    })