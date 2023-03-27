// new Swiper('.lorem-cont', {
//     breakpoints: {
//         450: {
//             slidesPerView: 1,
//         }
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },

// });
$('.lorem-content-main').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchmove: true, 
    responsive: [
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ]

    
  });

  $('.burger-menu').click(function(event) {
    $('.burger-menu,.nav-list').toggleClass('active');
    $('.body').toggleClass('lock');
  });
