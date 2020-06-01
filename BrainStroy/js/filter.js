$(document).ready(function(){
    //разворачивание блока с фильтром
   $('.filter__title').click(function(event){
       if($('.filter__params').hasClass('one')){
           $('.filter__title').not($(this)).removeClass('active');
           $('.filter__params').not($(this).next()).slideToggle(300);
       }
       $(this).toggleClass("active").next().slideToggle(300);
   });
    // Появление и исчезание блока с фильтром
    $(window).scroll(function() {
        if($(this).scrollTop() >= 350){
           $('.builded__filter').fadeIn();
        }else{
            if($(this).scrollTop() <= 150){
                $('.builded__filter').fadeOut();
            }
        }
    });
    
    //Настройка фильтра
    $(".filter__wood").click(function(){
       $(this).toggleClass("checked"); 
    });
        $(".filter__brick").click(function(){
       $(this).toggleClass("checked"); 
    });
    
    $(".filter__button").click(function(){
        let costFrom = Number($(".filter__input_cost-l").val()),
         costTo = Number($(".filter__input_cost-r").val()),
         rooms = Number($(".filter__input_rooms").val()),
         squareFrom = Number($(".filter__input_square-l").val()),
         squareTo = Number($(".filter__input_square-r").val());
        let houses = $(".builded__house");
        
            if(squareTo==0){
                squareTo = 1000000000;
            }
            if(costTo==0){
                costTo = 1000000000;
            }
        for(let i = 0;i<houses.length;i++){
            
            let houseSquare = Number($(houses[i]).find(".builded__square").text()),
                houseRooms = Number($(houses[i]).find(".builded__rooms").text()),
                houseCost = Number($(houses[i]).find(".builded__cost").text().split(" ").join("")),
                houseMat = $(houses[i]).find(".builded__material").text();
            
            if($(".filter__wood").hasClass("checked")){ //если wood has checked
                if(!$(".filter__brick").hasClass("checked")){//если brick hasnt checked
                    if(houseMat != "брус"){ //если Материал дома != брус
                        if(!$(houses[i]).hasClass("material__hidden")){ //если дом не скрыт
                            $(houses[i]).addClass("material__hidden"); // скрываем дом
                        }
                    }else if (houseMat == "брус"){
                        if($(houses[i]).hasClass("material__hidden")){
                            $(houses[i]).removeClass("material__hidden");
                        }
                    }
                }else if($(".filter__brick").hasClass("checked")){
                    if($(houses[i]).hasClass("material__hidden")){
                        $(houses[i]).removeClass("material__hidden");
                    }
                } 
            }
            
            if(!$(".filter__wood").hasClass("checked")){
                if(!$(".filter__brick").hasClass("checked")){
                    if($(houses[i]).hasClass("material__hidden")){
                        $(houses[i]).removeClass("material__hidden");
                    }
                }
                if($(".filter__brick").hasClass("checked")){
                    if(houseMat != "кирпич"){
                        if(!$(houses[i]).hasClass("material__hidden")){ 
                            $(houses[i]).addClass("material__hidden"); 
                        }
                    }else if (houseMat == "кирпич"){
                        if($(houses[i]).hasClass("material__hidden")){
                            $(houses[i]).removeClass("material__hidden");
                        }
                    }
                }
            }
        
            if(houseCost >= costFrom && houseCost <= costTo){
                if($(houses[i]).hasClass("cost__hidden")){
                    $(houses[i]).removeClass("cost__hidden");
                }
            }else{
                 if(!$(houses[i]).hasClass("cost__hidden")){
                     $(houses[i]).addClass("cost__hidden");
                 }   
                } 
            if(costFrom == 0 && costTo == 0){
                if($(houses[i]).hasClass("cost__hidden")){
                    $(houses[i]).removeClass("cost__hidden");
                }
            }
            
            if(houseSquare >= squareFrom && houseSquare <= squareTo){
                if($(houses[i]).hasClass("square__hidden")){
                    $(houses[i]).removeClass("square__hidden");
                }
            }else{
                    if (!$(houses[i]).hasClass("square__hidden")) {
                        $(houses[i]).addClass("square__hidden");
                    }  
                }
            if(squareFrom == 0 && squareTo == 0){
                if($(houses[i]).hasClass("square__hidden")){
                    $(houses[i]).removeClass("square__hidden");
                }
            }
            
            
            if(houseRooms == rooms){
                if($(houses[i]).hasClass("rooms__hidden")){
                    $(houses[i]).removeClass("rooms__hidden");
                }
            }else if (houseRooms != rooms){
                if(!$(houses[i]).hasClass("rooms__hidden")){
                     $(houses[i]).addClass("rooms__hidden");
                 }
            } 
            if (rooms == ""){
                if($(houses[i]).hasClass("rooms__hidden")){
                    $(houses[i]).removeClass("rooms__hidden");
                }
            }
        }
        
        for(let j = 0;j<houses.length;j++){
            if($(houses[j]).hasClass("rooms__hidden") || $(houses[j]).hasClass("square__hidden") || $(houses[j]).hasClass("cost__hidden") || $(houses[j]).hasClass("material__hidden")){
                $(houses[j]).fadeOut(1000);
            }else {
                $(houses[j]).fadeIn(1000);
            }
        }
           
    });
    
});

function numbersOnly(){
        if(event.keyCode != 43 && event.keyCode <48 || event.keyCode>57){
            event.preventDefault();
        }
    }