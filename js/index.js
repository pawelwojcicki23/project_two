$(window).scroll(function(){
    var top = $(window).scrollTop();
    var find_class_small = $.contains('nav', '.small');
  
    if(top > 50 && find_class_small == false) { // tu zmieniamy wysokosc - gdy strona zjedzie 50px w dol
     $('nav').addClass('small'); // nawigacja otrzyma klase small
    }
    else {
     $('nav').removeClass('small'); // w przeciwnym wypadku usuwamy klase small
    }
  
 });