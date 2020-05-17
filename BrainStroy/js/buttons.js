//Вылетающая форма для кнопки "Заказать звонок" 

$(".headerMain__popup").click(function(){
    $(".popup").css({'top':$(window).scrollTop()+200}).addClass("active__popup");
    $(".popup__bg").fadeIn();
    $(".popup__title").html("Заказать звонок");
    $(".popup__bg").click(function(){
        $(".popup").removeClass("active__popup");
        $(".popup__bg").fadeOut();
    });
});

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

