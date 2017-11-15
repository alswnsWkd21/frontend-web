var url = 'http://movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20170801&endDate=20171013&pageSize=10&pageNo=';
//
var info = document.getElementById('info')
var str = '';

getJSON(url, done);
function done(result){

  console.log(result);

  for(var i = 0; i<result.data.length; i++){
    console.log(result.data[i].titleKo)
    str += '<div class='+'item'+'>'
    str +='<img src=' + result.data[i].photo.fullname+' width="100">'
    str += '<h5>'+result.data[i].titleKo+'</h5>'
    str += '<p>점유율'+result.data[i].rank.marketShare+'</p>'
    str += '<button>예매</button>'
    str += '</div>'
    str += '<hr>'

  }

  info.innerHTML = str;

}
