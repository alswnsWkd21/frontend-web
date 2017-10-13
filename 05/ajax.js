console.log('ajax.js');
var btn = document.getElementById('btn');
btn.addEventListener('click', load);


function ajax(url, callback, data, x) {
  try {
    x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    x.open(data ? 'POST' : 'GET', url, 1);
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data)
  } catch (e) {
    window.console && console.log(e);
  }
};

function done(responseText){

  console.log('done:', responseText)
}


//
var getJSON = (function(){
  var unique = 0;
  return function(url, callback, context) {
    // INIT
    var name = "_jsonp_" + unique++;
    if (url.match(/\?/)) url += "&callback="+name;
    else url += "?callback="+name;

    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Setup handler
    window[name] = function(data){
      callback.call((context || window), data);
      document.getElementsByTagName('head')[0].removeChild(script);
      script = null;
      delete window[name];
    };

    // Load JSON
    document.getElementsByTagName('head')[0].appendChild(script);
  };
})();


function load(){
  // console.log('load');
  //
  // ajax('dummy.json', done );
  // // var request = new XMLHttpRequest();
  // //
  // // request.open('GET', 'http://1boon.kakao.com/index.html', true);
  // // // console.log(request);
  // //
  // // request.onreadystatechange = function() {
  // //   if(request.readyState === 4) {
  // //     if(request.status === 200){
  // //
  // //       console.log(request.responseText)
  // //     }
  // //   }
  // // }
  // //
  // // request.send();
  // console.log('send')
  getJSON('http://1boon.kakao.com/issue.json' done);
}
