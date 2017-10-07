//start...
// Input가져오기
var StringInput = document.getElementById('StringInput');
// ul가져오기
var list = document.getElementById('list');
console.log(StringInput);

var StringValue;
//input에 keypress가 즉 키보드 입력 이벤트가 발생하면 그 값이 13 즉 엔터인지 확인하고 엔터라면 Input값에 있는 value가져와서 변수에 추가
StringInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      StringValue = StringInput.value;
      console.log(StringValue);
// 아까 value값을 추가한 변수를 가져와서 list에 나머지 코들들과 함께 add해주기
      list.innerHTML += '<li>'+
        '<button class="delete">×</button>'+
        '<input type="checkbox" class="toggle-checked">'+
        '<span class="text">' +StringValue+'</span>'+
      '</li>'
// value값 초기화 해주기
      StringInput.value = '';
    }
});
