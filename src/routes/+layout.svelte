<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let isDrawerOpen = $state(false);

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	function closeDrawer() {
		isDrawerOpen = false;
	}

	function handleNavClick() {
		closeDrawer();
	}
</script>

<svelte:head>
	<!-- Favicon -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen bg-base-100 text-base-content font-montserrat">
	<!-- Navigation -->
	<nav class="navbar bg-transparent backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-none shadow-none">
		<div class="container mx-auto px-4 flex justify-center items-center">
			<!-- Centered Navigation -->
			<div class="flex items-center gap-4">
				<!-- Desktop Navigation -->
				<div class="hidden lg:flex">
					<ul class="menu menu-horizontal gap-2">
						<li><a href="#home" class="text-white hover:text-blue-300 hover:bg-transparent transition-colors font-medium">Home</a></li>
						<li><a href="#about" class="text-white hover:text-blue-300 hover:bg-transparent transition-colors font-medium">About</a></li>
						<li><a href="#skills" class="text-white hover:text-blue-300 hover:bg-transparent transition-colors font-medium">Skills</a></li>
						<li><a href="#projects" class="text-white hover:text-blue-300 hover:bg-transparent transition-colors font-medium">Projects</a></li>
						<li><a href="#contact" class="text-white hover:text-blue-300 hover:bg-transparent transition-colors font-medium">Contact</a></li>
					</ul>
				</div>
				
				<!-- Mobile Menu Button -->
				<div class="lg:hidden">
					<button 
						onclick={toggleDrawer}
						class="btn btn-ghost btn-square text-white hover:text-blue-300 transition-colors"
						aria-label="Toggle mobile menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 transition-transform duration-300 {isDrawerOpen ? 'rotate-90' : ''}"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d={isDrawerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</nav>

	<!-- Mobile Drawer Overlay -->
	{#if isDrawerOpen}
		<div 
			class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
			onclick={closeDrawer}
			role="button"
			tabindex="0"
			aria-label="Close mobile menu"
		></div>
	{/if}

	<!-- Mobile Drawer -->
	<div 
		class="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out {isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}"
	>
		<!-- Drawer Header -->
		<div class="flex items-center justify-between p-6 border-b border-white/10">
			<h2 class="text-xl font-bold text-white">Navigation</h2>
			<button 
				onclick={closeDrawer}
				class="btn btn-ghost btn-sm text-white hover:text-blue-300 hover:bg-white/10"
				aria-label="Close menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>

		<!-- Drawer Navigation Links -->
		<nav class="p-6">
			<ul class="space-y-4">
				<li>
					<a 
						href="#home" 
						onclick={handleNavClick}
						class="flex items-center space-x-3 text-white hover:text-blue-300 hover:bg-white/10 p-3 rounded-lg transition-all duration-200 group"
					>
						<svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
						</svg>
						<span class="font-medium">Home</span>
					</a>
				</li>
				<li>
					<a 
						href="#about" 
						onclick={handleNavClick}
						class="flex items-center space-x-3 text-white hover:text-blue-300 hover:bg-white/10 p-3 rounded-lg transition-all duration-200 group"
					>
						<svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
						</svg>
						<span class="font-medium">About</span>
					</a>
				</li>
				<li>
					<a 
						href="#skills" 
						onclick={handleNavClick}
						class="flex items-center space-x-3 text-white hover:text-blue-300 hover:bg-white/10 p-3 rounded-lg transition-all duration-200 group"
					>
						<svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
						</svg>
						<span class="font-medium">Skills</span>
					</a>
				</li>
				<li>
					<a 
						href="#projects" 
						onclick={handleNavClick}
						class="flex items-center space-x-3 text-white hover:text-blue-300 hover:bg-white/10 p-3 rounded-lg transition-all duration-200 group"
					>
						<svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
							<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
						</svg>
						<span class="font-medium">Projects</span>
					</a>
				</li>
				<li>
					<a 
						href="#contact" 
						onclick={handleNavClick}
						class="flex items-center space-x-3 text-white hover:text-blue-300 hover:bg-white/10 p-3 rounded-lg transition-all duration-200 group"
					>
						<svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
						</svg>
						<span class="font-medium">Contact</span>
					</a>
				</li>
			</ul>
		</nav>

		<!-- Drawer Footer -->
		<div class="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
			<div class="text-center">
				<p class="text-white/70 text-sm">Abdulrhman Mohamed</p>
				<p class="text-white/50 text-xs mt-1">Full-Stack Developer</p>
			</div>
		</div>
	</div>

	<!-- Main content -->
	<main class="flex-1">
		{@render children?.()}
	</main>


	<!-- Floating WhatsApp Button -->
	<a 
		href="https://wa.me/201201392000?text=Hi! I'm interested in discussing a project with you. Can you tell me more about your services and pricing?"
		target="_blank"
		rel="noopener noreferrer"
		class="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none group"
		style="background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);"
		aria-label="Contact via WhatsApp"
		title="Chat with me on WhatsApp"
	>
		<svg 
			xmlns="http://www.w3.org/2000/svg" 
			class="h-9 w-9 text-white group-hover:scale-110 transition-transform duration-300" 
			fill="currentColor" 
			viewBox="0 0 24 24"
		>
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
		</svg>
		<!-- Notification dot for attention -->
		<div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
			<div class="w-2 h-2 bg-white rounded-full animate-ping"></div>
		</div>
	</a>
</div>
