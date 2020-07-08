$(document).ready(function(){
  
  //Services Mobile Sliders
  $('.sliders').slick({
    autoplaySpeed: 2000,
    slidesToShow: 3,
    dots: true,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
  })
});