// var you;
// var yourScore = 0;
// var opponent;
// var opponentScore = 0;

// var choices = ["r", "p", "s"];

// window.onload = function () {
//   for (let i = 0; i < 3; i++) {
//     // 新增<img id="rock" src="r.png">
//     let choice = document.createElement("img");
//     choice.id = choices[i];
//     choice.src = choices[i] + ".png";
//     // 新增點擊事件
//     choice.addEventListener("click", selectChoice);
//     document.getElementById("choices").append(choice);
//   }
//   document.addEventListener("click", function test(e) {
//     // console.log(e.target);
//     let imgId = e.target;
//     // console.log(imgId);
//     if (imgId == r) {
//       imgId.src = "/rock.png";
//     } else if (imgId == p) {
//       imgId.src = "/cloth.png";
//     } else if (imgId == s) {
//       imgId.src = "/shears.png";
//     }
//   });
// };

// function selectChoice() {
//   you = this.id;
//   document.getElementById("my-choice").src = you + ".png";

//   // 新增電腦隨機出

//   opponent = choices[Math.floor(Math.random() * 3)];
//   console.log(opponent);
//   document.getElementById("choice").src = opponent + ".png";

//   if (you == opponent) {
//     yourScore += 0;
//     opponentScore += 0;
//   } else {
//     if (you == "r") {
//       if (opponent == "s") {
//         yourScore += 1;
//       } else if ((opponent = "p")) {
//         opponentScore += 1;
//       }
//     } else if (you == "s") {
//       if (opponent == "p") {
//         yourScore += 1;
//       } else if ((opponent = "r")) {
//         opponentScore += 1;
//       }
//     } else if (you == "p") {
//       if (opponent == "r") {
//         yourScore += 1;
//       } else if ((opponent = "s")) {
//         opponentScore += 1;
//       }
//     }
//   }
//   document.getElementById("my-score").innerText = yourScore;
//   document.getElementById("score").innerText = opponentScore;
// }

// 對不起我沒有邏輯

var r = document.getElementById("r")
var p = document.getElementById("p")
var s = document.getElementById("s")
var you;
var opponent;
var choices = ["r", "p", "s"];

window.onload = function () {
  for(var i = 0; i < 3; i++) {
    r.src = "./r.png"
    p.src = "./p.png"
    s.src = "./s.png"
  }
  document.addEventListener("click", function changeImage(e) {
    // console.log(e.target);
    let imgId = e.target;
    // console.log(imgId);
    if (imgId == r) {
      imgId.src = "/rock.png";
      document.getElementById('my-choice').src="./r.png"
      add();
    } else if (imgId == p) {
      imgId.src = "/cloth.png";
      document.getElementById('my-choice').src="./p.png"
      add();
    } else if (imgId == s) {
      imgId.src = "/shears.png";
      document.getElementById('my-choice').src="./s.png"
      add();
    }
  });
}

function add () {
  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("choice").src = opponent + ".png";
}


