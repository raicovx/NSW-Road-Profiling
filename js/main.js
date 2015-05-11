$(document).ready(function(){
  var isFullScreen = false,
      fullScreenButtn = $('.fullScreen'),
      sliderCont = $('.slider'),
      indic = $('.indicators');
      indic.css('bottom', '');
      $('.slider').slider({full_width: true});

     $('.fullScreen').on('click', function(){
         if(isFullScreen){
             sliderCont.css('height','');
             $('.welcomeArea').css("marginTop", "");
          fullScreenButtn.css('top', '340px');
             indic.animate({top:'340px'}, 1000, function(){
              sliderCont.animate({height:"400px"}, 1000);
             });
             sliderCont.toggleClass('fullscreen');
         isFullScreen = false;
             $('html, body').css({
     'overflow': 'auto',
     'height': 'auto'
 });
         }else{
            sliderCont.css('height','');
             indic.css('top','');
           sliderCont.toggleClass('fullscreen');
         isFullScreen = true;
             $('html, body').css({
     'overflow': 'hidden',
     'height': '100%'
                 });
             fullScreenButtn.css('top', '75%');
             $('.welcomeArea').animate({marginTop: '50%'}, 1050);
             indic.animate({top:'750px'},1000);
         }

     });

});
