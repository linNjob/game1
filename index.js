// 對不起我沒有邏輯

var r = document.getElementById("r");
var p = document.getElementById("p");
var s = document.getElementById("s");
var you;
var opponent;
var choices = ["r", "p", "s"];
var userScore = 0;
var computerScore = 0;
var timer;
var num = 10;
var timerbox = document.getElementById("timer");
var stoptimerBox = document.getElementById("choices");

window.onload = function () {
  // 計時器
  clearInterval(timer);
  timer = setInterval(function () {
    num -= 1;
    if (num >= 0) {
      timerbox.innerText = "出拳時間還有" + num + " 秒";
    } else {
      document.getElementById("result").innerText = "失敗 超時了";
      timer = clearInterval(timer);
      document.getElementById("choices").style.pointerEvents = "none";
    }
  }, 1000);

  // 選擇出拳後暫停計時

  stoptimerBox.onclick = function () {
    clearInterval(timer);
  };

  //  點擊改變照片

  document.addEventListener("click", function changeImage(e) {
    let imgId = e.target;
    //   console.log(e.target);
    if (imgId == r) {
      imgId.src = "/rock.png";
      document.getElementById("my-choice").src = "./r.png";
      add();
    } else if (imgId == p) {
      imgId.src = "/cloth.png";
      document.getElementById("my-choice").src = "./p.png";
      add();
    } else if (imgId == s) {
      imgId.src = "/shears.png";
      document.getElementById("my-choice").src = "./s.png";
      add();
    }
    document.removeEventListener("click", changeImage);

    // 電腦出拳 & 結果

    function add() {
      opponent = choices[Math.floor(Math.random() * 3)];
      document.getElementById("choice").src = opponent + ".png";

      // 判斷誰勝利
      if (imgId.id == opponent) {
        userScore += 0;
        computerScore += 0;
        document.getElementById("result").innerText = "平手 再來再來";
      }
      // 出石頭
      else {
        if (imgId.id == "r") {
          if (opponent == "s") {
            userScore += 1;
            document.getElementById("result").innerText = "勝利 妳好棒棒";
          } else if (opponent == "p") {
            computerScore += 1;
            document.getElementById("result").innerText = "失敗 底子不行";
          }
        }
        // 出剪刀
        else if (imgId.id == "s") {
          if (opponent == "p") {
            userScore += 1;
            document.getElementById("result").innerText = "勝利 妳好棒棒";
          } else if (opponent == "r") {
            computerScore += 1;
            document.getElementById("result").innerText = "失敗 底子不行";
          }
        }
        // 出布
        else if (imgId.id == "p") {
          if (opponent == "r") {
            userScore += 1;
            document.getElementById("result").innerText = "勝利 妳好棒棒";
          } else if (opponent == "s") {
            computerScore += 1;
            document.getElementById("result").innerText = "失敗 底子不行";
          }
        }
      }
      document.getElementById("my-score").innerText = userScore;
      document.getElementById("score").innerText = computerScore;
    }
  });
};
