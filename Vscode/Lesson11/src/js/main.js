$(document).ready(function(){
   $('.burger-menu').click(function(event) {
    $('.burger-menu,.nav-list').toggleClass('active');
    $('body').toggleClass('lock');
   });
});
$('.block-design-main').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchmove: true, 
    arrow: false,
  slidesToShow: 1,
         slidesToScroll: 1
     

    
  });
   