// var log = document.getElementById('log');

// debugger
// console.log(log);
// log.innerHTML="안녕";
//

// var log = document.querySelectorAll('#log');
// var a = document.querySelectorAll('#log a');
// console.log(log);
//
// console.log(a[0]);
// console.log(a[1]);

// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// log.appendChild(div);
//
//
// log.innerHTML += '<div style = "color:red">hello</div>'
// window.addEventListener('load', function(){
//     alert("load");
// });
// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("Dom요소가 모두 로딩이 되었습니다");
// });
// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("Dom요소가 모두 로딩이 되었습니다");
// });
// var log = document.getElementById('log');
// log.addEventListener('click', function(){
//   console.log("안녕하세요");
// })
//
// function printLog(i){
//   console.log('log!!!')
//   console.log(i)
// }
// log.addEventListener('click', printLog(event));
//
document.addEventListener("DOMContentLoaded", function(event) {
  var divs = document.querySelectorAll('#wrap div');
  console.log(divs);
  function changepg(event){
    console.log('changepg');
    console.log(event);
    event.currentTarget.style.backgroundColor='blue';
  }

  for(var i = 0; i<divs.length; i++){
    divs[i].addEventListener('click',changepg);
  }

});
