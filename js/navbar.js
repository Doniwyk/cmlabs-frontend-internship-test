$(function() {
    $("#navbar-placeholder").load("navbar.html", function() {
        $('#menu-toggle').on('click', function() {
            $('#mobile-menu').toggleClass('hidden');
        });
    });
});