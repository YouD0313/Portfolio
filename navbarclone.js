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
