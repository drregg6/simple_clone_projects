$(document).ready(function() {
    $('#business').on('click', function() {
        $('#personal').removeClass( 'li-selected' );
        $('.dd-personal').css( 'display', 'none' );
        
        $('#business').toggleClass( 'li-selected' );
        $('.dd-business').slideToggle( 'normal' );
    });
    $('#personal').on('click', function() {
        $('#business').removeClass( 'li-selected' );
        $('.dd-business').css( 'display', 'none' );
        
        $('#personal').toggleClass( 'li-selected' );
        $('.dd-personal').slideToggle( 'normal' );
    });
    $('.dd-close').on('click', function() {
        console.log(this.parentElement);
        $('#business').removeClass( 'li-selected' );
        $('#personal').removeClass( 'li-selected' );
        $(this).parent().slideUp( 'normal' );
    });
})




/*
personal and business
dropdown slowly reveals <--- add (jquery or css)
image pushed down <--- add (jquery or css)
else
.dropdown hides
*/
/*
if dropdown is open
window onclick
if !.dropdown is clicked
close dropdown
*/
// close when the window is clicked anywhere BUT the element

// grab needed elements
var menuItemPersonal = document.getElementById('personal');
var menuItemBusiness = document.getElementById('business');
var dropdownPersonal = document.querySelector('.dd-personal');
var dropdownBusiness = document.querySelector('.dd-business');
var closeElements = document.querySelectorAll('.dd-close');

// add eventlisteners to elements
//menuItemBusiness.addEventListener('click', business);
//menuItemPersonal.addEventListener('click', personal);
//closeElements.forEach(function(closeElement, i) {
//    closeElement.addEventListener('click', close);
//})

// testers
//window.onclick = windowTest;
//
//if (!dropdownPersonal.classList.contains('dropdown') || !dropdownBusiness.classList.contains('dropdown')) {
//    window.onclick = close;
//}


// functions
//function close() {
//    menuItemPersonal.classList.remove('li-selected');
//    menuItemBusiness.classList.remove('li-selected');
//    dropdownBusiness.classList.add('dropdown');
//    dropdownPersonal.classList.add('dropdown');
//}
//
//function personal() {
//    if (!dropdownPersonal.classList.contains('dropdown')) {
//        close();
//    } else if (!dropdownBusiness.classList.contains('dropdown')) {
//        close();
//        menuItemPersonal.classList.add('li-selected');
//        dropdownPersonal.classList.remove('dropdown');
//    } else {
//        menuItemPersonal.classList.add('li-selected');
//        dropdownPersonal.classList.remove('dropdown');
//    }
//}
//
//function business() {
//    if (!dropdownBusiness.classList.contains('dropdown')) {
//        close();
//    } else if (!dropdownPersonal.classList.contains('dropdown')) {
//        close();
//        menuItemBusiness.classList.add('li-selected');
//        dropdownBusiness.classList.remove('dropdown');
//    } else {
//        menuItemBusiness.classList.add('li-selected');
//        dropdownBusiness.classList.remove('dropdown');
//    }
//}

//function windowTest() {
//    if (!dropdownPersonal.classList.contains('dropdown') || !dropdownBusiness.classList.contains('dropdown')) {
//        console.log("I work!")
//        close();
//    } else {
//        console.log("Meh");
//    }
//}