

let btnEL = document.getElementById("btn");
let mainEl = document.querySelector('main');
let timerEl = document.getElementById('timer');

let timeLeft = 100;
let timerInterval;
let hsObject = {
    val1: [],
    val2: []
};


let wasCorrect = false;  //variable used to show the state of the previous answer

btnEL.addEventListener("click", question1);  //when btn clicked it starts the quizz

function question1() {
    setTime()    //function called to initialize the timer
    // with the following line of code we manipulat the dom and show the starting question
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
    let pregunta1 = document.getElementById('quest1'); // here we select the div who has inside all the 4 possible options

    pregunta1.addEventListener("click", function(event){
        if(event.target !== event.currentTarget){ 
            let clickedItem = event.target.id; 
            if(clickedItem === 'correct1'){ 
                wasCorrect = true;   //modified the state of the variable
            }else {
                wasCorrect = false;  //means was incorrect option
                wrongAns();  //calls a function that substract 10 sec of out timer
            }
            question2(); //calls the next question function regarding the result of the ans
        }     
        event.stopPropagation();  //used to prevent bubbling
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
    let sect = document.querySelector('section') //appends the result of the previous answer
    if(wasCorrect){  //
        sect.innerHTML+=`<h2 id='ans' style="border-top:1px solid grey; color: grey; font-style: italic">Correct</h2>`
    } else{
        sect.innerHTML+=`<h2 id='ans' style="border-top:1px solid grey; color: grey; font-style: italic">Wrong</h2>`
    }

    answer(); //then it calls a function that hides the answer after 1 second

    let pregunta2 = document.getElementById('quest2');

    pregunta2.addEventListener("click", function(event){
        if(event.target !== event.currentTarget){
            let clickedItem = event.target.id;
            if(clickedItem === 'correct2'){
                wasCorrect = true;
            }else{
                wasCorrect = false;
                wrongAns();
            }
            question3();
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
        sect.innerHTML+=`<h2 id='ans' style="border-top:1px solid grey; color: grey; font-style: italic">Correct</h2>`
    } else{
        sect.innerHTML+=`<h2 id='ans' style="border-top:1px solid grey; color: grey; font-style: italic">Wrong</h2>`
    }

    answer();

    let pregunta3 = document.getElementById('quest3');

    pregunta3.addEventListener("click", function(event){
        if(event.target !== event.currentTarget){
            let clickedItem = event.target.id;
            if(clickedItem === 'correct3'){
                wasCorrect = true;
            }else{
                wasCorrect = false;
                wrongAns();
            }
            scoreBoard(); //now we call a function to introduce our initials and save our score
        }     
        event.stopPropagation();
    })
}

function scoreBoard(){
    stopTime(); //we call a function to stop the time
    let finalTime = timeLeft; //we save the final time in another variable
    timerEl.textContent = finalTime;  // we set timer element to the final value
    mainEl.innerHTML = `
                        <section>
                            <div class="init">
                                <h1>All Done!</h1>
                                <p>Your Final Score is: ${finalTime}</p>
                                <div id="initial" style="display: flex; justify-content: center; align-items: center;">
                                    <p style="margin-right: 10px;">Enter Initials: </p>
                                    <input type="text" placeholder="Please enter your initials" style="margin-right: 10px; width: 300px; height: 30px"/>
                                    <button onclick="location.href='Assets/html/highScores.html'" id="submit">Submit</button>
                                </div>
                            </div>
                        </section>
                        `
 
    let sect = document.querySelector('section') //we print the result from prev answer as well
    if(wasCorrect){
        sect.innerHTML+=`<h2 id='ans' style="border-top:1px solid grey; color: grey; font-style: italic">Correct</h2>`
    } else{
        sect.innerHTML+=`<h2 id='ans' style="border-top:1px solid grey; color: grey; font-style: italic">Wrong</h2>`
    }

    let submit = document.getElementById("submit")
    
    answer();

    submit.addEventListener("click", function(){ 
        let anotherobject = JSON.parse(localStorage.getItem('scores')) //first we get the previous val of the scorse if they exist, we used the parse method to convert it into an object
        
        if(anotherobject !== null){ //if its not null we push the values in to the arrays inside the array we declared before
            hsObject.val1 = anotherobject.val1   //push the val of initials
            hsObject.val2 = anotherobject.val2  //push the val of scores
        }
        

        let initials = document.querySelector('input').value.trim(); //create a variable to save the value introduced on input tag and used trim to clear it from spaces
        if(initials === ""){
            return
        }
        let upInitial = initials.toUpperCase() //we call this method to upper case the initials entered
        hsObject.val1.push(upInitial)  //after uppercase we push the val to our array in the object
        initials.value = ""; //set the input to empty for further entrances
        hsObject.val2.push(finalTime)  //we push the final time to our array
        localStorage.setItem('scores', JSON.stringify(hsObject)) //we transform to string the object in order to save it in our localStorage
    })
}

function setTime() {  //function created to start the time of the quiz, which runs every 1000 miliseconds
    timerInterval = setInterval(function() {
      timeLeft--;  //so variable previously set to 100 sec, decreases by one every second
      timerEl.textContent = "Time : "+ timeLeft;  //we print the current value of the timer 
  
      if(timeLeft === 0) { //when timer get to 0
        clearInterval(timerInterval); //interval gets cleared, that means timer stopped
        scoreBoard();  //so either we finished the test or time gets to 0 it take us to scoreboard function when we introduce our score
      }
  
    }, 1000); //indicates how it will be ran in miliseconds
  }

function stopTime(){ //function called when we finish the test to stop the time
    clearInterval(timerInterval);
}

function answer(){ //used to hide the answer elements 
    let answerTime = 1;
    let answerTimer = setInterval(function(){

    answerTime--;

    if(answerTime === 0){
        clearInterval(answerTimer)
        document.getElementById('ans').hidden = true //this line its used to hide the element with id ans
    }
    },1000)
}

function wrongAns(){ //when this function is called, time gets 10 seconds substracted
    timeLeft = (timeLeft-10);
}