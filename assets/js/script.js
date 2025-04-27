document.querySelectorAll('.compare').forEach(button => {
    button.addEventListener('click', function () {
        const thumbnail = this.closest('.video').querySelector('.thumbnail');
        const rawImage = thumbnail.querySelector('.raw');

        button.disabled = true;
        button.classList.add('disabled');

        rawImage.classList.remove('hidden');
        rawImage.classList.add('visible');

        setTimeout(() => {
            rawImage.classList.remove('visible');
            rawImage.classList.add('hidden');

            setTimeout(() => {
                button.disabled = false;
                button.classList.remove('disabled');
            }, 500);
        }, 2000);
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
