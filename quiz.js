$(document).ready(function(){
    correct = ["Cascading Style Sheets", "style", "font", "text-transform and capitalize"];
    questions = ["What does CSS stand for?",
                "Which HTML tag is used to define an internal style sheet?",
                "Which HTML attribute is used to define inline styles?",
                
                
               ]
    choice_options = [["Creative Style Sheets","Computer Style Sheets","Colorful Style Sheets","Cascading Style Sheets"],
                      ["style","script","css","html"]
                      ["font ","style","class","styles"]
                      ]
                    
    
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>"); 
    $('.question').append ("<p class='d'> Q1. What does CSS stand for? </p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Creative Style Sheets</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='b'>Computer Style Sheets</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='c'>Colorful Style Sheets</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='d'>Cascading Style Sheets</label>")
   
  
    $('.question').append ("<p class='d'> Q2. Which HTML tag is used to define an internal style sheet? </p>");
    $('.question').append ("<label><input type='radio' name='q2' value='a'>style</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='b'>script</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='c'>css</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='d'>html</label>")
    
    
    $('.question').append ("<p class='d'> Q3. Which HTML attribute is used to define inline styles? </p>");
    $('.question').append ("<label><input type='radio' name='q3' value='a'>font</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='b'>style</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='c'>class</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='d'>styles</label>")
   
    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                }
         });
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 

});