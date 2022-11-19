// mobile menu functionality
const navList = document.querySelector(".navlist");
const navToggle = document.querySelector(".toggle-btn");
let overlay = document.querySelector(".wrapper");

navToggle.addEventListener("click", () => {
	const visibility = navList.getAttribute('data-visible');
	if (visibility === 'false') {
		navList.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
		overlay.style.display = "block";
		document.body.style.overflowY = 'hidden';
		
	} else {
		navList.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
		overlay.style.display = "none";
		document.body.style.overflowY = 'auto';
	}	
});
