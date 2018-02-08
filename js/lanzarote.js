
$(document).ready(function(){
    $('#carouselExampleControls').carousel()
    $('[data-toggle="tooltip"]').tooltip();
    $('.rectangulo1').click(function() {
        window.open("./cabildo-cabildo.html","_self")
    });
    $('.rectangulo1').click(function() {
        window.open("./cabildo-cabildo.html","_self")
    });
    $('.caja2').click(function() {
      window.open("./cabildo-jovenes.html","_self")
  });
    $('#perfil').click(function() {
      window.open("./cabildo-login.html","_self")
  });
});

$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });
