<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { initAllAnimations, cleanupAnimations } from '$lib/animations';
	import { profile } from '$lib/data/profile';
	import { projects } from '$lib/data/projects';
	import { skills } from '$lib/data/skills';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectModal from '$lib/components/ProjectModal.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import type { Project } from '$lib/data/projects';

	onMount(async () => {
		try {
			await initAllAnimations();
		} catch (e) {
			console.error('Animation init failed:', e);
		}
	});

	onDestroy(() => {
		cleanupAnimations();
	});

	let selectedProject = $state<Project | null>(null);
	let isModalOpen = $derived(selectedProject !== null);

	function openModal(project: Project) {
		selectedProject = project;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		selectedProject = null;
		document.body.style.overflow = 'auto';
	}

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}

	const scrollToProjects = () => scrollTo('projects');
	const scrollToContact = () => scrollTo('contact');
</script>

<svelte:head>
	<title>Abdulrhman Mohamed — Full-Stack Developer</title>
	<meta name="description" content={profile.bio[0]} />
	<meta name="author" content={profile.name} />
	<meta property="og:title" content="Abdulrhman Mohamed — Full-Stack Developer" />
	<meta property="og:description" content={profile.bio[0]} />
	<meta property="og:url" content="https://abdulrhman-portfolio.vercel.app/" />
	<meta property="og:image" content="https://abdulrhman-portfolio.vercel.app/profile.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://abdulrhman-portfolio.vercel.app/" />
</svelte:head>

<!-- Hero -->
<section id="home" class="relative min-h-screen overflow-hidden pt-16">
	<div class="mx-auto max-w-6xl px-6">
		<div class="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between">
			<div class="max-w-xl text-center lg:text-left">
				<div data-animate="hero-title">
					<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500">
						<span class="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
						Available for projects
					</div>
					<h1 class="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-zinc-100 light:text-zinc-900">
						Hi, I'm {profile.name.split(' ')[0]}
						<br />
						<span class="text-zinc-500 light:text-zinc-400">{profile.title}</span>
					</h1>
				</div>

				<div data-animate="hero-text" class="mt-6 space-y-4">
					<p class="text-base leading-relaxed text-zinc-400 light:text-zinc-500">
						{profile.bio[0]}
					</p>
				</div>

				<div data-animate="hero-cta" class="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
					<button
						onclick={scrollToProjects}
						class="rounded-xl bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-200 light:bg-zinc-900 light:text-zinc-100 light:hover:bg-zinc-800"
					>
						View my work
					</button>
					<button
						onclick={scrollToContact}
						class="rounded-xl border border-zinc-800 px-6 py-2.5 text-sm font-medium text-zinc-400 transition-all hover:border-zinc-700 hover:text-zinc-100 light:border-zinc-200 light:text-zinc-500 light:hover:border-zinc-300 light:hover:text-zinc-900"
					>
						Get in touch
					</button>
				</div>

				<div data-animate="hero-text" class="mt-10 flex items-center gap-8 text-sm text-zinc-500 light:text-zinc-400">
					{#each profile.stats as stat}
						<div class="text-center lg:text-left">
							<div class="text-lg font-semibold text-zinc-100 light:text-zinc-900">{stat.value}</div>
							<div class="text-xs">{stat.label}</div>
						</div>
					{/each}
				</div>
			</div>

			<div data-animate="hero-image" class="flex-shrink-0">
				<div class="relative">
					<div class="h-56 w-56 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 sm:h-64 sm:w-64 light:border-zinc-200 light:bg-zinc-100">
						<img
							src="/profile.png"
							alt={profile.name}
							class="h-full w-full object-cover"
						/>
					</div>
					<div class="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/10 text-xs text-teal-400">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- About -->
<section id="about" class="border-t border-zinc-800 py-24 light:border-zinc-200">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mx-auto max-w-3xl" data-reveal>
			<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500 light:border-zinc-200">
				About
			</div>
			<h2 class="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl light:text-zinc-900">
				Building digital products that matter
			</h2>
			<div class="mt-6 space-y-4 text-base leading-relaxed text-zinc-400 light:text-zinc-500">
				{#each profile.bio as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Skills -->
<section id="skills" class="border-t border-zinc-800 py-24 light:border-zinc-200">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500 light:border-zinc-200" data-reveal>
			Skills
		</div>
		<h2 class="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl light:text-zinc-900" data-reveal>
			Technologies I work with
		</h2>
		<div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" data-reveal>
			{#each skills as skill}
				<div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700 light:border-zinc-200 light:bg-white light:hover:border-zinc-300">
					<div class="mb-3 text-zinc-100 light:text-zinc-900">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={skill.icon === 'code' ? 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' : skill.icon === 'server' ? 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' : skill.icon === 'database' ? 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' : 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'} />
						</svg>
					</div>
					<h3 class="text-sm font-semibold text-zinc-100 light:text-zinc-900">{skill.title}</h3>
					<p class="mt-1 text-xs text-zinc-500 light:text-zinc-400">{skill.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Projects -->
<section id="projects" class="border-t border-zinc-800 py-24 light:border-zinc-200">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500 light:border-zinc-200" data-reveal>
			Projects
		</div>
		<h2 class="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl light:text-zinc-900" data-reveal>
			Selected work
		</h2>
		<p class="mt-4 text-base text-zinc-500 light:text-zinc-400" data-reveal>
			A selection of projects I've built for clients across different industries.
		</p>
		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
			{#each projects as project}
				<ProjectCard {project} onclick={() => openModal(project)} />
			{/each}
		</div>
	</div>
</section>

<!-- Contact -->
<section id="contact" class="border-t border-zinc-800 py-24 light:border-zinc-200">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid gap-16 lg:grid-cols-2">
			<div data-reveal>
				<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500 light:border-zinc-200">
					Contact
				</div>
				<h2 class="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl light:text-zinc-900">
					Let's work together
				</h2>
				<p class="mt-4 text-base leading-relaxed text-zinc-400 light:text-zinc-500">
					I'm always open to new opportunities and interesting projects. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
				</p>
				<div class="mt-8 space-y-4">
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<p class="text-sm text-zinc-100 light:text-zinc-900">{profile.email}</p>
							<p class="text-xs text-zinc-500">Responds within 24 hours</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div>
							<p class="text-sm text-zinc-100 light:text-zinc-900">{profile.location}</p>
							<p class="text-xs text-zinc-500">Available for remote work</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z" />
							</svg>
						</div>
						<a
							href={profile.social.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm text-zinc-100 transition-colors hover:text-zinc-300 light:text-zinc-900 light:hover:text-zinc-600"
						>
							Connect on LinkedIn
						</a>
					</div>
				</div>
			</div>
			<div data-reveal>
				<ContactForm />
			</div>
		</div>
	</div>
</section>
<ProjectModal project={selectedProject} onclose={closeModal} />
