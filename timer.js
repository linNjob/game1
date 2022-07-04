var time = document.getElementById("timeBox");
var rps = document.getElementById("rpsWrapper");
var npsUserWins = document.getElementById("npsUserWins")

function fun() {
  for( let i = 4 ; i > 0  ; i--){
    time.innerHTML = i;      
      setTimeout(() => {
        console.log(i)
        if (i <= 0) {
          clearInterval(inter);
          time.style.display = "none";
          rps.style.display = "block";
        }
      }, 1000)
  }
}
fun();
var inter = setInterval("fun()", 1000);
