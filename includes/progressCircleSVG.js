$(document).ready(function(){
    var totalImages = 15;
    var loadedImages = 1;
     $('html, body').css({
    'overflow-y': 'hidden',
    'height': '100%'
});
    $('body').imagesLoaded().progress(function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
        loadedImages=loadedImages+1;
        updateProgress();
        if(loadedImages == totalImages){
               $('html, body').css({
                    'overflow-y': 'auto',
                    'height': 'auto'
                }); 
                $('.progressShade').delay(1000, function(){
                $('.progressShade').fadeOut(400).remove();
                })
        }
        });

 function updateProgress(){
    var loadedPct = ((loadedImages/totalImages)*100);  
     var val = loadedPct.toFixed(0);
      console.log(val);
  var $circle = $('#svg #bar');
  
  if (isNaN(val)) {
   val = 0; 
  }
  else{
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);
      if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    
    var pct = ((100-val)/100)*c;
    $circle.css({ strokeDashoffset: pct});
    $('#cont').attr('data-pct',val);
  }
};
    
});
