// Navbar
$(function () {
    $(document).scroll(function (){
        var $nav = $(".navbar-fixed-top, .nav-link");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
