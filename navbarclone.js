// window.scrollY 가 navbarHeight 보다 작을 때 투명하게
const navbar = document.getElementById('navbar');
// navbar의 height 구하는 함수
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	// console.log(window.scrollY);
	// console.log(`height : ${navbarHeight}`);
	if (window.scrollY >= 1) {
		navbar.classList.add('navbar--change');
	} else {
		navbar.classList.remove('navbar--change');
	}
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
const navbarLi = document.querySelectorAll('li');
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
	setTimeout(() => {
		navbarMenu.classList.remove('open');
	}, 700)
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
	// console.log(`homeHeight: ${homeHeight}`);
	// console.log(1 - window.scrollY / homeHeight);
	let opacity = 1 - window.scrollY / homeHeight;
	homeWrap.style.opacity = opacity;
});

// Show "arrow up" button when scrolling down
const topBtn = document.querySelector('.top__btn');
document.addEventListener('scroll', () => {
	if (window.scrollY > homeHeight / 2) {
		topBtn.classList.add('visible');
	} else {
		topBtn.classList.remove('visible');
	}
});

// Handle click on the "arrow up" button
topBtn.addEventListener('click', () => {
	scrollIntoView('#home');
});

function scrollIntoView(selector) {
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// Work project items filltering
const workBtns = document.querySelector('.work__categories');
const workProjectsContainer = document.querySelector('.work__projects');
const workProjects = document.querySelectorAll('.project'); //array
workBtns.addEventListener('click', (e) => {
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	// console.log(filter);
	if (filter == null) {
		return;
	}
	workProjectsContainer.classList.add('anim-out');
	setTimeout(() => {
		workProjects.forEach((item) => {
			if (filter === '*' || filter === item.dataset.type) {
				item.classList.remove('invisible');
			} else {
				item.classList.add('invisible');
			}
		});
		workProjectsContainer.classList.remove('anim-out');
	}, 300);
});

// Active state
const navbarMenuItem = document.querySelectorAll('.navbar__menu__item')
navbarMenuItem.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        navbarMenuItem.forEach((item)=> {
            item.classList.remove('active')
        })
        navbarMenuItem[idx].classList.add('active')
    })
})

const workCategoryBtn = document.querySelectorAll('.category__btn')
workCategoryBtn.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        workCategoryBtn.forEach((inner)=> {
            inner.classList.remove('active')
        })
        workCategoryBtn[idx].classList.add('active')
    })
})

// Navbar toggle button for small screen


const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
	navbarMenu.classList.toggle('open');
})