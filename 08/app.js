// $('div').css('background-color', 'black');

// $('div').addcss('blue');
// $('div').removeClass('blue');
// console.log($('div').height())
// console.log($('img').attr('src'));
// console.log( document.querySelector('img').src)



// var $div = $('div').addClass('blue');
// div.html('<h2>div</div>');


//이게 순서가 바뀌면 안된다.
// $('div').addClass('blue').html('<h2>div</div>');
// $('div').html('<h2>div</h2>')

// console.log($('input').val());
// console.log($('div').offset())



// $('#btn').on('click',function(){
//   $('div').animate({top: 200}, 1000);
// })


$('#login').on('click',function(event){

  window.open($(event.currentTarget).attr('href'), 'login', 'width=')
})
