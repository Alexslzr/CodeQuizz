

let btnEL = document.getElementById("btn");
let mainEl = document.querySelector('main');
let timerEl = document.getElementById('timer');

let timeLeft = 10;
let timerInterval;

btnEL.addEventListener("click", question1)

function question1() {
    setTime()
    mainEl.innerHTML = `
    <h1>Commonly used data types do NOT include:</h1>
    <button class="incorrect">1. Strings</button>
    <button class="incorrect">2. Booleans</button>
    <button id="correct1">3. Alerts</button>
    <button class="incorrect">4. Numbers</button>
    `

    let correct1 = document.getElementById('correct1')

    correct1.addEventListener("click",question2)
}

function question2(){
    mainEl.innerHTML = `
    <h1>The condition in an if/else statement is enclosed with______.</h1>
    <ol>
        <button class="incorrect">1. Quotes</button>
        <button class="incorrect">2. Curly Brackets</button>
        <button id="correct2">3. Parenthesis</button>
        <button class="incorrect">4. Square Brackets</button>
    </ol>`


    let correct2 = document.getElementById('correct2')

    correct2.addEventListener("click",question3)
}

function question3(){
    mainEl.innerHTML = `
    <h1>A very useful tool used during development and debugging for printing content to the debugger is:</h1>
    <ol>
        <button class="incorrect">1. JavaScript</button>
        <button class="incorrect">2. terminal/bash</button>
        <button class="incorrect">3. for loops</button>
        <button id="correct3">4.console.log</button>
    </ol>`

    let correct3 = document.getElementById('correct3')

    correct3.addEventListener("click",scoreBoard)
}

function scoreBoard(){
    stopTime();
    let finalTime = timeLeft;
    mainEl.innerHTML = `
                        <h1>All Done!</h1>
                        <p>Your Final Score is: ${finalTime}</p>
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <p style="margin-right: 10px;">Enter Initials: </p>
                            <textarea placeholder="Please enter your initials" style="margin-right: 10px; width: 300px;"></textarea>
                            <a href="highScores.html"><button id="submit">Submit</button></a>
                        </div>
                        `
    let submit = document.getElementById("submit")
    
    submit.addEventListener("click", highScores)
}

function highScores(){
    return 0;
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
    console.log('ww')
    clearInterval(timerInterval);
}


