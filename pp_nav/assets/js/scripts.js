// grab needed elements
var menuItemPersonal = document.getElementById('personal');
var menuItemBusiness = document.getElementById('business');
var dropdownPersonal = document.querySelector('.dd-personal');
var dropdownBusiness = document.querySelector('.dd-business');

// add eventlisteners to elements
// testers
menuItemPersonal.addEventListener('click', function() {
    console.log(this);
    if (dropdownPersonal.classList.contains('dropdown')) {
        dropdownPersonal.classList.remove('dropdown')
    } else {
        dropdownPersonal.classList.add('dropdown');
    }
});
menuItemBusiness.addEventListener('click', function() {
    console.log(this);
    if (dropdownBusiness.classList.contains('dropdown')) {
        dropdownBusiness.classList.remove('dropdown')
    } else {
        dropdownBusiness.classList.add('dropdown');
    }
});
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