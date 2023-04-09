let hsList = document.getElementById('hs-list')
let score = {
  initial:[],
  scores:[]
};


let hS1 = localStorage.getItem("initials")
let remove = document.getElementById("remove")

remove.addEventListener("click", clearStorage)

function highScores(){

    let storedScore = JSON.parse(localStorage.getItem("scores")); 
    console.log(storedScore)
    if (storedScore !== null) {
      score.initial = storedScore.val1;
      score.scores = storedScore.val2;
    }
    console.log(score)
    renderScore();

    return 0;
}


function renderScore() {
  console.log(score.initial.length)
    for (var i = 0; i < score.initial.length; i++) {
        hsList.innerHTML += `<li>${i+1}.- ${score.initial[i]} score: ${score.scores[i]}</li>`
    }
  }

function clearStorage(){
    localStorage.removeItem("scores")
    hsList.innerHTML = '<p>There is record from previous attemps</p>';
}
  
highScores();