var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;


var choices = ["r", "p", "s"]

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // 新增<img id="rock" src="r.png">
        let choice = document.createElement('img')
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        // 新增點擊事件
        choice.addEventListener('click', selectChoice);

        
        document.getElementById("choices").append(choice)
    }
    document.addEventListener("click", function test(e){
        console.log(e.target.id)
        let imgId = e.target.id;
        // imgId == r ? XXX : 
    })
}

function selectChoice() {
    you = this.id;
    document.getElementById("my-choice").src = you + ".png"

    // 新增電腦隨機出

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById('choice').src = opponent + ".png"

    if(you == opponent) {
        yourScore += 0;
        opponentScore += 0;
    }else {
        if(you == "r") {
            if(opponent == "s") {
                yourScore += 1;
            }
            else if(opponent = "p") {
                opponentScore += 1 ;
            }
        }
        else if(you == "s") {
            if(opponent == "p") {
                yourScore += 1;
            }
            else if(opponent = "r") {
                opponentScore += 1 ;
            }
        }
        else if(you == "p") {
            if(opponent == "r") {
                yourScore += 1;
            }
            else if(opponent = "s") {
                opponentScore += 1 ;
            }
        }
    }
    document.getElementById('my-score').innerText = yourScore;
    document.getElementById('score').innerText = opponentScore
}