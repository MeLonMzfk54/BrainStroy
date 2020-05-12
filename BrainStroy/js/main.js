 document.querySelector(".headerMain__burger").onclick = function(){
      document.querySelector(".headerMain__menu").classList.toggle("visibleMain");
      document.querySelector(".headerMain__burger").classList.toggle("close");
  }
 

let card = document.querySelectorAll(".technology__item");

for(let i = 0;i<card.length;i++){
    card[i].addEventListener("mousemove",rotate);
    card[i].addEventListener("mouseout",rotateStop);
}


function rotate(event){
    let cardItem = this.querySelector(".technology__card");
    let halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = "rotateX("+ -(event.offsetY - halfHeight) / 15+"deg) rotateY("+(event.offsetX - halfHeight) / 15+"deg)";
}
function rotateStop(event){
    let cardItem = this.querySelector(".technology__card");
    cardItem.style.transform = "rotate(0)";
}

$(function() {
 
$(window).scroll(function() {
($(this).scrollTop() != 0) ? $('#toTop').fadeIn() :  $('#toTop').fadeOut(); 
});

$('#toTop').click(function() {
$('*').animate({scrollTop:0},500);
});

});