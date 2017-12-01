function fullScreen(){
  if (screenfull.enabled) {
  	screenfull.request( document.querySelector('img') );
  }

}

document.getElementById('fullBtn').addEventListener('click', fullScreen);
document.getElementById('locationBtn').addEventListener('click', getGeo);
