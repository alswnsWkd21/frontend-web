var board = document.getElementById("board");
//체스판 생성하기
  for(var i=0; i<4; i++){
      for(var j=0; j<4; j++){
        if(i%2==0){
          if(j%2==0){
            board.innerHTML+='<span class="white"></span>'
          }
          else{
            board.innerHTML+='<span class="black"></span>'
          }
        }else{
          if(j%2==0){
            board.innerHTML+='<span class="black"></span>'
          }else{
            board.innerHTML+='<span class="white"></span>'

          }

        }

      }
  }
  //보드가져오기
  var divs = document.getElementById('#board');
  var past;
  //색상바꾸기
  function colorchange(event){
    // 처음에는 past존재x 이를 이용해 분개
    if(past){

      past.style.backgroundColor='';
      past = event.currentTarget;
      past.style.backgroundColor='blue';
    }else{
      past = event.currentTarget;
      past.style.backgroundColor='blue';
    }

  }
  // board.addEventListener('click', colorchange);

  var spansi = document.querySelectorAll('#board span');
console.log(spansi);
  for(var i =0; i<spansi.length; i++){
    spansi[i].addEventListener('click', colorchange);
  }

  // for(var i =0; spans<spans.length; i++){
  //   spansi[i].addEventListener('click', colorchange)
  // }
