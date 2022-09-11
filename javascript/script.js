$('.toggle').click(function(){
$('.navbar-ul').toggleClass('active');
$("body").toggleClass("active");
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 10) {
        $("nav").addClass("active");
        $("header").addClass("active");
    }
    else{
        $("nav").removeClass("active");
        $("header").removeClass("active");
    }
  });
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
  let menutoggle = document.querySelector('.toggle');
  menutoggle.onclick = function(){
      menutoggle.classList.toggle('active')
  }

  let marker = document.querySelector('#marker');
  let item = document.querySelectorAll('ul li a');

  function Indicator(e){
      marker.style.top = e.offsetTop+'px';
      marker.style.width = e.offsetWidth+'px';
  }


  item.forEach(link => {
      link.addEventListener('mousemove', (e) => {
          Indicator(e.target);
      })
  })

    $('.navbar-ul li').hover(function(){
    $('#marker').toggleClass('active')
    });






//   function rain(){
//     let amount = 5;
//     let body = document.querySelector('body');
//     let line = 0;
//     while(line < amount){
//         let drop = document.createElement('.line');

//         let size = Math.random() * 5;
//         let posX =  Math.floor(Math.random() * window.innerWidth);
//         let delay  = Math.random() * -20;



//         drop.style.width = 0.2 + size+'px';
//         drop.style.left = posX + 'px';
//         drop.style.animationDelay = delay+'s';
//         body.appendChild(drop);
//         line++
//     }
// }

// rain();