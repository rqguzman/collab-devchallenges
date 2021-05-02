const element = document.getElementById('mobile-navigation');

function toggleMobilenavigation() {
    if (element.classList.contains('mobile-navigation__open')) {
        element.classList.remove('mobile-navigation__open');
    } else {
        element.classList.add('mobile-navigation__open');
    }
}