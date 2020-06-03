$(document).ready(function(){
    $("#popupId").submit(function(){
       if($(".popup__name").val() == "" || $(".popup__tel").val() == "" ){
           valId = false;
           return valId;
       }
        $.ajax({
          type: "POST",
          url: "php/forms.php",
          data: $(this).serialize()
        }).done(function(){
           $(".overlay").fadeIn();
            $(this).find("input").val("");
            $("#popupId").trigger("reset");
            $(".popup").removeClass("active__popup");
            $(".popup__bg").fadeOut();
        });
        return false;
    });
    
    $("#aboutForm").submit(function(){
   if($(".about__name").val() == "" || $(".about__tel").val() == ""){
       valId = false;
       return valId;
   }
        
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
//        success:function(data){
//            alert(data.getAll());
//         $(".overlay").fadeIn();
//            $(this).find("input").val("");
//            $("#aboutForm").trigger("reset");
//        },
//        error: function(){
//            alert("Ошибка в форме, обрабатываемой ajax");
//        }
    }).done(function(){
            $(".overlay").fadeIn();
            $(this).find("input").val("");
            $("#aboutForm").trigger("reset");
    });
    return false;
});
});

$(".overlay__close").click(function(){
    $(".overlay").fadeOut();
});
