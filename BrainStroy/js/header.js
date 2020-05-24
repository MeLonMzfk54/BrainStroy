 //Скрипт для бургера шапки
document.querySelector(".headerMain__burger").onclick = function(){   document.querySelector(".headerMain__menu").classList.toggle("visibleMain");   document.querySelector(".headerMain__burger").classList.toggle("close");
  }

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

$(".preview__call").click(function(){
    $(".popup").css({'top':$(window).scrollTop()+200}).addClass("active__popup");
    $(".popup__bg").fadeIn();
    $(".popup__title").html("Заказать звонок");
    $(".popup__bg").click(function(){
        $(".popup").removeClass("active__popup");
        $(".popup__bg").fadeOut();
    });
});

//Функция для загрузочного экрана
$(window).on('load', function () {
    let preloader = $('.preloader');
      let  animationSvg = preloader.find('.preloader__animation');
    animationSvg.fadeOut();
    $('*').animate({scrollTop:0},500);
    preloader.delay(100).fadeOut("slow");
});

    //Функция для плавного перемещения на блок контакты
    $("#toDown").click(function(event){
       event.preventDefault();
        let id = $(this).attr("href");
        let top = $(id).offset().top;
        $("*").animate({scrollTop:top},1000);
    });

$(function() {    
    //Функция для стрелочки, которая поднимает страницу вверх
$(window).scroll(function() {
    ($(this).scrollTop() != 0) ? $('#toTop').fadeIn() :      $('#toTop').fadeOut(); 
});

$('#toTop').click(function() {
    $('*').animate({scrollTop:0},500);
});


});