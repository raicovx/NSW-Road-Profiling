$(document).ready(function(){
  var isFullScreen = false,
      fullScreenButtn = $('.fullScreen'),
      sliderCont = $('.slider'),
      indic = $('.indicators'),
      navBar = $('nav');
      indic.css('bottom', '');
      $('.parallax').parallax();
   $('.slider').slider({full_width: true});

  $('.fullScreen').on('click', function(){
      if(isFullScreen){
        sliderCont.toggleClass('fullscreen');
        sliderCont.animate({height:"450px"},1000);

          $('#one').css("marginTop", "");
       fullScreenButtn.css('top', '330px');
       isFullScreen = false;
       navBar.show(0).animate({top:"0px"},1000);

             $('html, body').css({
     'overflow': 'auto',
     'height': 'auto'
         });
}else{

        sliderCont.toggleClass('fullscreen');
      isFullScreen = true;
      fullScreenButtn.css('top', '75%');
      navBar.animate({top:"-100px"},1000).delay(1050).hide(0);
        sliderCont.animate({height:"100%"},1000);

          $('#one').animate({marginTop: '50%'}, 1050);
          $('html, body').css({
        'overflow': 'hidden',
        'height': '100%'
              });

      }

  });
});
