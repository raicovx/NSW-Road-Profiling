      var hasBeenTriggered;
$(document).ready(function(){
    animateHeader();
$(window).on("scroll",function() {
     animateHeader();
    });
    
});
function animateHeader(){
   getCurrentScrollTop = $(document).scrollTop();
        if(getCurrentScrollTop > 400) {
                $('.header').removeClass("headerRetract");
            hasBeenTriggered = false;
                $('.header').css("position", "fixed")
                $('.header').addClass("headerDrop").stop(2000).css("top", "0px");
                
      }else{
            if(!hasBeenTriggered){
                headerResetAnimation();
            }
         }  
    
};
function headerResetAnimation() {
             hasBeenTriggered = true;
             $('.header').addClass("headerRetract");
             var headerAnimTimeOut = window.setTimeout(prependToPage, 50);
         };
function prependToPage(){
          $(".header").css("display", "none").removeClass("headerDrop headerRetract").css("position", "absolute").css("display", "block");
          
        };