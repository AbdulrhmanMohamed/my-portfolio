// Import GSAP with proper TypeScript support
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

console.log('Animations file loaded');

// Register GSAP plugins
if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
	console.log('GSAP and ScrollTrigger registered successfully');
}

// Animation configuration
const ANIMATION_CONFIG = {
	duration: {
		fast: 0.3,
		normal: 0.6,
		slow: 1.2,
		hero: 1.5
	},
	ease: {
		smooth: 'power2.out',
		bounce: 'back.out(1.7)',
		elastic: 'elastic.out(1, 0.3)',
		power: 'power4.out'
	},
	stagger: {
		fast: 0.1,
		normal: 0.2,
		slow: 0.3
	}
};

// Hero Section Animations
export function initHeroAnimations() {
	if (typeof window === 'undefined') return;

	console.log('Initializing hero animations...');

	// Check if elements exist
	const heroTitle = document.querySelector('.hero-title');
	const heroSubtitle = document.querySelector('.hero-subtitle');
	const heroDescription = document.querySelector('.hero-description');
	const heroButtons = document.querySelector('.hero-buttons');
	const heroImage = document.querySelector('.hero-image');
	const floatingElements = document.querySelectorAll('.floating-element');

	console.log('Hero elements found:', {
		heroTitle: !!heroTitle,
		heroSubtitle: !!heroSubtitle,
		heroDescription: !!heroDescription,
		heroButtons: !!heroButtons,
		heroImage: !!heroImage,
		floatingElements: floatingElements.length
	});

	if (!heroTitle) {
		console.warn('Hero title element not found');
		return;
	}

	const tl = gsap.timeline({ delay: 0.5 });

	// Set initial states
	gsap.set('.hero-title', { y: 100, opacity: 0 });
	gsap.set('.hero-subtitle', { y: 50, opacity: 0 });
	gsap.set('.hero-description', { y: 30, opacity: 0 });
	gsap.set('.hero-buttons', { y: 40, opacity: 0 });
	gsap.set('.hero-image', { scale: 0.8, opacity: 0 });
	gsap.set('.floating-element', { scale: 0, opacity: 0 });

	// Animate hero elements
	tl.to('.hero-title', {
		y: 0,
		opacity: 1,
		duration: ANIMATION_CONFIG.duration.hero,
		ease: ANIMATION_CONFIG.ease.power
	})
	.to('.hero-subtitle', {
		y: 0,
		opacity: 1,
		duration: ANIMATION_CONFIG.duration.normal,
		ease: ANIMATION_CONFIG.ease.smooth
	}, '-=0.8')
	.to('.hero-description', {
		y: 0,
		opacity: 1,
		duration: ANIMATION_CONFIG.duration.normal,
		ease: ANIMATION_CONFIG.ease.smooth,
		stagger: ANIMATION_CONFIG.stagger.normal
	}, '-=0.6')
	.to('.hero-buttons', {
		y: 0,
		opacity: 1,
		duration: ANIMATION_CONFIG.duration.normal,
		ease: ANIMATION_CONFIG.ease.bounce
	}, '-=0.4')
	.to('.hero-image', {
		scale: 1,
		opacity: 1,
		duration: ANIMATION_CONFIG.duration.slow,
		ease: ANIMATION_CONFIG.ease.elastic
	}, '-=0.8')
	.to('.floating-element', {
		scale: 1,
		opacity: 1,
		duration: ANIMATION_CONFIG.duration.normal,
		ease: ANIMATION_CONFIG.ease.smooth,
		stagger: ANIMATION_CONFIG.stagger.fast
	}, '-=0.6');

	return tl;
}

// Navbar Animations
export function initNavbarAnimations() {
	if (typeof window === 'undefined') return;

	// Initial navbar slide down
	gsap.from('.navbar', {
		y: -100,
		opacity: 0,
		duration: ANIMATION_CONFIG.duration.normal,
		ease: ANIMATION_CONFIG.ease.smooth,
		delay: 0.2
	});

	// Scroll-based navbar behavior
	let lastScrollY = 0;
	let ticking = false;

	function updateNavbar() {
		const scrollY = window.scrollY;
		const navbar = document.querySelector('.navbar') as HTMLElement;
		
		if (!navbar) return;

		if (scrollY > lastScrollY && scrollY > 100) {
			// Scrolling down - hide navbar
			gsap.to(navbar, {
				y: -100,
				duration: ANIMATION_CONFIG.duration.fast,
				ease: ANIMATION_CONFIG.ease.smooth
			});
		} else {
			// Scrolling up - show navbar
			gsap.to(navbar, {
				y: 0,
				duration: ANIMATION_CONFIG.duration.fast,
				ease: ANIMATION_CONFIG.ease.smooth
			});
		}

		lastScrollY = scrollY;
		ticking = false;
	}

	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(updateNavbar);
			ticking = true;
		}
	}

	window.addEventListener('scroll', requestTick);
}

// Section Reveal Animations
export function initSectionAnimations() {
	if (typeof window === 'undefined') return;

	// About section animations
	gsap.utils.toArray('.about-element').forEach((element: any) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: element,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			},
			y: 60,
			opacity: 0,
			duration: ANIMATION_CONFIG.duration.normal,
			ease: ANIMATION_CONFIG.ease.smooth
		});
	});

	// Skills section animations
	gsap.utils.toArray('.skill-item').forEach((element: any, index: number) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: element,
				start: 'top 90%',
				toggleActions: 'play none none reverse'
			},
			y: 40,
			opacity: 0,
			duration: ANIMATION_CONFIG.duration.normal,
			ease: ANIMATION_CONFIG.ease.smooth,
			delay: index * ANIMATION_CONFIG.stagger.fast
		});
	});
}

// Project Cards Animations
export function initProjectAnimations() {
	if (typeof window === 'undefined') return;

	// Project cards reveal
	gsap.utils.toArray('.project-card').forEach((card: any, index: number) => {
		gsap.from(card, {
			scrollTrigger: {
				trigger: card,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			},
			y: 80,
			opacity: 0,
			scale: 0.9,
			duration: ANIMATION_CONFIG.duration.normal,
			ease: ANIMATION_CONFIG.ease.smooth,
			delay: index * ANIMATION_CONFIG.stagger.normal
		});

		// Hover animations
		card.addEventListener('mouseenter', () => {
			gsap.to(card, {
				scale: 1.05,
				y: -10,
				duration: ANIMATION_CONFIG.duration.fast,
				ease: ANIMATION_CONFIG.ease.smooth
			});
		});

		card.addEventListener('mouseleave', () => {
			gsap.to(card, {
				scale: 1,
				y: 0,
				duration: ANIMATION_CONFIG.duration.fast,
				ease: ANIMATION_CONFIG.ease.smooth
			});
		});
	});
}

// Contact Form Animations
export function initContactAnimations() {
	if (typeof window === 'undefined') return;

	// Contact elements reveal
	gsap.utils.toArray('.contact-element').forEach((element: any, index: number) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: element,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			},
			y: 60,
			opacity: 0,
			duration: ANIMATION_CONFIG.duration.normal,
			ease: ANIMATION_CONFIG.ease.smooth,
			delay: index * ANIMATION_CONFIG.stagger.fast
		});
	});

	// Contact items reveal
	gsap.utils.toArray('.contact-item').forEach((item: any, index: number) => {
		gsap.from(item, {
			scrollTrigger: {
				trigger: item,
				start: 'top 90%',
				toggleActions: 'play none none reverse'
			},
			y: 40,
			opacity: 0,
			duration: ANIMATION_CONFIG.duration.normal,
			ease: ANIMATION_CONFIG.ease.smooth,
			delay: index * ANIMATION_CONFIG.stagger.normal
		});
	});

	// Contact button animations
	gsap.utils.toArray('.contact-button').forEach((button: any) => {
		button.addEventListener('mouseenter', () => {
			gsap.to(button, {
				scale: 1.05,
				duration: ANIMATION_CONFIG.duration.fast,
				ease: ANIMATION_CONFIG.ease.smooth
			});
		});

		button.addEventListener('mouseleave', () => {
			gsap.to(button, {
				scale: 1,
				duration: ANIMATION_CONFIG.duration.fast,
				ease: ANIMATION_CONFIG.ease.smooth
			});
		});
	});
}

// Parallax Effects
export function initParallaxEffects() {
	if (typeof window === 'undefined') return;

	// Background parallax
	gsap.utils.toArray('.parallax-bg').forEach((bg: any) => {
		gsap.to(bg, {
			scrollTrigger: {
				trigger: bg,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			},
			y: '-30%',
			ease: 'none'
		});
	});

	// Floating elements parallax
	gsap.utils.toArray('.floating-element').forEach((element: any, index: number) => {
		gsap.to(element, {
			scrollTrigger: {
				trigger: element,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			},
			y: `${-20 - (index * 10)}%`,
			rotation: index % 2 === 0 ? 360 : -360,
			ease: 'none'
		});
	});
}

// Initialize all animations
export async function initAllAnimations() {
	if (typeof window === 'undefined') return;

	console.log('Initializing all GSAP animations...');

	try {
		// Wait a bit for DOM to be fully ready
		await new Promise(resolve => setTimeout(resolve, 100));

		// Initialize animations immediately since onMount ensures DOM is ready
		initHeroAnimations();
		initNavbarAnimations();
		initSectionAnimations();
		initProjectAnimations();
		initContactAnimations();
		initParallaxEffects();

		// Refresh ScrollTrigger after all animations are set
		ScrollTrigger.refresh();
		console.log('All GSAP animations initialized and ScrollTrigger refreshed');
	} catch (error) {
		console.error('Error initializing GSAP animations:', error);
	}
}

// Cleanup function for SvelteKit
export function cleanupAnimations() {
	if (typeof window !== 'undefined') {
		ScrollTrigger.killAll();
		gsap.killTweensOf('*');
	}
}