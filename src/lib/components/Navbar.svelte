<script lang="ts">
	import { theme } from '$lib/stores/theme';

	let isDrawerOpen = $state(false);
	let isScrolled = $state(false);
	let lastScroll = 0;
	let isVisible = $state(true);

	function toggleDrawer() { isDrawerOpen = !isDrawerOpen; }
	function closeDrawer() { isDrawerOpen = false; }

	function onScroll() {
		const y = window.scrollY;
		isScrolled = y > 20;
		isVisible = y < 100 || y < lastScroll;
		lastScroll = y;
	}

	$effect(() => {
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function toggleTheme() {
		theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
	}

	const links = [
		{ href: '#home', label: 'Home' },
		{ href: '#services', label: 'Services' },
		{ href: '#pricing', label: 'Pricing' },
		{ href: '#work', label: 'Work' },
		{ href: '#contact', label: 'Contact' }
	];

	let navClass = $derived(
		`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 light:bg-white/80 backdrop-blur-xl border-b border-zinc-800 light:border-zinc-200' : ''} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`
	);
</script>

<nav class={navClass}>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
		<a href="#home" class="text-sm font-semibold tracking-tight text-zinc-100 light:text-zinc-900">AM</a>

		<div class="hidden items-center gap-1 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="rounded-lg px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 light:text-zinc-500 light:hover:bg-zinc-100 light:hover:text-zinc-900"
				>
					{link.label}
				</a>
			{/each}
			<button
				onclick={toggleTheme}
				class="ml-2 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 light:text-zinc-500 light:hover:bg-zinc-100 light:hover:text-zinc-900"
				aria-label="Toggle theme"
			>
				{#if $theme === 'dark'}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>
		</div>

		<div class="flex items-center gap-2 md:hidden">
			<button
				onclick={toggleTheme}
				class="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 light:text-zinc-500 light:hover:bg-zinc-100 light:hover:text-zinc-900"
				aria-label="Toggle theme"
			>
				{#if $theme === 'dark'}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>
			<button
				onclick={toggleDrawer}
				class="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 light:text-zinc-500 light:hover:bg-zinc-100 light:hover:text-zinc-900"
				aria-label="Toggle menu"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isDrawerOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
				</svg>
			</button>
		</div>
	</div>
</nav>

{#if isDrawerOpen}
	<div
		class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
		onclick={closeDrawer}
		onkeydown={(e) => e.key === 'Enter' && closeDrawer()}
		role="button"
		tabindex="0"
		aria-label="Close menu"
	></div>
{/if}

<div
	class="fixed top-0 right-0 z-50 h-full w-72 transition-transform duration-300 md:hidden bg-zinc-900 shadow-2xl light:bg-white"
	class:translate-x-0={isDrawerOpen}
	class:translate-x-full={!isDrawerOpen}
>
	<div class="flex items-center justify-between border-b border-zinc-800 px-6 py-5 light:border-zinc-200">
		<span class="text-sm font-semibold text-zinc-100 light:text-zinc-900">Navigation</span>
		<button onclick={closeDrawer} class="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 light:text-zinc-500 light:hover:bg-zinc-100 light:hover:text-zinc-900" aria-label="Close">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>

	<nav class="px-4 py-4">
		{#each links as link}
			<a
				href={link.href}
				onclick={closeDrawer}
				class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 light:text-zinc-500 light:hover:bg-zinc-100 light:hover:text-zinc-900"
			>
				{link.label}
			</a>
		{/each}
	</nav>
</div>
