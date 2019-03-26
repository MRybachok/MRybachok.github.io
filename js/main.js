// nav-bar
$(".nav-bar__hamburger").on("click", function(){
    $(".nav-bar__hamburger").toggleClass("nav-bar__hamburger--active");
    $(".nav-bar__menu").toggleClass("nav-bar__menu--active");

});

// modal window
$(".modal-btn").on("click", function(){
    $("body").toggleClass("modal-open");
    $(".modal-window").toggleClass("modal-window--active");

});

$(".modal-window__close").on("click", function(){
    $("body").removeClass("modal-open");
    $(".modal-window").removeClass("modal-window--active");
});

