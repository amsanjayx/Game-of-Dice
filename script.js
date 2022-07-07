var target=30;
var p1=0;
var p2=0;
var f=0;
var count=1;
function play()
{
  if(count%2== 1)
  {
    var player1 = (Math.floor(Math.random() * 10)%6)+1 ;
    document.getElementById("score").value = player1
    p1 += player1;
    document.getElementById("in1").value = p1;
  }
  else
    {
      var player2 = (Math.floor(Math.random() * 10)%6)+1 ;
      document.getElementById("score").value = player2
      p2 += player2;
      document.getElementById("in2").value = p2;
    }
  count++;
  if(p1>=target && f==0)
    {
      document.getElementById("out").innerHTML = "Player 1 won the match!";
      f=1;
    }
  else if(p2>=target && f==0)
    {
      document.getElementById("out").innerHTML = "Player 2 won the match!";
      f=1;
    }
    else if(f==1 || p1>=target || p2>=target){
    document.getElementById("score").value = "";
    document.getElementById("in1").value = "";
    document.getElementById("in2").value = "";
    document.getElementById("out").innerHTML = "--result--";
    p1=0;
    p2=0;
    f=0;
  }
}

function reset(){
    document.getElementById("score").value = "";
    document.getElementById("in1").value = "";
    document.getElementById("in2").value = "";
    document.getElementById("out").innerHTML = "--result--";
}