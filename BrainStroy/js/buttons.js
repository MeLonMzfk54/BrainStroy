//Вылетающая форма для кнопки "Подать заявку" 
$(".preview__btn").click(function(){
    $(".popup").css({'top':250+"px"}).addClass("active__popup");
    $(".popup__bg").fadeIn();
    $(".popup__title").html("Подать заявку");
    $(".popup__bg").click(function(){
        $(".popup").removeClass("active__popup");
        $(".popup__bg").fadeOut();
    });
});

$(".house__btn").click(function(){
    $(".popup").css({'top':250+"px"}).addClass("active__popup");
    $(".popup__bg").fadeIn();
    $(".popup__title").html("Подать заявку");
    $(".popup__bg").click(function(){
        $(".popup").removeClass("active__popup");
        $(".popup__bg").fadeOut();
    });
});


