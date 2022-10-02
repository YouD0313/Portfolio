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
	} else {
		scrollIntoView(link);
	}
});

// Handle click on "contact me" button on home
const btnHomeContact = document.querySelector('.home__contact');
btnHomeContact.addEventListener('click', () => {
	scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
// const home = document.querySelector('#home');
const homeWrap = document.querySelector('#home__wrap');
const homeHeight = homeWrap.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	console.log(`homeHeight: ${homeHeight}`);
	// console.log(1 - window.scrollY / homeHeight);
	let opacity = 1 - window.scrollY / homeHeight;
	homeWrap.style.opacity = opacity;
});

// Show "arrow up" button when scrolling down
const topBtn = document.querySelector('.top__btn');
document.addEventListener('scroll', (data) => {
	data = false;
	if (window.scrollY > homeHeight / 2) {
		topBtn.classList.add('visible');
		data = true;
	} else {
		topBtn.classList.remove('visible');
		data = false;
	}
});

// Handle click on the "arrow up" button
topBtn.addEventListener('click', (data) => {
	if (data) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
});

function scrollIntoView(selector) {
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({ behavior: 'smooth' });
}
