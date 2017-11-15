var $up =$('.up');
var scrollcount ;


$up.on('click', function(){
  document.documentElement.scrollTop=0;
})
$(window).scroll(function(){
  console.log(document.documentElement.scrollTop);
  if(document.documentElement.scrollTop!=0){
    $up.css('display','block');
    $up.css('margin-top',document.documentElement.scrollTop+$(window).height()-100);
  }
})
