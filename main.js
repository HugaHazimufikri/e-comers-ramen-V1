window.onload = function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const buyButton = document.querySelector('.buy-button');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    }
    )
}