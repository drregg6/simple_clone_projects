var screenWidth = window.innerWidth;
var desktopDivs = document.querySelectorAll('.desktop-elements');
var formContainer = document.querySelector('.form-container');

// temporary fix for hiding site map

if (screenWidth > 992) {
    formContainer.classList.add('col-lg-3');
//    for (var i = 0; i < desktopDivs.length; i++) {
//        desktopDivs[i].classList.remove('hide');
//    }
    desktopDivs.forEach(function(div, i) {
        div.classList.remove('hide');
    })
}