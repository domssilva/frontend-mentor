var mobileNav = document.getElementById('toggleNavMobile');
var toggleNavBtn = document.getElementById('toggleNavIcon');
let navOpen;

toggleNavBtn.onclick = function() {

    if (toggleNavBtn.className == 'fas fa-bars') {
        navOpen = false;
    } else {
        navOpen = true;
    }

    if (!navOpen) {
        // open nav
        mobileNav.style.display = 'block';
        toggleNavBtn.classList = 'far fa-window-close';
    } else {
        // close nav
        mobileNav.style.display = 'none';
        toggleNavBtn.classList = 'fas fa-bars';
    }
    
}