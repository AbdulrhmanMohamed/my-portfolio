<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { initAllAnimations, cleanupAnimations } from '$lib/animations';
	import { profile } from '$lib/data/profile';
	import { projects } from '$lib/data/projects';
	import { services } from '$lib/data/services';
	import { setupPackages, retainerOptions } from '$lib/data/packages';
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
</script>

<svelte:head>
	<title>Abdulrhman Mohamed — Local Business Growth Website System</title>
	<meta name="description" content="We help local service businesses get more phone calls from Google. Modern website + Google visibility + lead tracking. Free demo first, no commitment." />
	<meta name="author" content={profile.name} />
	<meta property="og:title" content="Abdulrhman Mohamed — Local Business Growth Website System" />
	<meta property="og:description" content="We help local service businesses get more phone calls from Google. Free demo first." />
	<meta property="og:url" content="https://abdulrhman-portfolio.vercel.app/" />
	
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://abdulrhman-portfolio.vercel.app/" />
</svelte:head>

<!-- Hero -->
<section id="home" class="relative min-h-screen overflow-hidden pt-16">
	<div class="mx-auto max-w-6xl px-6">
		<div class="flex min-h-[calc(100vh-4rem)] flex-col justify-start pt-24">
			<div class="w-full max-w-4xl">
				<div data-animate="hero-title">
					<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500 light:border-zinc-200">
						<span class="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
						Free demo first — no commitment
					</div>
					<h1 class="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-zinc-100 light:text-zinc-900">
						We help local service businesses
						<br />
						<span class="text-zinc-500 light:text-zinc-400">get more phone calls from Google</span>
					</h1>
				</div>

				<div data-animate="hero-text" class="mt-6 space-y-4">
					<p class="text-base leading-relaxed text-zinc-400 light:text-zinc-500">
						Modern website + Google visibility + lead tracking — one complete system. 
						I build a working demo for your business first, so you see exactly what you are getting before any commitment.
					</p>
				</div>

				<div data-animate="hero-cta" class="mt-8 flex flex-col items-start gap-4 sm:flex-row">
					<button
						onclick={() => scrollTo('pricing')}
						class="rounded-xl bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-200 light:bg-zinc-900 light:text-zinc-100 light:hover:bg-zinc-800"
					>
						See packages & pricing
					</button>
					<button
						onclick={() => scrollTo('contact')}
						class="rounded-xl border border-zinc-800 px-6 py-2.5 text-sm font-medium text-zinc-400 transition-all hover:border-zinc-700 hover:text-zinc-100 light:border-zinc-200 light:text-zinc-500 light:hover:border-zinc-300 light:hover:text-zinc-900"
					>
						Get a free demo
					</button>
				</div>

				<div data-animate="hero-text" class="mt-10 flex items-center gap-8 text-sm text-zinc-500 light:text-zinc-400">
					{#each profile.stats as stat}
						<div>
							<div class="text-lg font-semibold text-zinc-100 light:text-zinc-900">{stat.value}</div>
							<div class="text-xs">{stat.label}</div>
						</div>
					{/each}
				</div>
			</div>

		</div>
	</div>
</section>

<!-- Services / The Offer -->
<section id="services" class="border-t border-zinc-800 py-24 light:border-zinc-200">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500 light:border-zinc-200" data-reveal>
			Local Business Growth Website System
		</div>
		<h2 class="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl light:text-zinc-900" data-reveal>
			What you get
		</h2>
		<div class="mt-12 grid gap-6 sm:grid-cols-2" data-reveal>
			{#each services as service}
				<div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 light:border-zinc-200 light:bg-white light:hover:border-zinc-300">
					<h3 class="text-base font-semibold text-zinc-100 light:text-zinc-900">{service.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-zinc-400 light:text-zinc-500">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Pricing -->
<section id="pricing" class="border-t border-zinc-800 py-24 light:border-zinc-200">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500 light:border-zinc-200" data-reveal>
			Pricing
		</div>
		<h2 class="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl light:text-zinc-900" data-reveal>
			Simple pricing, no surprises
		</h2>
		<p class="mt-4 text-base text-zinc-500 light:text-zinc-400" data-reveal>
			Free demo first. Then a one-time setup and a monthly retainer to keep everything running.
		</p>

		<h3 class="mt-16 mb-8 text-lg font-semibold text-zinc-100 light:text-zinc-900" data-reveal>Website Setup</h3>
		<div class="grid gap-8 lg:grid-cols-3" data-reveal>
			{#each setupPackages as pkg}
				<div class="relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 transition-colors hover:border-zinc-700 light:border-zinc-200 light:bg-white light:hover:border-zinc-300">
					{#if pkg.badge}
						<div class="absolute -top-3 right-6 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-400 light:text-teal-600">
							{pkg.badge}
						</div>
					{/if}
					<div class="flex items-baseline justify-between">
						<h3 class="text-lg font-semibold text-zinc-100 light:text-zinc-900">{pkg.name}</h3>
						<span class="text-2xl font-bold text-zinc-100 light:text-zinc-900">{pkg.price}</span>
					</div>
					<p class="mt-2 text-sm text-zinc-500 light:text-zinc-400">{pkg.description}</p>
					<ul class="mt-6 space-y-3">
						{#each pkg.items as item}
							<li class="flex items-start gap-3 text-sm text-zinc-400 light:text-zinc-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<h3 class="mt-16 mb-8 text-lg font-semibold text-zinc-100 light:text-zinc-900" data-reveal>Monthly Retainer</h3>
		<div class="grid gap-8 lg:grid-cols-2" data-reveal>
			{#each retainerOptions as pkg}
				<div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 light:border-zinc-200 light:bg-white">
					<div class="flex items-baseline justify-between">
						<h3 class="text-lg font-semibold text-zinc-100 light:text-zinc-900">{pkg.name} Retainer</h3>
						<span class="text-2xl font-bold text-zinc-100 light:text-zinc-900">{pkg.price}</span>
					</div>
					<p class="mt-2 text-sm text-zinc-500 light:text-zinc-400">{pkg.description}</p>
					<ul class="mt-6 space-y-3">
						{#each pkg.items as item}
							<li class="flex items-start gap-3 text-sm text-zinc-400 light:text-zinc-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<p class="mt-8 text-center text-sm text-zinc-500 light:text-zinc-400" data-reveal>
			Every project starts with a <strong class="text-zinc-300 light:text-zinc-700">free demo</strong>. You see exactly what you are getting before paying anything.
		</p>
	</div>
</section>

<!-- Work -->
<section id="work" class="border-t border-zinc-800 py-24 light:border-zinc-200">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500 light:border-zinc-200" data-reveal>
			Case Studies
		</div>
		<h2 class="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl light:text-zinc-900" data-reveal>
			Businesses we have helped
		</h2>
		<p class="mt-4 text-base text-zinc-500 light:text-zinc-400" data-reveal>
			From HVAC-adjacent industries to medical practices — each one needed a website that actually brings in customers.
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
					Let's Talk
				</div>
				<h2 class="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl light:text-zinc-900">
					Ready to get more phone calls?
				</h2>
				<p class="mt-4 text-base leading-relaxed text-zinc-400 light:text-zinc-500">
					Tell me about your business and I will build a working demo for you — no commitment, no cost. 
					If you like it, we can talk about taking it live and getting you set up with Google visibility.
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
