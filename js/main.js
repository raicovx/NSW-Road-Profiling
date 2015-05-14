$(document).ready(function(){
    var isFullScreen = false,
        fullScreenButtn = $('.fullScreen'),
        sliderCont = $('.slider'),
        indic = $('.indicators'),
        navBar = $('.navbar-fixed');
        indic.css('bottom', '');
     $(".button-collapse").sideNav();
     $(".parallax").parallax();
     $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
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
        navBar.show().animate({top:"-100px"},1000);
            $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
});
        }else{
           sliderCont.css('height','');
            indic.css('top','');
          sliderCont.toggleClass('fullscreen');
        isFullScreen = true;
        navBar.animate({top:"0"},1000).hide();
            $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
                });
            fullScreenButtn.css('top', '75%');
            $('.welcomeArea').animate({marginTop: '50%'}, 1050);
            indic.animate({top:'750px'},1000);
        }

    });
    $('#dropdown1 li a,.collapsible-body ul li a').on('click', function(){
            var thisClick = $(this).html();
            if(thisClick == 'NBN Plans'){
                $('ul.tabs').tabs('select_tab', 'nbn');
            }else if(thisClick == 'ADSL 2+'){
                $('ul.tabs').tabs('select_tab', 'adsl2');
            }if (thisClick == 'VOIP'){
                $('ul.tabs').tabs('select_tab', 'voip');
            };
    });
    $('#dropdown2 li a, .collapsible-body ul li a').on('click', function(){
            var thisClick = $(this).html();
            if(thisClick == 'Web Hosting'){
                $('ul.tabs').tabs('select_tab', 'webHosting');
            }else if(thisClick == 'E-Mail'){
                $('ul.tabs').tabs('select_tab', 'email');
            }if (thisClick == 'Domain Names'){
                $('ul.tabs').tabs('select_tab', 'domains');
            }if(thisClick == 'Spam Filtering'){
                  $('ul.tabs').tabs('select_tab', 'spamFilter');
            };
    });
    $('.scrollspy').scrollSpy();
});
