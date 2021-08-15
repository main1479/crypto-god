const navButton = document.querySelector('.nav__button');
const navTriggers = document.querySelectorAll('.menu__trigger');
const nav = document.querySelector('.nav');

navTriggers.forEach((btn) => {
	btn.addEventListener('click', () => {
		nav.classList.toggle('active');
		navButton.classList.toggle('active');
	});
});

// sticky nav
const stickyNav = (entries) => {
	const [entry] = entries;
	console.log(entry.isIntersecting);
	if (!entry.isIntersecting) nav.classList.add('sticky');
	else nav.classList.remove('sticky');
};
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

$('.mumber-active').owlCarousel({
	items: 4,
	nav: true,
	navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
	dot: true,
	loop: true,
	margin: 40,
	autoplay: true,
	autoplayTimeout: 3000,
	smartSpeed: 1000,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 3,
		},
		992: {
			items: 3,
		},
		1000: {
			items: 4,
		},
	},
});
