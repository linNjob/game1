// 對不起我沒有邏輯

var you;
var opponent;
var choices = ["r", "p", "s"];
var allChoices = ["r", "p", "s", "a", "d"];
var userScore = 0;
var computerScore = 0;
var timer;
var finalTimer;
var num = 6;
var count = 6;
var time = document.getElementById("timeBox")
var timerbox = document.getElementById("timer");
var finalTimerBox = document.getElementById("finalTimer");
var finalTimerBoxSecond = document.getElementById("finalTimerSecond");

var stoptimerBox = document.getElementById("choices");
var stopTimerBoxWins = document.getElementById("second");
var stoptimerBoxLose = document.getElementById("third");

var rpsWrapper = document.getElementById("rpsWrapper");
var rpsUserLoses = document.getElementById("rpsUserLoses");
var rpsUserWins = document.getElementById("rpsUserWins");







// 第一關計時器
clearInterval(timer);
timer = setInterval(function () {
  if (rpsWrapper.style.display == "block") {
    num -= 1;
    if (num >= 0) {
      timerbox.innerText = "出拳時間還有" + num + " 秒";
    } else {
      document.getElementById("result").innerText = "失敗 超時了";
      document.getElementById("finalResult").innerText = "失敗 超時了";
      timer = clearInterval(timer);
      document.getElementById("choices").style.pointerEvents = "none";
      document.getElementById("second").style.pointerEvents = "none";
      loses();
      setTimeout("rpsWrapper.style.display='none' ", 5000);
      setTimeout("rpsUserLoses.style.display='block' ", 5000);
    }
  }
}, 1000);

// 第二關計時器
clearInterval(finalTimer);
finalTimer = setInterval(function () {
  if (
    rpsUserLoses.style.display == "block" ||
    rpsUserWins.style.display == "block"
  ) {
    count -= 1;
    if (count >= 0) {
      finalTimerBox.innerText = "出拳時間還有" + count + "秒";
      finalTimerBoxSecond.innerText = "出拳時間還有" + count + " 秒";
    } else {
      document.getElementById("finalResultSecond").innerText = "失敗 超時了";
      document.getElementById("finalResult").innerText = "失敗 超時了";
      finalTimer = clearInterval(finalTimer);
      document.getElementById("third").style.pointerEvents = "none";
      loses();
    }
  }
}, 1000);

// 選擇出拳後暫停計時

stoptimerBox.onclick = function () {
  clearInterval(timer);
};
stopTimerBoxWins.onclick = function () {
  clearInterval(finalTimer);
};
stoptimerBoxLose.onclick = function () {
  clearInterval(finalTimer);
};

//  點擊改變照片

document.addEventListener("click", function changeImage(e) {
  let imgId = e.target;
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
  } else if (imgId == a) {
    document.getElementById("my-choice").src = "./a.png";
    add();
  } else if (imgId == d) {
    document.getElementById("my-choice").src = "./d.png";
    add();
  }
  document.removeEventListener("click", changeImage);

  // 電腦出拳 & 結果

  function add() {
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("choice").src = opponent + ".png";

    // 判斷誰勝利
    if (imgId.id == opponent) {
      document.getElementById("result").innerText = "平手 再來再來";
      matchDraw();
    }
    // 出石頭
    else {
      if (imgId.id == "r") {
        if (opponent == "s") {
          document.getElementById("result").innerText = "勝利 妳好棒棒";
          winners();
        } else if (opponent == "p") {
          document.getElementById("result").innerText = "失敗 底子不行";
          loses();
        }
      }
      // 出剪刀
      else if (imgId.id == "s") {
        if (opponent == "p") {
          document.getElementById("result").innerText = "勝利 妳好棒棒";
          winners();
        } else if (opponent == "r") {
          document.getElementById("result").innerText = "失敗 底子不行";
          loses();
        }
      }
      // 出布
      else if (imgId.id == "p") {
        if (opponent == "r") {
          document.getElementById("result").innerText = "勝利 妳好棒棒";
          winners();
        } else if (opponent == "s") {
          document.getElementById("result").innerText = "失敗 底子不行";
          loses();
        }
      }
      // 出進攻 || 防守
      else if (imgId.id == "a") {
        document.getElementById("result").innerText = "失敗 按到進攻";
        loses();
      } else if (imgId.id == "d") {
        document.getElementById("result").innerText = "失敗 按到防守";
        loses();
      }
    }
  }
});

// user win or lose part2

//user win

function winners() {
  setTimeout(
    "document.getElementById('rpsWrapper').style.display='none' ",
    5000
  );
  setTimeout(
    "document.getElementById('rpsUserWins').style.display='block' ",
    5000
  );
  document
    .getElementById("second")
    .addEventListener("click", function change(e) {
      document.getElementById("attack").src = "./shame.png";
      let item = e.target;
      if (item.id == "r1") {
        document.getElementById("myChoice").src = "./r.png";
        document.getElementById("finalResult").innerText = "loser!";
      } else if (item.id == "p1") {
        document.getElementById("myChoice").src = "./p.png";
        document.getElementById("finalResult").innerText = "loser!";
      } else if (item.id == "s1") {
        document.getElementById("myChoice").src = "./s.png";
        document.getElementById("finalResult").innerText = "loser!";
      } else if (item.id == "a1") {
        document.getElementById("myChoice").src = "./a.png";
        document.getElementById("finalResult").innerText = "ur good!";
        userScore += 1;
        document.getElementById("myScore").innerHTML = userScore;
        rpsUserWins.style.display = "none";
        time.style.display = "block"
        num = 6;
        setInterval("fun()", 1000);
      } else if (item.id == "d1") {
        document.getElementById("myChoice").src = "./d.png";
        document.getElementById("finalResult").innerText = "loser!";
      }
      document.getElementById("second").removeEventListener("click", change);
    });
}

// user lose

function loses() {
  setTimeout(
    "document.getElementById('rpsWrapper').style.display='none' ",
    5000
  );
  setTimeout(
    "document.getElementById('rpsUserLoses').style.display='block' ",
    5000
  );
  document
    .getElementById("third")
    .addEventListener("click", function changeLoses(e) {
      document.getElementById("defence").src = "./hands.png";
      let i = e.target;
      if (i.id == "r3") {
        document.getElementById("mySecondChoice").src = "./r.png";
        document.getElementById("finalResultSecond").innerText = "loser";
      } else if (i.id == "p2") {
        document.getElementById("mySecondChoice").src = "./p.png";
        document.getElementById("finalResultSecond").innerText = "loser";
      } else if (i.id == "s2") {
        document.getElementById("mySecondChoice").src = "./s.png";
        document.getElementById("finalResultSecond").innerText = "loser";
      } else if (i.id == "a2") {
        document.getElementById("mySecondChoice").src = "./a.png";
        document.getElementById("finalResultSecond").innerText = "loser";
      } else if (i.id == "d2") {
        document.getElementById("mySecondChoice").src = "./d.png";
        document.getElementById("finalResultSecond").innerText = "ur good!";
        userScore += 1;
        document.getElementById("loseMyScore").innerHTML = userScore;
      }
      document
        .getElementById("third")
        .removeEventListener("click", changeLoses);
    });
}

function matchDraw() {
  setTimeout(
    "document.getElementById('rpsWrapper').style.display='none' ",
    5000
  );
  setTimeout(
    "document.getElementById('rpsUserDraw').style.display='block' ",
    5000
  );
}
