$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#header").addClass("scrolled");
    } else {
       $("#header").removeClass("scrolled");
    }
    });