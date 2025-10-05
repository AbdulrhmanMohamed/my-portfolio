<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Smooth scrolling function
	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Abdulrhman Mohamed - Expert WordPress Developer | Custom Themes & Plugins</title>
	<meta name="description" content="Professional WordPress Developer with 5+ years experience. Specializing in custom themes, plugins, WooCommerce, and premium website solutions. Available for hire." />
	<meta name="keywords" content="WordPress Developer, Custom WordPress Themes, WordPress Plugins, WooCommerce Development, WordPress Customization, WordPress Expert, WordPress Freelancer, WordPress Services, WordPress Developer Egypt, Professional WordPress Developer" />
	<meta name="author" content="Abdulrhman Mohamed" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://abdulrhman-portfolio.vercel.app/" />
	<meta property="og:title" content="Abdulrhman Mohamed - Expert WordPress Developer" />
	<meta property="og:description" content="Professional WordPress Developer with 5+ years experience. Custom themes, plugins, WooCommerce development. Available for hire." />
	<meta property="og:image" content="https://abdulrhman-portfolio.vercel.app/profile.png" />
	<meta property="og:site_name" content="Abdulrhman Mohamed Portfolio" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://abdulrhman-portfolio.vercel.app/" />
	<meta property="twitter:title" content="Abdulrhman Mohamed - Expert WordPress Developer" />
	<meta property="twitter:description" content="Professional WordPress Developer with 5+ years experience. Custom themes, plugins, WooCommerce development. Available for hire." />
	<meta property="twitter:image" content="https://abdulrhman-portfolio.vercel.app/profile.png" />
	
	<!-- Additional SEO -->
	<meta name="geo.region" content="EG" />
	<meta name="geo.placename" content="Egypt" />
	<meta name="geo.position" content="26.8206;30.8025" />
	<meta name="ICBM" content="26.8206, 30.8025" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://abdulrhman-portfolio.vercel.app/" />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Abdulrhman Mohamed",
		"jobTitle": "WordPress Developer",
		"description": "Professional WordPress Developer with 5+ years experience specializing in custom themes, plugins, and WooCommerce development.",
		"url": "https://abdulrhman-portfolio.vercel.app/",
		"image": "https://abdulrhman-portfolio.vercel.app/profile.png",
		"sameAs": [
			"https://www.linkedin.com/in/abdelrhman-farg/",
			"https://wa.me/201201392000"
		],
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "EG",
			"addressRegion": "Egypt"
		},
		"email": "afarg843@gmail.com",
		"telephone": "+20 120 139 2000",
		"knowsAbout": [
			"WordPress Development",
			"Custom WordPress Themes",
			"WordPress Plugins",
			"WooCommerce",
			"PHP",
			"JavaScript",
			"CSS",
			"HTML",
			"Full-Stack Development"
		],
		"hasOccupation": {
			"@type": "Occupation",
			"name": "WordPress Developer",
			"description": "Professional WordPress development services including custom themes, plugins, and e-commerce solutions."
		}
	}
	</script>
</svelte:head>

<!-- Hero Section -->
<section id="home" class="relative min-h-screen overflow-hidden">
	<!-- Premium Animated Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
	
	<!-- Floating Elements -->
	<div class="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
	<div class="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
	<div class="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
	
	<div class="relative z-10 min-h-screen flex items-center justify-center">
		<div class="container mx-auto px-4 text-center">
			<div class="max-w-5xl mx-auto">
			<!-- Premium Profile Image with Glow Effect -->
			<div class="relative mb-12">
				<div class="w-40 h-40 mx-auto relative">
					<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-60 animate-pulse"></div>
					<div class="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
						<div class="w-full h-full rounded-full overflow-hidden">
							<img 
								src="/profile.png" 
								alt="Abdulrhman Mohamed - WordPress Developer" 
								class="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Premium Typography -->
			<h1 class="text-6xl md:text-7xl font-black mb-8 leading-tight">
				<span class="text-white">Hi, I'm</span>
				<br>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse">
					Abdulrhman Mohamed
				</span>
			</h1>
			
			<!-- Professional Subtitle -->
			<div class="mb-12">
				<h2 class="text-2xl md:text-3xl font-bold text-blue-300 mb-4">Expert WordPress Developer & Full-Stack Engineer</h2>
				<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
					Professional WordPress Developer with 5+ years experience. Specializing in custom WordPress themes, 
					plugins, WooCommerce development, and premium website solutions. Available for hire for WordPress 
					projects, custom development, and technical consulting.
				</p>
			</div>
			
			<!-- Premium CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
				<button 
					class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
					onclick={() => scrollToSection('projects')}
				>
					<span class="relative z-10 flex items-center gap-3">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
						</svg>
						View My Work
					</span>
					<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
				</button>
				
				<button 
					class="group px-8 py-4 border-2 border-blue-400 text-blue-300 font-bold text-lg rounded-2xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
					onclick={() => scrollToSection('contact')}
				>
					<span class="flex items-center gap-3">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
						</svg>
						Get In Touch
					</span>
				</button>
			</div>
			
			<!-- Scroll Indicator -->
			<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZTI4ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjAgMjBjMC01LjUtNC41LTEwLTEwLTEwcy0xMCA0LjUtMTAgMTAgNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMHptMTAgMGMwLTUuNS00LjUtMTAtMTAtMTBzLTEwIDQuNS0xMCAxMCA0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEweiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div class="space-y-8">
				<div>
					<span class="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-4">
						About Me
					</span>
					<h2 class="text-5xl font-black text-white mb-6 leading-tight">
						Crafting Digital
						<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
							Excellence
						</span>
					</h2>
				</div>
				
				<div class="space-y-6">
					<p class="text-xl text-slate-300 leading-relaxed">
						I'm a passionate WordPress developer with 5+ years of expertise in creating custom WordPress themes, 
						plugins, and premium website solutions. I specialize in building WordPress sites that are fast, 
						secure, SEO-optimized, and perfectly tailored to your business needs.
					</p>
					<p class="text-lg text-slate-300 leading-relaxed">
						With extensive experience in WordPress development, WooCommerce, and full-stack technologies, 
						I understand how to create websites that not only look great but also perform excellently. 
						From simple business sites to complex e-commerce platforms, I deliver WordPress solutions 
						that help your business grow online and rank higher in search engines.
					</p>
					
					<!-- Beyond WordPress Section -->
					<div class="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
						<div class="flex items-start gap-4">
							<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-bold text-white mb-3">Beyond WordPress</h3>
								<p class="text-slate-300 text-sm leading-relaxed">
									While I specialize in WordPress development, I also bring 5+ years of full-stack 
									development experience building web applications, mobile apps, and cloud solutions 
									for startups and companies. This broader technical knowledge ensures every 
									WordPress project I deliver is robust, scalable, and built with enterprise-level 
									best practices.
								</p>
								<div class="flex flex-wrap gap-2 mt-3">
									<span class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Full-Stack</span>
									<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Mobile Apps</span>
									<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Cloud Solutions</span>
									<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Enterprise Experience</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="flex flex-col sm:flex-row gap-4">
					<button 
						class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
						onclick={() => scrollToSection('skills')}
					>
						<span class="flex items-center gap-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
							</svg>
							My Skills
						</span>
					</button>
					<button 
						class="group px-8 py-4 border-2 border-slate-600 text-slate-300 font-bold text-lg rounded-2xl hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
						onclick={() => scrollToSection('projects')}
					>
						<span class="flex items-center gap-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
							</svg>
							View Projects
						</span>
					</button>
				</div>
			</div>
			
			<div class="relative">
				<!-- Premium Card with Glass Effect -->
				<div class="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-700/50">
					<div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
					<div class="relative z-10 text-center">
						<div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<h3 class="text-2xl font-bold text-white mb-2">WordPress Expertise</h3>
						<p class="text-slate-300 mb-6">Custom Development & Optimization</p>
						
						<!-- Stats -->
						<div class="grid grid-cols-2 gap-4">
							<div class="text-center">
								<div class="text-2xl font-bold text-blue-400">6+</div>
								<div class="text-sm text-slate-400">Live Projects</div>
							</div>
							<div class="text-center">
								<div class="text-2xl font-bold text-purple-400">100%</div>
								<div class="text-sm text-slate-400">Client Satisfaction</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Floating Elements -->
				<div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
				<div class="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
			</div>
		</div>
	</div>
</section>

<!-- Skills Section -->
<section id="skills" class="py-24 bg-slate-900 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-20">
			<span class="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6">
				My Expertise
			</span>
			<h2 class="text-5xl font-black text-white mb-6 leading-tight">
				WordPress
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
					Mastery
				</span>
			</h2>
			<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
				Comprehensive expertise in WordPress development and customization
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Custom Themes -->
			<div class="group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
					<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">Custom Themes</h3>
					<p class="text-slate-300 text-sm leading-relaxed">From scratch theme development, responsive design, and pixel-perfect implementation</p>
				</div>
			</div>

			<!-- Plugin Development -->
			<div class="group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">Plugin Development</h3>
					<p class="text-slate-300 text-sm leading-relaxed">Custom functionality, hooks, and seamless integrations</p>
				</div>
			</div>

			<!-- WooCommerce -->
			<div class="group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
					<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">WooCommerce</h3>
					<p class="text-slate-300 text-sm leading-relaxed">Online stores, payment gateways, and product catalogs</p>
				</div>
			</div>

			<!-- Performance & SEO -->
			<div class="group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
					<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">Performance & SEO</h3>
					<p class="text-slate-300 text-sm leading-relaxed">Speed optimization and search engine visibility</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-24 bg-slate-800 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-20">
			<span class="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6">
				My Work
			</span>
			<h2 class="text-5xl font-black text-white mb-6 leading-tight">
				WordPress
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
					Projects
				</span>
			</h2>
			<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
				Professional WordPress websites I've built for various clients
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- WordPress Projects Overview -->
			<div class="group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
					<figure class="mb-6">
						<div class="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
							<div class="text-center">
								<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
									</svg>
								</div>
								<h3 class="text-xl font-bold text-blue-400">Client Websites</h3>
							</div>
						</div>
					</figure>
					<div>
						<h2 class="text-2xl font-bold text-white mb-4">Professional WordPress Sites</h2>
						<p class="text-slate-300 mb-6 leading-relaxed">
							Custom WordPress solutions for various industries including medical practices, 
							business services, and e-commerce. Each site features custom themes, 
							optimized performance, and responsive design.
						</p>
						<div class="flex flex-wrap gap-2 mb-6">
							<span class="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">WordPress</span>
							<span class="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">Custom Themes</span>
							<span class="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">SEO Optimized</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm text-slate-400">6+ Live Projects</span>
							<button class="text-blue-400 hover:text-blue-300 transition-colors">View All →</button>
						</div>
					</div>
				</div>
			</div>

			<!-- WordPress Services -->
			<div class="group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
					<figure class="mb-6">
						<div class="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
							<div class="text-center">
								<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								<h3 class="text-xl font-bold text-purple-400">WordPress Services</h3>
							</div>
						</div>
					</figure>
					<div>
						<h2 class="text-2xl font-bold text-white mb-4">Complete WordPress Solutions</h2>
						<p class="text-slate-300 mb-6 leading-relaxed">
							From custom theme development to plugin creation and site optimization. 
							I provide end-to-end WordPress services that help your business succeed online.
						</p>
						<div class="flex flex-wrap gap-2 mb-6">
							<span class="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">Custom Themes</span>
							<span class="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">Plugin Development</span>
							<span class="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">WooCommerce</span>
							<span class="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">Maintenance</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm text-slate-400">Available for Projects</span>
							<button class="text-purple-400 hover:text-purple-300 transition-colors" onclick={() => scrollToSection('contact')}>Discuss Project →</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- WordPress Projects Grid -->
		<div class="mt-20">
			<div class="text-center mb-16">
				<span class="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6">
					Recent Work
				</span>
				<h3 class="text-4xl font-black text-white mb-6 leading-tight">
					WordPress
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
						Projects
					</span>
				</h3>
				<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
					Showcasing my latest WordPress development work for various clients
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Project 1 -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
						<!-- Screenshot -->
						<div class="relative h-48 overflow-hidden">
							<img src="/north-sea.png" alt="North Sea Egypt Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							<a href="https://www.northsea-eg.com/" target="_blank" class="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">North Sea Egypt</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Maritime services website with custom theme and multilingual support</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">WordPress</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Custom Theme</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Multilingual</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Project 2 -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
						<!-- Screenshot -->
						<div class="relative h-48 overflow-hidden">
							<img src="/stone-crew.png" alt="Stone Crew Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							<a href="https://stonecrew.net/" target="_blank" class="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Stone Crew</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Construction company website with project galleries and contact forms</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">WordPress</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Gallery</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Forms</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Project 3 -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
						<!-- Screenshot -->
						<div class="relative h-48 overflow-hidden">
							<img src="/Dr.Abeer.png" alt="Dr. Abeer Abu Kamar Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							<a href="https://dr-abeerabukamar.com/" target="_blank" class="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Dr. Abeer Abu Kamar</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Medical practice website with appointment booking system</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">WordPress</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Medical</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Booking</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Project 4 -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
						<!-- Screenshot -->
						<div class="relative h-48 overflow-hidden">
							<img src="/Dr.Hassan-Maghraby.png" alt="Prof. Hassan Maghraby Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							<a href="https://www.profhassanmaghraby.com/" target="_blank" class="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Prof. Hassan Maghraby</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Academic portfolio showcasing research and publications</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">WordPress</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Academic</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Portfolio</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Project 5 -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
						<!-- Screenshot -->
						<div class="relative h-48 overflow-hidden">
							<img src="/cargo.png" alt="CargoQ Serv Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							<a href="https://cargoqserv.com/" target="_blank" class="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">CargoQ Serv</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Logistics services website with e-commerce capabilities</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">WordPress</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">E-commerce</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Logistics</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Project 6 -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2">
						<!-- Screenshot -->
						<div class="relative h-48 overflow-hidden">
							<img src="/TheMarketinghouse.png" alt="Marketing House Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							<a href="https://themarketinghouse.net" target="_blank" class="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Marketing House</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Creative marketing agency with portfolio showcase</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">WordPress</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Creative</span>
								<span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Portfolio</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-24 bg-slate-900 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-20">
			<span class="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6">
				Get In Touch
			</span>
			<h2 class="text-5xl font-black text-white mb-6 leading-tight">
				Let's Work
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
					Together
				</span>
			</h2>
			<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
				Ready to start your WordPress project? I'm here to help you build the perfect website for your business.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- WhatsApp Contact -->
			<div>
				<h3 class="text-2xl font-bold text-white mb-6">Get in touch via WhatsApp</h3>
				<p class="text-lg text-slate-300 mb-8">
					The fastest way to reach me is through WhatsApp. Click the floating button on the bottom right 
					or use the contact information below to start a conversation about your project.
				</p>
				
				<div class="space-y-6">
					<!-- WhatsApp Button -->
					<a 
						href="https://wa.me/201201392000?text=Hi! I'm interested in discussing a project with you. Can you tell me more about your services and pricing?"
						target="_blank"
						rel="noopener noreferrer"
						class="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full flex items-center justify-center"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
						</svg>
						Chat on WhatsApp
					</a>
					
					<!-- Quick Response Info -->
					<div class="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
						<div class="flex items-start">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<div>
								<h4 class="font-bold text-white mb-2">Quick Response</h4>
								<p class="text-sm text-slate-300">I typically respond within a few hours during business hours</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Contact Information -->
			<div>
				<h3 class="text-2xl font-bold text-white mb-6">Get in touch</h3>
				<p class="text-lg text-slate-300 mb-8">
					I'm always interested in new opportunities and exciting projects. 
					Let's discuss how we can bring your ideas to life.
				</p>
				
				<div class="space-y-8">
					<!-- Email -->
					<div class="flex items-start">
						<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<h4 class="text-xl font-bold text-white mb-2">Email</h4>
							<p class="text-slate-300 mb-1">afarg843@gmail.com</p>
							<p class="text-sm text-slate-400">I'll respond within 24 hours</p>
						</div>
					</div>
					
					<!-- Phone -->
					<div class="flex items-start">
						<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div>
							<h4 class="text-xl font-bold text-white mb-2">Phone</h4>
							<p class="text-slate-300 mb-1">+20 120 139 2000</p>
							<p class="text-sm text-slate-400">Mon-Fri 9AM-6PM EET</p>
						</div>
					</div>
					
					<!-- Location -->
					<div class="flex items-start">
						<div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div>
							<h4 class="text-xl font-bold text-white mb-2">Location</h4>
							<p class="text-slate-300 mb-1">Egypt</p>
							<p class="text-sm text-slate-400">Available for remote work</p>
						</div>
					</div>
					
					<!-- LinkedIn -->
					<div class="flex items-start">
						<div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
						</div>
						<div>
							<h4 class="text-xl font-bold text-white mb-2">LinkedIn</h4>
							<a href="https://www.linkedin.com/in/abdelrhman-farg/" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-blue-400 transition-colors">
								Connect with me on LinkedIn
							</a>
							<p class="text-sm text-slate-400">Professional network & updates</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
	
	<!-- Floating Elements -->
	<div class="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
	<div class="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
	<div class="absolute bottom-10 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
	
	<div class="container mx-auto px-4 text-center relative z-10">
		<div class="max-w-4xl mx-auto">
			<span class="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6">
				Ready to Get Started?
			</span>
			<h2 class="text-5xl font-black text-white mb-6 leading-tight">
				Let's Build Your
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
					WordPress Dream
				</span>
			</h2>
			<p class="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
				Ready to transform your business with a professional WordPress website? 
				Let's discuss your project and create something amazing together.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
				<button 
					class="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
					onclick={() => scrollToSection('contact')}
				>
					<span class="relative z-10 flex items-center gap-3">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
						Start Your Project
					</span>
					<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
				</button>
				
				<a 
					href="https://wa.me/201201392000?text=Hi! I'm interested in discussing a WordPress project with you. Can you tell me more about your services and pricing?"
					target="_blank"
					rel="noopener noreferrer"
					class="group px-10 py-5 border-2 border-green-400 text-green-300 font-bold text-xl rounded-2xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm flex items-center gap-3"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
					</svg>
					Chat on WhatsApp
				</a>
			</div>
			
			<!-- Trust Indicators -->
			<div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
				<div class="text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="text-lg font-bold text-white mb-2">Quality Guaranteed</h3>
					<p class="text-slate-300 text-sm">Professional WordPress development with attention to detail</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="text-lg font-bold text-white mb-2">Fast Delivery</h3>
					<p class="text-slate-300 text-sm">Quick turnaround times without compromising on quality</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
						</svg>
					</div>
					<h3 class="text-lg font-bold text-white mb-2">Ongoing Support</h3>
					<p class="text-slate-300 text-sm">Continued maintenance and support for your website</p>
				</div>
			</div>
		</div>
	</div>
</section>