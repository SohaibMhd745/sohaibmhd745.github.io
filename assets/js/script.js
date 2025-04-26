const links = document.querySelectorAll('nav a');
const path = window.location.pathname;

links.forEach(link => {
    if (link.getAttribute('href') === path) {
        link.style.fontWeight = '700';
    } else {
        link.style.fontWeight = '500';
    }
});
