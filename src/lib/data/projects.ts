export interface Project {
	key: string;
	title: string;
	subtitle: string;
	description: string;
	features: string[];
	url: string;
	image: string;
}

export const projects: Project[] = [
	{
		key: 'stone-traders',
		title: 'Stone Traders Egypt',
		subtitle: 'Premium Stone Supply — B2B Lead Generation',
		description:
			'A 15-year-old stone supply company needed a website that would let architects, contractors, and interior designers browse their catalog and request quotes online. Delivered a bilingual (EN/AR) product showcase with an integrated quote request system — turning their catalog into a lead generation tool.',
		features: [
			'Full product catalog with search and filtering',
			'Quote request system for bulk inquiries',
			'Bilingual Arabic/English interface',
			'Google Business Profile integration',
			'Contact form with automated follow-up'
		],
		url: 'https://stonetraders-eg.com/',
		image: '/stone-traders.png'
	},
	{
		key: 'north-sea',
		title: 'North Sea for Marine Services',
		subtitle: 'Marine Services — Multi-Service Credibility',
		description:
			'A government-registered marine services company needed a professional web presence to attract international clients across their multiple divisions — commercial diving, petroleum services, and equipment supply. Delivered a comprehensive service showcase with clear division pages and a centralized contact system.',
		features: [
			'Multi-division service pages with detailed descriptions',
			'Professional company credentials and certifications',
			'Centralized contact and inquiry system',
			'Google Maps and location integration',
			'Mobile-optimized for on-site access'
		],
		url: 'https://northsea-eg.com/',
		image: '/north-sea.png'
	},
	{
		key: 'stone-crew',
		title: 'StoneCrew',
		subtitle: 'Stone Installation — Project Showcase & Lead Capture',
		description:
			'A fast-growing stone installation company needed a website that demonstrated their craftsmanship quality to win larger projects. Delivered a premium project gallery showcasing their work, service pages explaining their process, and a consultation request system to capture qualified leads.',
		features: [
			'Project portfolio gallery with before/after',
			'Service pages with detailed process explanations',
			'Consultation request form',
			'Satisfied client testimonials section',
			'Smooth mobile experience for on-the-go prospects'
		],
		url: 'https://stonecrew-eg.com/',
		image: '/stone-crew.png'
	},
	{
		key: 'dr-abeer',
		title: 'Dr. Abeer Abu Kamar',
		subtitle: 'Medical Practice — Online Appointment Booking',
		description:
			'A leading OB/GYN and IVF specialist with 15+ years of experience needed a website that could handle appointment bookings directly from patients. Delivered a bilingual medical platform with an integrated booking system, telemedicine information, and comprehensive service pages.',
		features: [
			'Online appointment booking system',
			'Bilingual Arabic/English patient interface',
			'Service and treatment information pages',
			'Telemedicine consultation details',
			'Patient education resources'
		],
		url: 'https://dr-abeer.vercel.app/',
		image: '/Dr.Abeer.png'
	},
	{
		key: 'dr-maghraby',
		title: 'Prof. Hassan Maghraby',
		subtitle: 'Academic Medicine — Professional Portfolio & Outreach',
		description:
			'A distinguished professor of obstetrics and gynecology at Alexandria University needed an academic portfolio that also served as a patient outreach tool. Delivered a professional website showcasing his research, academic appointments, and clinical services — bridging the gap between academia and patient care.',
		features: [
			'Academic profile with research publications',
			'Professional credentials and appointments',
			'Clinical service information',
			'International collaboration highlights',
			'Contact and consultation inquiry system'
		],
		url: 'https://dr-maghraby.vercel.app/',
		image: '/Dr.Hassan-Maghraby.png'
	},
	{
		key: 'cargo',
		title: 'CQS International',
		subtitle: 'Cargo Surveying — Global Professional Presence',
		description:
			'An international cargo surveying firm needed a credible web presence to attract clients across different countries. Delivered a professional service showcase highlighting their certifications, industry expertise, and quality standards — with a contact system that works across time zones.',
		features: [
			'Professional service pages with certifications',
			'Quality standards and methodology documentation',
			'International contact and inquiry system',
			'Company history and credentials',
			'Mobile-friendly for international accessibility'
		],
		url: 'https://cargoq-serv.com/',
		image: '/cargo.png'
	},
	{
		key: 'legien-message',
		title: 'مركز لجين سبا للمساج',
		subtitle: 'Local Spa — Bilingual Customer Acquisition',
		description:
			'A licensed massage and spa center in Jeddah, Saudi Arabia needed to attract local customers searching for wellness services online. Delivered a fully bilingual (AR/EN) website with service pages, location information, and an online booking system — making it easy for customers to find and book.',
		features: [
			'Bilingual Arabic/English interface with RTL support',
			'Service catalog with descriptions and pricing',
			'Online appointment booking system',
			'Google Maps and location integration',
			'Mobile-optimized for local on-the-go searches'
		],
		url: 'https://legien-message.com/',
		image: '/legien-message.png'
	},
	{
		key: 'clean-max',
		title: 'كلين ماكس',
		subtitle: 'Cleaning Services — Local Market Domination',
		description:
			'A leading cleaning company in Saudi Arabia needed a professional web presence to capture both residential and corporate clients searching online for cleaning services. Delivered a bilingual website showcasing their full range of services, company credentials, and a streamlined contact system.',
		features: [
			'Bilingual Arabic/English with full RTL support',
			'Comprehensive service catalog for homes and businesses',
			'Company credentials and licensing information',
			'Contact and quote request forms',
			'Google visibility optimization for local search'
		],
		url: 'https://cleanmax-ksa.com/',
		image: '/clean-max.png'
	},
	{
		key: 'marketing-house',
		title: 'The Marketing House',
		subtitle: 'Tech Solutions — Service Portfolio & Client Acquisition',
		description:
			'A technology solutions company needed a website that communicated their expertise and flexibility to potential clients. Delivered a modern service portfolio with case study format, client testimonials, and a clear contact path — making it easy for prospects to understand their capabilities and reach out.',
		features: [
			'Service portfolio with detailed capability pages',
			'Case study format for past work',
			'Client testimonial section',
			'Clear call-to-action for consultations',
			'Modern, trust-building design'
		],
		url: 'https://themarketinghouse.com/',
		image: '/TheMarketinghouse.png'
	}
];
