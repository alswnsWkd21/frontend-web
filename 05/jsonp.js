


function done(data){
  console.log(data);
}
var btn = document.getElementById('btn');
btn.addEventListener('click', load);
function load(){
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement('script');
  script.src = 'http://1boon.kakao.com/issue.json?callback=done';
  head.appendChild(script);
}
