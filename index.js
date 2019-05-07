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
    
    })
    
    