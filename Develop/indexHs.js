let hsList = document.getElementById('hs-list')
let score=[];

function highScores(){
    let hS1 = localStorage.getItem("initials")
    let hS2 = localStorage.getItem("score")

    
    let storedScore = JSON.parse(localStorage.getItem("score")); 
    console.log(storedScore)
    if (storedScore !== null) {
      score = storedScore;
    }
    renderScore();

    return 0;
}


function renderScore() {
    
    for (var i = 0; i < score.length; i++) {
        hsList.innerHTML +=`<li> score: ${score[i]}</li>`
    }
  }
  
highScores();