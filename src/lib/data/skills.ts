export interface Skill {
	title: string;
	description: string;
	icon: string;
}

export const skills: Skill[] = [
	{
		title: 'Frontend',
		description: 'React, Next.js, SvelteKit, TypeScript',
		icon: 'code'
	},
	{
		title: 'Backend',
		description: 'Node.js, Express, NestJS, APIs',
		icon: 'server'
	},
	{
		title: 'Database',
		description: 'MongoDB, PostgreSQL, Prisma',
		icon: 'database'
	},
	{
		title: 'DevOps',
		description: 'Docker, CI/CD, Vercel, Netlify',
		icon: 'cloud'
	},
	{
		title: 'Full-Stack',
		description: 'End-to-end architecture & delivery',
		icon: 'layers'
	},
	{
		title: 'UI/UX',
		description: 'Tailwind CSS, Design Systems, Figma',
		icon: 'palette'
	}
];
