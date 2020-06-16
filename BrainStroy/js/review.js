$(document).ready(function(){
    $("#reviewForm").submit(function(event){
        event.preventDefault();
        if($(".review__input_name").val() == "" || $(".review__input_key").val() == "" || $(".review__text").val() == "" ){
           if($(".review__input_name").val() == ""){
               $(".review__input_name").css("border","2px solid red");
           }else{
               $(".review__input_name").css("border","none");
               $(".review__input_name").css("border-bottom","2px solid white");
           }
           if($(".review__input_key").val() == ""){
               $(".review__input_key").css("border","2px solid red");
           }else{
                $(".review__input_key").css("border","none");
               $(".review__input_key").css("border-bottom","2px solid white");
           }
            if($(".review__text").val() == ""){
               $(".review__text").css("border","2px solid red");
           }else{
                $(".review__text").css("border","none");
               $(".review__text").css("border","2px solid white");
           }
       }else{
           $.ajax({
               type: "POST",
               url: "php/formReview.php",
               data: $("#reviewForm").serialize(),
                success: function(data) {
                if(data == 1){
                    alert("Ваш отзыв поступил в обработку");
                }  else if(data == 0){
                    alert("Нет такого договора или имени на такой договор");
                } else if (data == 2){
                    alert("Вы уже оставляли отзыв");
                }
            }
           }).done(function(){
                     
              
           }).fail(function(){
              alert("Ошибка отправки отзыва"); 
           });
       }
    });
});