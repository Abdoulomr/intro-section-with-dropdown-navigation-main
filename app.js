const navListItems = document.querySelectorAll('.dd__');
const features = document.querySelector('.features');
const featuresArrowDownIcon = document.querySelector('.features__arrow--down');
const company = document.querySelector('.company');
const companyArrowDownIcon = document.querySelector('.company__arrow--down');


navListItems.forEach(function (navListItem) {
    navListItem.addEventListener('click', function (e) {
        const item = e.currentTarget.classList;
        if (item.contains('features__item')){
            features.classList.toggle('dd__features');
            // To make the arrow down rotate
            featuresArrowDownIcon.classList.toggle('arrow__uped');

        } else if (item.contains('company__item')){
            company.classList.toggle('dd__company');
            // To make the arrow down rotate
            companyArrowDownIcon.classList.toggle('arrow__uped');

        }
    });
});




// Burger menu
const burgerMenu = document.querySelector('.burger__menu');
const closeBurger = document.querySelector('.close__burger');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('nav__active');
    closeBurger.classList.toggle('close__burger--displayed');
    burger.classList.toggle('.burger__hidden');

});

document.querySelectorAll('.nav__list--link').forEach(n => n.addEventListener('click', () => {
    nav.classList.remove('nav__active');
    closeBurger.classList.remove('close__burger--displayed');
}));






