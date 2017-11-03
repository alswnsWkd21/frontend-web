var $up =$('.up');
var scrollcount ;
function up(){
$up.css('display','block');


$up.on('click', function(){
  document.documentElement.scrollTop=0;
})
$(window).scroll(
  console.log(document.documentElement.scrollTop());
  // $up.height();
);
