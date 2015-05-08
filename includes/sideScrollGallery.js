$(document).ready(function ( ){
   
     var leftMost =  $(".imagesList").css("marginLeft");
    $(".Left, .Right").hover(function ( ){
        var isLeft = $(this).hasClass("Left");
        var isRight = $(this).hasClass("Right");
         
        if(isLeft){
           scrollLeft();
        }
        
        if(isRight){
          scrollRight();
        }   
    }, function(){$(".imagesList").stop();});
var scrollRight = function(){
    leftMost = $(".imagesList").css("marginLeft");
  if(leftMost < "-92%"){
     $(".imagesList").animate({marginLeft: "-=1.5%"}, 30, 'linear', function(){ if(leftMost > "-902px"){$(".imagesList").animate({marginLeft: "-48%"}, 100) }else{ scrollRight(); } });
    }
};

var scrollLeft = function(){
  leftMost = $(".imagesList").css("marginLeft");
   if(leftMost > "-1.5%"){
       var leftMost = $(".imagesList").css("marginLeft");
     $(".imagesList").animate({marginLeft: "+=1.5%"}, 30, 'linear', function(){ if(leftMost > "0%"){$(".imagesList").animate({marginLeft: "-1.5%"}, 100)}else{ scrollLeft(); } });
   }
    
};

});  


