
function getGeo(){

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
    do_something(position.coords.latitude, position.coords.longitude);
  });
  } else {
    alert("사용불가능");
  }
}
  function do_something(lat,  long){
    document.getElementById("log").innerHTML="http://map.daum.net/link/map/"+lat+","+long;
    alert("현재 위치는 lat은"+lat+"이고 long은"+long+"입니다");
  }
