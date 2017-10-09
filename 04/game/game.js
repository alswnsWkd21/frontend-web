var $box=document.getElementsByClassName("box"); // box
var $gameboard=document.getElementById('gameboard'); // 게임판
var $score=document.getElementsByTagName("li")[0]; // score
var $level=document.getElementsByTagName("li")[1]; // level
var $miss=document.getElementsByTagName("li")[2]; // miss
var resetbox; // box눌렀을때 box담아넣는 변수
var score =0;
var level =1;
var miss =0;
windowheight = window.innerHeight; //window 높이
windowwidth = window.innerWidth; // window 넓이
$gameboard.style.height =windowheight-66+"px";
$gameboard.style.width = windowwidth +"px";

random(); // 첫 초기화

setInterval(random, 2000/level);  // 레벨이 올라갈때마다 난이도 up

function random(){ // random 즉 box 위치 초기화 함수
  if(!$box[0]){
    $gameboard.appendChild(resetbox);
  }
  var randomheight = ((Math.random()*1000000)% (windowheight-66)) +66;
  var randomwidth = (Math.random()*1000000)% windowwidth;
  $box[0].style.top= randomheight+"px";
  $box[0].style.right = randomwidth+"px";
}

function addScore(){  // score 올리는 함수
  score +=1;
    $score.innerHTML="Score:"+score;
}

function addLevel(){ //level 올리고 나머지 reset 함수
  score=0;
  miss=0;
  $score.innerHTML="Score:"+score;
  level+=1;
    $level.innerHTML="Level:"+level;
}

function addMiss(){ // miss 올리는 함수
  miss +=1;
   $miss.innerHTML="Miss:"+miss;
}

$gameboard.addEventListener('click', function(e){  // box눌렀을 때 초기화 및 점수 레벨 미스 셋팅 함수 !!
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
