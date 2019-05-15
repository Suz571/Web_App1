$(document).ready(function(){ 

let questionNumber = 0;
let score = 0;
  
function quizTemplate(){

if (questionNumber < QUIZ.length){
  return `
    <section class="quiz-page" role= "main">
      <div id="score_banner">
        <h2>
           <span id="question-count">Question:${questionNumber+1}/10</span>
            <span id="score-count">Score: ${score}/${questionNumber}</span>
         </h2>       
       </div>   
      <form class="question_field">'                    '   
        <h3 id="question">${QUIZ[questionNumber].question}</h3>
        <fieldset>           
          <label class="answerChoices">
            <input type="radio" value="${QUIZ[questionNumber].answers.ans1}"
              name="answer" required></input>
            <span>${QUIZ[questionNumber].answers.ans1} </span>
            </label>                                 
            <label class="answerChoices">
               <input type="radio" value="${QUIZ[questionNumber].answers.ans2}"
                  name="answer" required></input>
                <span>${QUIZ[questionNumber].answers.ans2} </span>
            </label>                       
            <label class="answerChoices">
              <input type="radio" value="${QUIZ[questionNumber].answers.ans3}"
                name="answer" required></input>
              <span>${QUIZ[questionNumber].answers.ans3} </span>
            </label>
            <button type="submit" class="submit-button">Submit</button>
          </fieldset>
       </form>                    
    </section>;`
               
  } else {
  generateResults();
  }
}

function startButtonAction() {
  $('.container').on('click','#js-start-button',function(e){
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
}
    
    //increment score //on submit button
function changeScore () {
 score ++;
};

//Next actions from Submit button. Compare answer with correct answer. 
//generate feedback. change score and question number. 
//generate next question
function getCorrectQuizAnswer (){
  return QUIZ[questionNumber].answers[QUIZ[questionNumber].correctAns];
}

function submitButtonAction(){
  $('.container').on('click','.submit-button', function(){
      //e.preventDefault();
  let userAnswer = $('input:checked').val(); //.val() gets value not just DOM node
  const correctAnswer = getCorrectQuizAnswer(); 
    if (userAnswer === correctAnswer){
      ifUserIsCorrect();
      } else {
      ifUserisWrong();         
      }
    });
}

//if user is correct- gives correct feedback
function ifUserIsCorrect(){
  generateCorrectFeedback();
  changeScore();
}

//if user is incorrect- incorrect feedback runs
function ifUserisWrong(){
  generateWrongFeedback();
}

//generates user feedback-correct             
function generateCorrectFeedback(){
  const correctHtml=      
  `<div class="Feedback">
  <p> CORRECT! </p>
  <div class="feedback_image">
  <img src="http://worldartsme.com/images/halloween-happy-ghost-clipart-1.jpg"
  alt="Happy ghost"/>
  <p> '${QUIZ[questionNumber].answers[QUIZ[questionNumber].correctAns]}'</p>
  
  </div>
<button type= button class="js-next-button">NEXT</button>
</div>`
   $('.container').html(correctHtml);
};`
      `

//generates user feedback- wrong   //need to show correct answer
function generateWrongFeedback(){
   const wrongHtml=      
  `<div class="Feedback">
  <p> INCORRECT </p>
  <div class="feedback_image">
  <img src="https://www.logolynx.com/images/logolynx/ad/ad5172e4d0f50b1f80da99275472c636.jpeg"
  alt="ghost crossed out"/>
  <p> '${QUIZ[questionNumber].answers[QUIZ[questionNumber].correctAns]}'</p>
  </div>
<button type= button class="js-next-button">NEXT</button>
</div>`
  $('.container').html(wrongHtml);
};

//update score banner
/*
function updateScore() {
  changeScore();
  $('#score-count').text(score);
}
*/


//next button. generates new question. shows updated score banner and question count. 
function nextButtonAction(){
  $('.container').on('click','.js-next-button', function(){
       changeQuestionNumber(); 
       generateQuestions();

  })
};

    //results page
function generateResults(){
  const resultsHtml =
    `<div class= "Results">
        <div id="score_banner">
           <h2>
              <span id="question-count">Question:${questionNumber}/10</span>
              <span id="score-count">Score: ${score}/${questionNumber}</span>
            </h2> 
        </div>      
        <p>Great Job!</p>
        <button type= button class="restart-button">Restart</button>
    </div>`;
    
  $('.container').html(resultsHtml);
};

function reStartQuiz(){
    $('.container').on('click','.restart-button',function(e){
      questionNumber = 0;
      score = 0;
    generateQuestions();
  });
};

//starts quiz

startButtonAction();
submitButtonAction();
nextButtonAction();
reStartQuiz();
      
    })