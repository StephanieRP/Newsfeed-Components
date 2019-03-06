const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
};

const moveRight = () => {
  menuButton.classList.add("menu-animate");
};

const moveLeft = () => {
  menuButton.classList.remove("menu-animate");
};
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
const header = document.querySelector(".header");
console.log(header);

//menu animation

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
header.addEventListener("mouseover", moveRight);
header.addEventListener("mouseleave", moveLeft);
