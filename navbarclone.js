// window.scrollY 가 navbarHeight 보다 작을 때 투명하게
const navbar = document.getElementById('navbar');
// navbar의 height 구하는 함수
const navbarHegiht = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	// console.log(window.scrollY);
	// console.log(`height : ${navbarHegiht}`);
	if (window.scrollY >= navbarHegiht) {
		navbar.classList.add('navbar--change');
	} else {
		navbar.classList.remove('navbar--change');
	}
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
	// console.log(event.target.dataset.link);
	const target = event.target;
	const link = target.dataset.link;
	// console.log(target.link);
	if (link == null) {
		return;
	}

	scrollIntoView(link);
});

// Handle click on "contact me" button on home
const btnContact = document.querySelector('.home__contact');
btnContact.addEventListener('click', () => {
	scrollIntoView('#contact');
});

function scrollIntoView(selector) {
	const contact = document.querySelector(selector);
	contact.scrollIntoView({ behavior: 'smooth' });
}
