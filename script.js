let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.querySelector('header').classList.add('visible');
    } else {
        document.querySelector('header').classList.remove('visible');
    }

    prevScrollPos = currentScrollPos;
});
