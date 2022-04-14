$(document).ready(function(){

  // scroll position
  $(window).on('scroll',function(){
    var scrolling = $(this).scrollTop();

    // back to top appearance 
    if(scrolling > 100){
      $('.back-to-top').fadeIn();
    }else{
      $('.back-to-top').fadeOut();  
    }
    // navbar class 
    if(scrolling > 150){
      $('nav').addClass('nav-fix');
    }else{
      $('nav').removeClass('nav-fix');
    }

  });

  // back to top action 
  $('.back-to-top').on('click',function(){
    $('html,body').animate({
    scrollTop: '0px',
  },2000);

  });    
  
  //wow js
  new WOW().init();

  //typeing effect
  var typed = new Typed('.element', {
    strings: [
      'web designer',
      'web developer',
      'web artist'
      ],
      smartBackspace: true,
      typeSpeed: 200,
      backSpeed:100,
      loop:true,
    });

    //slick slider
    $('.banner-slider').slick({
      arrows:false,
      dots:false,
      // autoplay:true,
    });

    //about tilt effect
    // $('.about-img').tilt();

    //gallery filter
    var mixer = mixitup('.gallery-main');

    //gallery popup
    $('.venobox').venobox({
      arrowsColor:'#dc965a;',
    });

    //testimonial slider
    $('.testimonial-slider').slick({
      arrows:false,
      slidesToShow: 2,
      dots:true,
      // autoplay:true,
      responsive:[
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
          }
      },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows:false,
            }
        },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows:false,
            }
        },

      ],
    });

    // counter up 
    $('.counter').counterUp({
      delay: 10,
      time: 800,
    });

    //funfact parallax effect
    $('#funfact').parallax({
      imageSrc:'images/funfact.png'
    });
    

});