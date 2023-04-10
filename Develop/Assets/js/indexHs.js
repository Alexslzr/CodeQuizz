let hsList = document.getElementById('hs-list')
let score = {
  initial:[],
  scores:[]
};

let hS1 = localStorage.getItem("initials")
let remove = document.getElementById("remove")

remove.addEventListener("click", clearStorage)

function highScores(){

  
    if(hsList.innerHTML === ''){
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
  hsList.innerHTML = ''
    for (var i = 0; i < score.initial.length; i++) {
        hsList.innerHTML += `<li>${i+1}. ${score.initial[i]} - ${score.scores[i]}</li>`
    }
  }

function clearStorage(){
    localStorage.removeItem("scores")
    hsList.innerHTML = '<p>There is no record from previous attemps</p>';
}

highScores();