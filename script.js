let burger = document.querySelector('.header__burger'),
    nav = document.querySelector('.header__nav');

burger.addEventListener('click', function(e) {
    burger.classList.toggle('active');
});

burger.addEventListener('click', function(e) {
    nav.classList.toggle('active');
    document.body.classList.toggle('lock');
});