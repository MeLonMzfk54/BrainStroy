$(document).ready(function(){
   $('.calculator__text').click(function(event){
       if($('.calculator__item').hasClass('one')){
           $('.calculator__text').not($(this)).removeClass('active');
           $('.calculator__subdesc').not($(this).next()).slideToggle(300);
       }
       $(this).toggleClass("active").next().slideToggle(300);
   });
    
    
   
});