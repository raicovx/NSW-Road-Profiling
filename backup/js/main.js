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

         fullScreenButtn.css('top', '330px');
         sliderCont.toggleClass('fullscreen');
         isFullScreen = false;
         navBar.show(0).animate({top:"0px"},500);
            $('#two').css("marginTop", "");
               $('html, body').css({
       'overflow': 'auto',
       'height': 'auto'
           });



}else{
          sliderCont.css('height','');
            sliderCont.toggleClass('fullscreen');
        isFullScreen = true;
        navBar.animate({top:"-100px"},1000).delay(1050).hide(0);
            $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
                });
            fullScreenButtn.css('top', '75%');
            $('#two').animate({marginTop: '50%'}, 1050);



        }

    });
});
