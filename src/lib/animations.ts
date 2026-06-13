import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export function initHeroAnimations() {
	if (typeof window === 'undefined') return;

	const tl = gsap.timeline({ delay: 0.3 });

	gsap.set('[data-animate="hero-title"]', { y: 40, opacity: 0 });
	gsap.set('[data-animate="hero-text"]', { y: 20, opacity: 0 });
	gsap.set('[data-animate="hero-cta"]', { y: 20, opacity: 0 });
	gsap.set('[data-animate="hero-image"]', { scale: 0.9, opacity: 0 });

	tl.to('[data-animate="hero-title"]', {
		y: 0,
		opacity: 1,
		duration: 1,
		ease: 'power3.out'
	})
		.to('[data-animate="hero-text"]', { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5')
		.to('[data-animate="hero-cta"]', { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
		.to('[data-animate="hero-image"]', { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.8');

	return tl;
}

export function initScrollAnimations() {
	if (typeof window === 'undefined') return;

	gsap.utils.toArray('[data-reveal]').forEach((el: any) => {
		gsap.from(el, {
			scrollTrigger: {
				trigger: el,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			ease: 'power2.out'
		});
	});
}

export async function initAllAnimations() {
	if (typeof window === 'undefined') return;
	await new Promise((r) => setTimeout(r, 100));
	initHeroAnimations();
	initScrollAnimations();
	ScrollTrigger.refresh();
}

export function cleanupAnimations() {
	if (typeof window !== 'undefined') {
		ScrollTrigger.killAll();
		gsap.killTweensOf('*');
	}
}
