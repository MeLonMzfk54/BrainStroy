//$(document).mousemove(function(e){
//   let x = (e.pageX * -1/5);
//   let y = (e.pageY * -1/5);
//    $(".right__builder").css("background-position",x +"px" + y +"px");
//});

//var scene = document.getElementById('scene');
//var parallaxInstance = new Parallax(scene);

function parallax(event){
    if(document.body.clientWidth > 960){
        this.querySelectorAll(".layer").forEach(layer =>{
        let spd = layer.getAttribute('data-spd');
        if(spd<=20){
          layer.style.transform = `translateY(${event.clientX*spd/1000}px)`;
        }else{
          layer.style.transform = `translateX(${event.clientX*spd/1000}px)`;
        }
        
    });
    }
}
document.addEventListener("mousemove", parallax);
                //***************БУРГЕР НА ПРИВЕТСТВЕННОЙ СТРАНИЦЕ
  document.querySelector(".burger").onclick = function(){
      document.querySelector(".menu").classList.toggle("visible");
      document.querySelector(".burger").classList.toggle("close");
  }
  
  
  $(document).ready(function(){
      $(window).scroll(function(event){
         let windowPx = $(this).scrollTop(); 
         let wWindow = $(this).outerWidth();
         let hWindow = $(".first").outerHeight();
          let hUpper = $(".parallax").outerHeight();
          let p = windowPx / hWindow * 100;
          let pUpper = windowPx / hUpper * 100;
          let o = 1 - 1/100 * pUpper;
          
          let zoom_1 = 1+(wWindow / 10000 * pUpper);
          let zoom_2 = 1+(wWindow/ 5000000*p);
          let zoom_3 = 1+(wWindow*0.000005*pUpper);
          let zoom_4 = 1+(wWindow*0.00001*pUpper);
          $(".parallax__fog").css("transform","scale("+zoom_1+")");
          $(".parallax__fog").css("opacity",o);
          
          
          $(".parallax__mountain_1").css("transform","scale("+zoom_2+")");
            let hr = wWindow/2000*pUpper;
          $(".parallax__mountain_2").css("transform","translate3d("+hr+"px,0,0) scale("+zoom_3+")");
           let hr_1 = wWindow/4000*pUpper;
          $(".parallax__mountain_3").css("transform","translate3d("+hr_1+"px,0,0) scale("+zoom_4+")");
          
          if($(".parallax__fog").css("opacity") < 0.06){
               $(".parallax__mountain_2").css("visibility","hidden");
               $(".parallax__mountain_3").css("visibility","hidden");
               $(".parallax__fog").css("visibility","hidden");
              $(".menu").css("visibility","visible");
          }else{
              $(".parallax__mountain_2").css("visibility","visible");
               $(".parallax__mountain_3").css("visibility","visible");
               $(".parallax__fog").css("visibility","visible");
              $(".menu").css("visibility","hidden");
          }
      });
  });

//function MovementOfImages(){
//    document.querySelectorAll(".layer").forEach(layer =>{
//       let speed = layer.getAttribute('data-static');
//        if(speed %2 == 0){
//          layer.style.transform = `translateX(${speed*100}px)`;
//        }else{
//           layer.style.transform = `translateY(${speed*100}px)`; 
//        }
//    });
//}
