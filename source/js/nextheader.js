$(document).ready(function () {

     $(window).scroll(function(){
    if ($(window).scrollTop() <= 10) {
      $('#header').removeClass("sticky");
      $('.header-inner').removeClass("header-inner-fix");
      $('.site-title').text("Jonathan Latties");
    }
    else {
      $('#header').addClass("sticky");
      $('.header-inner').addClass("header-inner-fix");
      $('.site-title').text("John Latties");
    }
});

});
