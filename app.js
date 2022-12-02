const navListItems = document.querySelectorAll(".dd__");
const features = document.querySelector(".features");
const featuresArrowDownIcon = document.querySelector(".features__arrow--down");
const company = document.querySelector(".company");
const companyArrowDownIcon = document.querySelector(".company__arrow--down");

navListItems.forEach(function (navListItem) {
  navListItem.addEventListener("click", function (e) {
    const item = e.currentTarget.classList;
    if (
      item.contains("features__item") &&
      document.documentElement.clientWidth <= 800
    ) {
      features.classList.toggle("dd__features");
      // To make the arrow down rotate
      featuresArrowDownIcon.classList.toggle("arrow__uped");
    } else if (
      item.contains("company__item") &&
      document.documentElement.clientWidth <= 800
    ) {
      company.classList.toggle("dd__company");
      // To make the arrow down rotate
      companyArrowDownIcon.classList.toggle("arrow__uped");
    }
  });
});

//Removing dropdown if it first was activated from maxWidth 800 window

window.addEventListener("resize", () => {
  if (
    document.documentElement.clientWidth > 800 &&
    features.classList.contains("dd__features")
  ) {
    features.classList.remove("dd__features");
    featuresArrowDownIcon.classList.remove("arrow__uped");
  }

  if (
    document.documentElement.clientWidth > 800 &&
    company.classList.contains("dd__company")
  ) {
    company.classList.remove("dd__company");
    companyArrowDownIcon.classList.remove("arrow__uped");
  }
});

// Burger menu
const burgerMenu = document.querySelector(".burger__menu");
const closeBurger = document.querySelector(".close__burger");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("nav__active");
  closeBurger.classList.toggle("close__burger--displayed");
  burger.classList.toggle(".burger__hidden");
});

document.querySelectorAll(".nav__list--link").forEach((n) =>
  n.addEventListener("click", () => {
    nav.classList.remove("nav__active");
    closeBurger.classList.remove("close__burger--displayed");
  })
);
