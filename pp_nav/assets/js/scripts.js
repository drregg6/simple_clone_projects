// grab needed elements
var menuItemPersonal = document.getElementById('personal');
var menuItemBusiness = document.getElementById('business');
var dropdownPersonal = document.querySelector('.dd-personal');
var dropdownBusiness = document.querySelector('.dd-business');
var closeElements = document.querySelectorAll('.dd-close');

// add eventlisteners to elements
// testers
menuItemBusiness.addEventListener('click', business);
menuItemPersonal.addEventListener('click', personal);
closeElements.forEach(function(closeElement, i) {
    closeElement.addEventListener('click', close);
})

//window.onclick = windowTest;
//
//if (!dropdownPersonal.classList.contains('dropdown') || !dropdownBusiness.classList.contains('dropdown')) {
//    window.onclick = close;
//}

/*
personal and business
onclick
if .dropdown is not visible
dropdown slowly reveals
image pushed down
arrow will animate upwards
else
.dropdown hides
*/
/*
x button on
onclick
dropdown slowly closes
arrow will animate downwards
*/
/*
if dropdown is open
window onclick
if !.dropdown is clicked
close dropdown
*/


// functions
function close() {
    menuItemPersonal.classList.remove('li-selected');
    menuItemBusiness.classList.remove('li-selected');
    dropdownBusiness.classList.add('dropdown');
    dropdownPersonal.classList.add('dropdown');
}

function personal() {
    if (!dropdownPersonal.classList.contains('dropdown')) {
        close();
    } else if (!dropdownBusiness.classList.contains('dropdown')) {
        close();
        menuItemPersonal.classList.add('li-selected');
        dropdownPersonal.classList.remove('dropdown');
    } else {
        menuItemPersonal.classList.add('li-selected');
        dropdownPersonal.classList.remove('dropdown');
    }
}

function business() {
    if (!dropdownBusiness.classList.contains('dropdown')) {
        close();
    } else if (!dropdownPersonal.classList.contains('dropdown')) {
        close();
        menuItemBusiness.classList.add('li-selected');
        dropdownBusiness.classList.remove('dropdown');
    } else {
        menuItemBusiness.classList.add('li-selected');
        dropdownBusiness.classList.remove('dropdown');
    }
}

//function windowTest() {
//    console.log("I work!")
//    if (!dropdownPersonal.classList.contains('dropdown') || !dropdownBusiness.classList.contains('dropdown')) {
//        close();
//    }
//}