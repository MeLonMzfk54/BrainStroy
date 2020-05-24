 
// Корявая, недоделанная анимация карточек в блоке popular, при наведении на них мышкой
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
