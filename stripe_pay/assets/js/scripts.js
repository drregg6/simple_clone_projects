$(document).ready(function() {
    var screenWidth = window.innerWidth;
    
    if (screenWidth > 992) {
        $('.dtop-img').removeClass('hidden');
        $('.logo-row').addClass('dtop-flex');
    }
});