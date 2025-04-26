document.querySelectorAll('.compare').forEach(button => {
    button.addEventListener('click', function () {
        const button = this;
        const thumbnail = this.closest('.video').querySelector('.thumbnail img');
        const originalSrc = thumbnail.src;

        button.disabled = true;
        button.classList.add('disabled');

        thumbnail.src = originalSrc.replace('.jpg', '_raw.jpg');

        setTimeout(() => {
            thumbnail.src = originalSrc;
            button.disabled = false;
            button.classList.remove('disabled');
        }, 2000);
    });
});
