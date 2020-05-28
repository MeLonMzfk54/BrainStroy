$(document).ready(function(){
   $('.calculator__text_m').click(function(event){
       if($('.calculator__item').hasClass('one')){
           $('.calculator__text_m').not($(this)).removeClass('active');
           $('.calculator__subdesc').not($(this).next()).slideToggle(300);
       }
       $(this).toggleClass("active").next().slideToggle(300);
   });
    $(".calculator__button").click(function(){
        let valueMat = $(".calculator__radio:checked").val(); // материал
        let valueKomp = $(".calculator__radio_r:checked").val(); // комплектация
        let valueSquare = $(".calculator__input").val(); // площадь
//        alert(valueMat); alert(valueKomp);alert(valueSquare);
        if(valueMat == "wood"){
            if(valueKomp == "eco"){
                let result = valueSquare * 19000;
                $(".calculator__cost").html(result);
            }
            if(valueKomp == "standard"){
                let result = valueSquare * 23000;
                $(".calculator__cost").html(result);
            }
            if(valueKomp == "premium"){
                let result = valueSquare * 29000;
                $(".calculator__cost").html(result);
            }
        }
        if(valueMat == "brick"){
            if(valueKomp == "eco"){
                let result = valueSquare * 23000;
                $(".calculator__cost").html(result);
            }
            if(valueKomp == "standard"){
                let result = valueSquare * 28000;
                $(".calculator__cost").html(result);
            }
            if(valueKomp == "premium"){
                let result = valueSquare * 34000;
                $(".calculator__cost").html(result);
            }
        }
    });
});

function numbersOnly(){
        if(event.keyCode != 43 && event.keyCode <48 || event.keyCode>57){
            event.preventDefault();
        }
    }

