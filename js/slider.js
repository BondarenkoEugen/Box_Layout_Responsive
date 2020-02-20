$(document).ready(function(){
       $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav', 
        responsive: [
                {
                  breakpoint:600,
                    settings:{
                      arrows: true,
                      prevArrow: "<img src='img/arrowL.svg' class='slick-prev' alt='1'>",
                      nextArrow: "<img src='img/arrow.svg' class='slick-next' alt='2'>",
                    }
                },              
          ]
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true, 
        arrows: true,
        prevArrow: "<img src='img/arrowL.svg' class='slick-prev' alt='1'>",
        nextArrow: "<img src='img/arrow.svg' class='slick-next' alt='2'>",
        responsive: [
                {
                  breakpoint:600,
                    settings:"unslick"
                },
                
          ]
        
      });
    });