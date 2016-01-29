$(document).ready(function () {

     $(window).scroll(function(){
    if ($(window).scrollTop() >= 1) {
       $('#header').addClass("sticky");
       $('.header-inner').addClass("header-inner-fix");
       $('.site-title').text("John Latties");
    }
    else {
       $('#header').removeClass("sticky");
       $('.header-inner').removeClass("header-inner-fix");
       $('.site-title').text("Jonathan Latties");
    }
});

});
