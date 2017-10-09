var $box=document.getElementsByClassName("box");
var $gameboard=document.getElementById('gameboard');
var $score=document.getElementsByTagName("li")[0];
var $level=document.getElementsByTagName("li")[1];
var $miss=document.getElementsByTagName("li")[2];

var resetbox;
var score =0;
var level =1;
var miss =0;
windowheight = window.innerHeight;
windowwidth = window.innerWidth;
$gameboard.style.height =windowheight+"px";
$gameboard.style.width = windowwidth +"px";
setInterval(random, 2000/level);

function random(){

  if(!$box[0]){
    $gameboard.appendChild(resetbox);
  }
  var randomheight = ((Math.random()*1000000)% (windowheight-66)) +66;
  var randomwidth = (Math.random()*1000000)% windowwidth;

  $box[0].style.top= randomheight+"px";
  $box[0].style.right = randomwidth+"px";
  $box[0].style.backgroundColor="blue";
}

function addScore(){
  score +=1;
    $score.innerHTML="Score:"+score;
}
function addLevel(){
  score=0;
  miss=0;
  $score.innerHTML="Score:"+score;
  level+=1;
    $level.innerHTML="Level:"+level;
}
function addMiss(){
  miss +=1;
   $miss.innerHTML="Miss:"+miss;
}
console.log($gameboard);
$gameboard.addEventListener('click', function(e){


  if(e.target == $box[0]){
    addScore();
    if(score!=0 && score%10==0 ){
      addLevel();
    }
    resetbox = $box[0];
    $gameboard.removeChild($box[0]);
  }else{
    addMiss();
    if(miss>10){
      alert("미션실패!!");

        location.reload();     // 새로고침
    }
  }
});
