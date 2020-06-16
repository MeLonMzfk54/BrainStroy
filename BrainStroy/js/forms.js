$(document).ready(function(){
    $(".popup__tel").mask("+7 (999) 99-99-999");
    $(".about__tel").mask("+7 (999) 99-99-999");
    $("#popupId").submit(function(e){
        e.preventDefault();
       if($(".popup__name").val() == "" || $(".popup__tel").val() == "" ){
           if($(".popup__name").val() == ""){
               $(".popup__name").css("border","2px solid red");
           }else{
               $(".popup__name").css("border","none");
               $(".popup__name").css("border-bottom","2px solid white");
           }
           if($(".popup__tel").val() == ""){
               $(".popup__tel").css("border","2px solid red");
           }else{
                $(".popup__tel").css("border","none");
               $(".popup__tel").css("border-bottom","2px solid white");
           }
       }else{
          $.ajax({
          type: "POST",
          url: "php/formProject.php",
          data: $(this).serialize()
        }).done(function(res){
              if(res == "1"){
                  alert("Заявку с таким номером уже подавали");
              }else{
                $(".overlay").fadeIn();
            $(this).find("input").val("");
            $("#popupId").trigger("reset");
            $(".popup").removeClass("active__popup");
            $(".popup__bg").fadeOut();   
              }
        });
        return false;  
       }
    });
    
    $("#aboutForm").submit(function(e){
        e.preventDefault();
   if($(".about__name").val() == "" || $(".about__tel").val() == ""){
           if($(".about__name").val() == ""){
               $(".about__name").css("border","2px solid red");
           }else{
               $(".about__name").css("border","none");
               $(".about__name").css("border-bottom","2px solid white");
           }
           if($(".about__tel").val() == ""){
               $(".about__tel").css("border","2px solid red");
           }else{
                $(".about__tel").css("border","none");
               $(".about__tel").css("border-bottom","2px solid white");
           }
   }else{
           let data = new FormData(this);
       
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "php/formProject.php",
        data: data,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
    }).done(function(res){
            if(res == 1){
                alert("Заявка с таким номером уже существует");
            }else{
               $(".overlay").fadeIn();
            $(this).find("input").val("");
            $("#aboutForm").trigger("reset");   
            }
    });
    return false;
   }
    
});
});

$(".overlay__close").click(function(){
    $(".overlay").fadeOut();
});

