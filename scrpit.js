// burger Menu
const burgerMenu = document.getElementById("burger-menu");
const navContainer = document.querySelector(".nav__container");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
	navContainer.classList.toggle("active");
});

// animation
document.addEventListener("DOMContentLoaded", function () {
	const elements = document.querySelectorAll(".fade-in");
	elements.forEach((element) => {
		element.classList.add("loaded");
	});
});
