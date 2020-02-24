// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What musical term is indicates a chord where the notes are played one after another rather than all together?",
        choiceA : "Arpeggio",
        choiceB : "Allegro",
        choiceC : "Clef",
        correct : "A"
    },{
        question : "Where in the human body would you find the medulla oblongata?",
        choiceA : "In the bones",
        choiceB : "In the brain",
        choiceC : "In the heart",
        correct : "B"
    },{
        question : "Which gas is formed when a hydrogen bomb is detonated?",
        choiceA : "Hydrogen",
        choiceB : "Nitrogen",
        choiceC : "Helium",
        correct : "C"
    },{
        question : "Aconcagua is the highest mountain in the Andes. But in which country does it lie?",
        choiceA : "Peru",
        choiceB : "Brazil",
        choiceC : "Argentina.",
        correct : "C"
    },{
        question : "What color does gold leaf appear if you hold it up to the light?",
        choiceA : "Yellow",
        choiceB : "Orange",
        choiceC : "Green",
        correct : "C"
    },{
        question : "In what type of river would you find an oxbow lake?",
        choiceA : "Episodic",
        choiceB : "Braided",
        choiceC : "Meandering",
        correct : "C"
    },{
        question : "What is the capital city of Paraguay?",
        choiceA : "Sucre",
        choiceB : "Quito",
        choiceC : "Asuncion",
        correct : "C"
    },{
        question : "The Cassegranian, Schmidt and Gregorian are all types of what scientific instrument?",
        choiceA : "Microscope",
        choiceB : "Endoscope",
        choiceC : "Telescope",
        correct : "C"
    },{
        question : "What is the family name of the ruling dynasty of Monaco?",
        choiceA : "Cecil",
        choiceB : "Cabot",
        choiceC : "Grimaldi",
        correct : "C"
    },{
        question : "Elvis Presley face which type of disease throughout his lifetime?",
        choiceA : "Asthma",
        choiceB : "Sickle Cell",
        choiceC : "Constipation",
        correct : "C"
    }
    
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "white";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "white";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
   
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















