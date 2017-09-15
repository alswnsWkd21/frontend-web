
var sum = 0;

setInterval(function () {
a =  parseInt(prompt('숫자를 입력하세요'));
  if(a){
    sum = sum + a;
  }else{
    alert(sum);
  }
}, 1000);
