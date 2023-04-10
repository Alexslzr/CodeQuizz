let hsList = document.getElementById('hs-list')
let score = {
  initial:[],
  scores:[]
};

let remove = document.getElementById("remove") //btn element used to remove the saved elements in localstorage

remove.addEventListener("click", clearStorage) //calls the function to remove the storage

function highScores(){

  
    if(hsList.innerHTML === ''){ //if our list is empty, prints the following element
      hsList.innerHTML = '<p>There is no record from previous attemps</p>';
    }

    let storedScore = JSON.parse(localStorage.getItem("scores")); 
    if (storedScore !== null) {
      score.initial = storedScore.val1;
      score.scores = storedScore.val2;
      renderScore();
    }
   
    return 0;
}


function renderScore() {
  hsList.innerHTML = ''//previous val of the hsList element get removed
    for (var i = 0; i < score.initial.length; i++) { 
        hsList.innerHTML += `<li>${i+1}. ${score.initial[i]} - ${score.scores[i]}</li>` //we append each of the elements saved in our local storage in list elements to show the scores
    }
  }

function clearStorage(){ //remove everything in localstorage and add a text
    localStorage.removeItem("scores") 
    hsList.innerHTML = '<p>There is no record from previous attemps</p>';
}

highScores(); //call highscore function