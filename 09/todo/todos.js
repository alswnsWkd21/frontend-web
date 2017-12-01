

var $StringInput = $('#StringInput');
var $list = $('#list');

console.log($StringInput.value);
var FullValue;

$StringInput.keypress(function(e){
  var key = e.which || e.keyCode;
  if(key === 13){
    FullValue = '<li>'+
      '<button class="delete">×</button>'+
      '<input type="checkbox" class="toggle-checked">'+
      '<span class="text">' + $StringInput.value +'</span>'+
    '</li>';

    $list.html(+= FullValue);

    saveData($list.html());

  FullValue = '';
  }
})


function saveData(html){
  localStorage.setItem('todoItem', html);
  console.log("dd");
}
function loadDate(){
  localStorage.getItem('todoItem');
}
$list.html(loadDate());
