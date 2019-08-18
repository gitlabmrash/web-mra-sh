

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        if ($("#collapsibleNavbar").hasClass('show')) {
            $("#collapsibleNavbar").removeClass('show');
        } else {
            $("#collapsibleNavbar").addClass('show');
        }
    });
});
