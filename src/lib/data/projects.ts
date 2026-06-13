export interface Project {
	key: string;
	title: string;
	subtitle: string;
	description: string;
	technologies: string[];
	features: string[];
	achievements: string[];
	url: string;
	image: string;
}

export const projects: Project[] = [
	{
		key: 'stone-traders',
		title: 'Stone Traders Egypt',
		subtitle: 'Premium Engineered Stone Solutions',
		description:
			'Founded in 2007, Stone Traders is an Egyptian Limited Liability Company specialized in supplying & installing premier quality Stone products. Built with a modern tech stack to showcase an extensive catalog of engineered marble, quartz, glaskeramic, and porcelain slabs.',
		technologies: ['TypeScript', 'React.js', 'Node.js', 'MongoDB'],
		features: [
			'Premium stone product catalog',
			'Interactive product gallery',
			'Custom quote system',
			'Installation service booking',
			'Multi-language support (Arabic/English)',
			'Responsive design for all devices'
		],
		achievements: [
			'15+ years of industry experience represented online',
			'Premium quality stone product showcase',
			'Professional installation service integration'
		],
		url: 'https://stonetraders-eg.com/',
		image: '/stone-traders.png'
	},
	{
		key: 'north-sea',
		title: 'North Sea for Marine Services',
		subtitle: 'Professional Marine & Petroleum Services',
		description:
			'North Sea for Marine Services is officially registered under the Egyptian Authority for Operations Approval and the Ministry of Maritime Transport. The platform showcases their commercial diving, petroleum services, and marine equipment divisions.',
		technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
		features: [
			'Commercial diving services showcase',
			'Petroleum industry solutions',
			'Marine equipment supply & manufacturing',
			'Communication systems integration',
			'Video surveillance solutions',
			'Professional marine consulting'
		],
		achievements: [
			'Officially registered with Egyptian Maritime Authority',
			'Ministry of Maritime Transport approved',
			'Comprehensive marine solutions provider'
		],
		url: 'https://northsea-eg.com/',
		image: '/north-sea.png'
	},
	{
		key: 'stone-crew',
		title: 'StoneCrew',
		subtitle: 'Premium Stone Supply & Installation',
		description:
			'StoneCrew is a trusted partner in the supply and installation of premium-quality stones including quartz, granite, and marble. Built with Next.js, the platform reflects their commitment to excellence and unparalleled craftsmanship.',
		technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
		features: [
			'Premium stone supply (quartz, granite, marble)',
			'Professional installation services',
			'Custom stone fabrication',
			'Project consultation and design',
			'Quality assurance and warranties',
			'Comprehensive repair services'
		],
		achievements: [
			'10+ years of industry experience',
			'Full-scale installation capabilities',
			'Customer satisfaction guarantee'
		],
		url: 'https://stonecrew-eg.com/',
		image: '/stone-crew.png'
	},
	{
		key: 'dr-abeer',
		title: 'Dr. Abeer Abu Kamar',
		subtitle: 'Consultant in Obstetrics, Gynecology & IVF',
		description:
			'A specialized medical platform built with SvelteKit for a leading OB/GYN consultant with over 15 years of experience. The site features online appointment booking, telemedicine consultation, and comprehensive information about fertility treatments.',
		technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Node.js'],
		features: [
			'Specialized medical consultation services',
			'Online appointment booking system',
			'Telemedicine integration',
			'Fertility treatment information',
			'Patient case management',
			'Bilingual Arabic/English interface'
		],
		achievements: [
			'15+ years of medical expertise showcased',
			'Highest success rates in IVF treatments',
			'Serving patients across Egypt, Libya, and beyond'
		],
		url: 'https://dr-abeer.vercel.app/',
		image: '/Dr.Abeer.png'
	},
	{
		key: 'dr-maghraby',
		title: 'Prof. Hassan Maghraby',
		subtitle: 'Professor of Obstetrics and Gynecology',
		description:
			'An academic portfolio for a distinguished professor at Alexandria University and former chairman of the OB/GYN department. The platform highlights research publications, academic achievements, and international collaborations.',
		technologies: ['Vue.js', 'JavaScript', 'CSS3', 'PHP'],
		features: [
			'Academic portfolio and research publications',
			'Reproductive medicine expertise showcase',
			'Medical consultation services',
			'Research and development in embryology',
			'International medical collaboration',
			'Educational content and resources'
		],
		achievements: [
			'Professor at Alexandria University',
			'Ex-chairman of OB/GYN department',
			'Fellow at Pennsylvania University, USA',
			'President of Egyptian Foundation of Reproductive Medicine and Embryology'
		],
		url: 'https://dr-maghraby.vercel.app/',
		image: '/Dr.Hassan-Maghraby.png'
	},
	{
		key: 'cargo',
		title: 'CQS International',
		subtitle: 'Top Class Cargo Surveying Services',
		description:
			'Founded in 2011, CQS International provides top-class cargo surveying services with uncompromising standards. The platform communicates their commitment to quality, efficiency, accuracy, and dedication in every inspection.',
		technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
		features: [
			'Professional cargo surveying services',
			'Quality assurance and inspection',
			'Comprehensive reporting systems',
			'International shipping compliance',
			'Damage assessment and documentation',
			'Client consultation and support'
		],
		achievements: [
			'Founded in 2011 with proven track record',
			'Uncompromising quality standards',
			'Client satisfaction focused operations'
		],
		url: 'https://cargoq-serv.com/',
		image: '/cargo.png'
	},
	{
		key: 'legien-message',
		title: 'مركز لجين سبا للمساج',
		subtitle: 'Licensed Massage & Spa Center in KSA',
		description:
			'A fully licensed massage and spa center in Jeddah, Saudi Arabia. The platform showcases their sports, relaxation, and therapeutic massage services with a seamless booking system and bilingual Arabic/English interface.',
		technologies: ['HTML5', 'CSS3', 'JavaScript', 'Arabic RTL'],
		features: [
			'Specialized sports massage services',
			'Relaxation and therapeutic massage',
			'Online appointment booking',
			'Comprehensive spa services',
			'Trained professional team',
			'Comfortable and safe environment'
		],
		achievements: [
			'Officially licensed and accredited',
			'License no: 7039220152',
			'Strategic location in Jeddah'
		],
		url: 'https://legien-message.com/',
		image: '/legien-message.png'
	},
	{
		key: 'clean-max',
		title: 'كلين ماكس',
		subtitle: 'Leading Comprehensive Cleaning Services',
		description:
			'Clean Max is a leading cleaning services company in Saudi Arabia, serving homes, businesses, institutions, and special events. The bilingual platform reflects their commitment to quality and professionalism.',
		technologies: ['HTML5', 'CSS3', 'JavaScript', 'Arabic RTL'],
		features: [
			'Comprehensive home cleaning services',
			'Corporate and institutional cleaning',
			'Special event cleaning services',
			'Trained and specialized team',
			'Latest equipment and techniques',
			'24/7 customer service'
		],
		achievements: [
			'Leading company in cleaning services',
			'Quality and professionalism as core principles',
			'Excellent reputation in the Saudi market'
		],
		url: 'https://cleanmax-ksa.com/',
		image: '/clean-max.png'
	},
	{
		key: 'marketing-house',
		title: 'The Marketing House',
		subtitle: 'Excellence in Technology Solutions',
		description:
			'A technology solutions company that combines technical excellence with flexible management. The platform showcases their ability to adapt to client vision changes while maintaining budget and timeline commitments.',
		technologies: ['React.js', 'Node.js', 'TypeScript', 'MongoDB'],
		features: [
			'Custom technology solutions development',
			'Flexible project management approach',
			'Budget-conscious development practices',
			'Punctual delivery and time management',
			'Client vision adaptation capabilities',
			'Quality assurance and testing'
		],
		achievements: [
			'Proven track record in technology solutions',
			'Flexible management approach',
			'Strong client reliability and trust'
		],
		url: 'https://themarketinghouse.com/',
		image: '/TheMarketinghouse.png'
	}
];
