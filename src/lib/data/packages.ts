export interface Package {
	name: string;
	price: string;
	description: string;
	items: string[];
	badge?: string;
}

export const setupPackages: Package[] = [
	{
		name: 'Starter',
		price: '$299–$500',
		description: 'A simple, professional web presence to get started fast.',
		items: [
			'1–3 page website',
			'Mobile optimized',
			'Call button',
			'Contact form',
			'Basic Google setup'
		],
		badge: 'Quick Start'
	},
	{
		name: 'Growth',
		price: '$500–$1,200',
		description: 'Our most popular package — a complete customer-getting system.',
		items: [
			'5–7 page website',
			'Conversion-focused design',
			'Google Business Profile setup',
			'Basic SEO structure',
			'Analytics + Search Console',
			'Lead tracking (calls/forms)',
			'Free demo before payment'
		],
		badge: 'Main Offer'
	},
	{
		name: 'Premium',
		price: '$1,200–$2,500+',
		description: 'Full growth system with advanced SEO and conversion optimization.',
		items: [
			'Full website with custom pages',
			'Local SEO setup (service pages)',
			'Competitor analysis',
			'Conversion optimization',
			'Reporting dashboard',
			'Branding improvements'
		],
		badge: 'Advanced'
	}
];

export const retainerOptions: Package[] = [
	{
		name: 'Essential',
		price: '$100–$300/mo',
		description: 'Keep your website running smoothly month after month.',
		items: [
			'Website hosting & security',
			'Content updates & changes',
			'Google Business updates',
			'Basic SEO monitoring',
			'Monthly performance report'
		]
	},
	{
		name: 'Growth',
		price: '$300–$800/mo',
		description: 'Active growth and optimization for businesses that want more.',
		items: [
			'Local SEO improvements',
			'Content updates & new pages',
			'Ranking tracking',
			'Lead conversion optimization',
			'Detailed monthly reporting'
		]
	}
];
