$(document).ready(function () {
    $("#openMenu").click(function() {
        $("#main").fadeIn(200);
        $("#openMenu").animate({left:"-10%"});
        $("#closeMenu").animate({left:"95%"});
        $("#navBar").style(display("none"));

    });
    $("#closeMenu").click(function() {
        $("#main").fadeOut(200);
        $("#openMenu").animate({left:"0%"});
        $("#closeMenu").animate({left:"100%"});

    })

});