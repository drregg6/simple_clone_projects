// grab universal elements and variables
var screenWidth = window.innerWidth;
var desktopDivs = document.querySelectorAll('.desktop-elements');
var formContainer = document.querySelector('.form-container');


// add event listeners to window
window.onload = desktopCssRules;
window.onresize = getScreenWidth;


// add css classes to desktop elements when screen size is appropriate
function desktopCssRules() {
    if (screenWidth > 992) {
        formContainer.classList.add('col-lg-3');
        // remove the .hide class from all site map elements
        desktopDivs.forEach(function(div, i) {
            div.classList.remove('hide');
        });
    } else {
        // if it's anything BUT the desktop, but the classes exist, remove them
        if (formContainer.classList.contains('col-lg-3')) {
            formContainer.classList.remove('col-lg-3');
        }
        if (!desktopDivs[0].classList.contains('hide')) {
            desktopDivs.forEach(function(div, i) {
                div.classList.add('hide');
            });
        }
    }
}

// get the screenWidth and apply the desktopCssRules on resize
function getScreenWidth() {
    screenWidth = window.innerWidth;
    
    desktopCssRules();
}