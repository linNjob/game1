var t = 4;
var time = document.getElementById("timeBox");
var rps = document.getElementById("rpsWrapper");
var npsUserWins = document.getElementById("npsUserWins")

function fun() {
  t--;
  time.innerHTML = t;
  if (t <= 0) {
    clearInterval(inter);
    time.style.display = "none";
    rps.style.display = "block";
  }
}
var inter = setInterval("fun()", 1000);
