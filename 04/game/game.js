var $box=document.getElementsByClassName("box");
var $gameboard=document.getElementById('gameboard');
var $score=document.getElementsByTagName("li")[0];
var $level=document.getElementsByTagName("li")[1];
var $miss=document.getElementsByTagName("li")[2];
setInterval(random, 2000);
var resetbox;
var score =0;
var level =0;

function random(){

  if(!$box[0]){
    $gameboard.appendChild(resetbox);
  }
  var randomheight = (Math.random()*1000000)%document.body.clientHeight +66;
  var randomwidth = (Math.random()*1000000)%document.body.clientWidth;

  $box[0].style.top= randomheight+"px";
  $box[0].style.right = randomwidth+"px";
  $box[0].style.backgroundColor="blue";
}

function addScore(){
  score +=1;
    $score.innerHTML="Score:"+score;
}
function addLevel(){
  level+=1;
    $score.innerHTML="Level:"+level;
}
console.log($gameboard);
$gameboard.addEventListener('click', function(e){

    addScore();
  if(score==0 && score%10==0 ){
    addLevel();
  }
  if(e.target == $box[0]){
      resetbox = $box[0];
    $gameboard.removeChild($box[0]);
}});
