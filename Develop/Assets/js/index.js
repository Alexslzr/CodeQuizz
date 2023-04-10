

let btnEL = document.getElementById("btn");
let mainEl = document.querySelector('main');
let timerEl = document.getElementById('timer');

let timeLeft = 100;
let timerInterval;
let hsObject = {
    val1: [],
    val2: []
};


let wasCorrect = false;

btnEL.addEventListener("click", question1);

function question1() {
    setTime()
    mainEl.innerHTML = ` 
                        <section>
                            <h1>Commonly used data types do NOT include:</h1>
                            <div id="quest1" class="quest">
                                <button class="incorrect">1. Strings</button>
                                <button class="incorrect">2. Booleans</button>
                                <button id="correct1">3. Alerts</button>
                                <button class="incorrect">4. Numbers</button>
                            </div>
                        </section>
    `
    let pregunta1 = document.getElementById('quest1');

    pregunta1.addEventListener("click", function(event){
        if(event.target !== event.currentTarget){
            let clickedItem = event.target.id;
            if(clickedItem === 'correct1'){
                wasCorrect = true;
                question2();
            }else{
                wasCorrect = false;
                wrongAns();
                question2();
            }
        }     
        event.stopPropagation();
    })
}

function question2(){
    mainEl.innerHTML = `
                        <section>
                            <h1>The condition in an if/else statement is enclosed with______.</h1>
                            <div id="quest2" class="quest">
                                <button class="incorrect">1. Quotes</button>
                                <button class="incorrect">2. Curly Brackets</button>
                                <button id="correct2">3. Parenthesis</button>
                                <button class="incorrect">4. Square Brackets</button>
                            </div>
                        </section>
    `
    let sect = document.querySelector('section')
    if(wasCorrect){
        sect.innerHTML+=`<h2 id='ans' data-state="hidden" style="border-top:1px solid grey; color: grey; font-style: italic">Correct</h2>`
    } else{
        sect.innerHTML+=`<h2 id='ans' data-state="hidden" style="border-top:1px solid grey; color: grey; font-style: italic">Wrong</h2>`
    }

    answer();

    let pregunta2 = document.getElementById('quest2');

    pregunta2.addEventListener("click", function(event){
        if(event.target !== event.currentTarget){
            let clickedItem = event.target.id;
            if(clickedItem === 'correct2'){
                wasCorrect = true;
                question3();
            }else{
                wasCorrect = false;
                wrongAns();
                question3();
            }
        }     
        event.stopPropagation();
    })
}

function question3(){
    mainEl.innerHTML = `
                        <section>
                            <h1>A very useful tool used during development and debugging for printing content to the debugger is:</h1>
                            <div id="quest3" class="quest">
                                <button class="incorrect">1. JavaScript</button>
                                <button class="incorrect">2. terminal/bash</button>
                                <button class="incorrect">3. for loops</button>
                                <button id="correct3">4.console.log</button>
                            </div>
                        </section>
    `
    let sect = document.querySelector('section')
    if(wasCorrect){
        sect.innerHTML+=`<h2 id='ans' data-state="hidden" style="border-top:1px solid grey; color: grey; font-style: italic">Correct</h2>`
    } else{
        sect.innerHTML+=`<h2 id='ans' data-state="hidden" style="border-top:1px solid grey; color: grey; font-style: italic">Wrong</h2>`
    }

    answer();

    let pregunta3 = document.getElementById('quest3');

    pregunta3.addEventListener("click", function(event){
        if(event.target !== event.currentTarget){
            let clickedItem = event.target.id;
            if(clickedItem === 'correct3'){
                wasCorrect = true;
                scoreBoard();
            }else{
                wasCorrect = false;
                wrongAns();
                scoreBoard();
            }
        }     
        event.stopPropagation();
    })
}

function scoreBoard(){
    stopTime();
    let finalTime = timeLeft;
    timerEl.textContent = finalTime;
    mainEl.innerHTML = `
                        <section>
                            <div class="init">
                                <h1>All Done!</h1>
                                <p>Your Final Score is: ${finalTime}</p>
                                <div id="initial" style="display: flex; justify-content: center; align-items: center;">
                                    <p style="margin-right: 10px;">Enter Initials: </p>
                                    <input type="text" placeholder="Please enter your initials" style="margin-right: 10px; width: 300px; height: 30px"/>
                                    <a href="Assets/html/highScores.html"><button id="submit">Submit</button></a>
                                </div>
                            </div>
                        </section>
                        `
 
    let sect = document.querySelector('section')
    if(wasCorrect){
        sect.innerHTML+=`<h2 id='ans' data-state="hidden" style="border-top:1px solid grey; color: grey; font-style: italic">Correct</h2>`
    } else{
        sect.innerHTML+=`<h2 id='ans' data-state="hidden" style="border-top:1px solid grey; color: grey; font-style: italic">Wrong</h2>`
    }

    let submit = document.getElementById("submit")
    
    answer();

    submit.addEventListener("click", function(){
        let anotherobject = JSON.parse(localStorage.getItem('scores'))
        console.log(anotherobject)
        
        if(anotherobject !== null){
            hsObject.val1 = anotherobject.val1
            hsObject.val2 = anotherobject.val2
        }
        

        let initials = document.querySelector('input').value.trim();
        if(initials === ""){
            return
        }
        let upInitial = initials.toUpperCase()
        hsObject.val1.push(upInitial)
        initials.value = "";
        hsObject.val2.push(timeLeft)
        localStorage.setItem('scores', JSON.stringify(hsObject))
    })
}

function setTime() {
    timerInterval = setInterval(function() {
      timeLeft--;
      timerEl.textContent = "Time : "+ timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        scoreBoard();
      }
  
    }, 1000);
  }

function stopTime(){
    clearInterval(timerInterval);
}

function answer(){
    let answerTime = 1;
    let answerTimer = setInterval(function(){

    answerTime--;

    if(answerTime === 0){
        clearInterval(answerTimer)
        document.getElementById('ans').hidden = true
    }
    },1000)
}

function wrongAns(){
    timeLeft = (timeLeft-10);
}