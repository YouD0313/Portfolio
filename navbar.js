'use strict';
// document.addEventListener('scroll', function() {
//     const navbar = document.getElementById('navbar');
//     let navbarHeight = navbar.offsetHeight;
//     let windowTop = window.screenY;
//     if(windowTop >= navbarHeight) {
//         navbar.classList.add('drop');
//     } else {
//         navbar.classList.add('drop');
//     }
// }

// $(window).on('scroll', function () {
// 	const fix_header = document.getElementById('navbar');
// 	if ($(window).scrollTop()) {
// 		$(fix_header).addClass('active');
// 	} else {
// 		$(fix_header).removeClass('active');
// 	}
// });

document.addEventListener('scroll', () => {
	console.log(window.scrollY);
	// const navbar = document.getElementById('navbar');
	// let navbarHeight = navbar.offsetHeight;
	// let windowTop = window.screenY;
	// if (windowTop >= navbarHeight) {
	// 	navbar.style.backgroundColor = 'transparent';
	// } else {
	// 	navbar.style.backgroundColor = '#ffd99f';
	// }
});
