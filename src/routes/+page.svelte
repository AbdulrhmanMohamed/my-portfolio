<script lang="ts">
	import type { PageData } from './$types';
	import { onMount, onDestroy } from 'svelte';
	import { initAllAnimations, cleanupAnimations } from '$lib/animations';

	let { data }: { data: PageData } = $props();

	// Initialize GSAP animations when component mounts
	onMount(async () => {
		console.log('onMount called, about to initialize animations');
		try {
			await initAllAnimations();
			console.log('Animations initialization completed');
		} catch (error) {
			console.error('Error in onMount:', error);
		}
	});

	// Cleanup animations when component is destroyed
	onDestroy(() => {
		cleanupAnimations();
	});

	// Smooth scrolling function
	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Modal state management
	let isModalOpen = $state(false);
	let selectedProject = $state<any>(null);

	// Project details data
	const projectDetails = {
		'stone-traders': {
			title: 'Stone Traders Egypt',
			subtitle: 'Premium Engineered Stone Solutions',
			description: 'Founded back in 2007, Stone Traders is an Egyptian Limited Liability Company specialized in supplying & installing premier quality Stone products such as; Engineered Marble, Engineered Quartz, Glaskeramic, and Porcelain slabs, decorative and architectural lightning products from Murano.',
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
				'15+ years of industry experience',
				'Premium quality stone products',
				'Professional installation services',
				'Murano decorative products'
			],
			url: 'https://stonetraders-eg.com/',
			image: '/stone-traders.png'
		},
		'north-sea': {
			title: 'North Sea for Marine Services',
			subtitle: 'Professional Marine & Petroleum Services',
			description: 'North Sea for Marine Services is officially registered under the Egyptian Authority for Operations Approval and the Ministry of Maritime Transport. We specialize in commercial diving, petroleum services, and the supply, manufacturing, and sales of marine equipment including communication systems, video surveillance, and other marine solutions.',
			technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
			features: [
				'Commercial diving services',
				'Petroleum industry solutions',
				'Marine equipment supply & manufacturing',
				'Communication systems integration',
				'Video surveillance solutions',
				'Professional marine consulting'
			],
			achievements: [
				'Officially registered with Egyptian Maritime Authority',
				'Ministry of Maritime Transport approved',
				'Specialized petroleum services',
				'Comprehensive marine solutions provider'
			],
			url: 'https://northsea-eg.com/',
			image: '/north-sea.png'
		},
		'stone-crew': {
			title: 'StoneCrew',
			subtitle: 'Premium Stone Supply & Installation',
			description: 'Welcome to StoneCrew, your trusted partner in the supply and installation of premium-quality stones, including quartz, granite, and marble. With a commitment to excellence and a reputation for delivering unparalleled craftsmanship, StoneCrew stands at the forefront of the stone industry. Our unparalleled expertise and dedication to customer satisfaction ensure that every project we undertake is executed with precision and care.',
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
				'Unparalleled craftsmanship quality',
				'Full-scale installation capabilities',
				'Customer satisfaction guarantee'
			],
			url: 'https://stonecrew-eg.com/',
			image: '/stone-crew.png'
		},
		'dr-abeer': {
			title: 'Dr. Abeer Abu Kamar',
			subtitle: 'استشاري النساء والتوليد وعلاج العقم والحقن المجهري',
			description: 'إستشارى النساء والتوليد وعلاج العقم والحقن المجهرى وجراحة المناظير. تخرجت من كلية الطب قسم النساء والتوليد جامعة عين شمس وتعمل فى مجال الحقن المجهرى وجراحة المناظير بخبرة تمتد لأكثر من 15 عاما واستطاعت خلال هذه الفترة كتابة نجاحات عديدة وتحقيق "أعلى معدلات النجاح" فى عمليات الحقن المجهرى والتخصيب الصناعى من مصر وليبيا ودول أخرى عدة.',
			technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Node.js'],
			features: [
				'استشارات النساء والتوليد المتخصصة',
				'علاج العقم والحقن المجهري',
				'جراحة المناظير المتقدمة',
				'نظام حجز المواعيد الإلكتروني',
				'استشارات طبية عن بُعد',
				'متابعة الحالات الطبية'
			],
			achievements: [
				'خبرة تزيد عن 15 عاماً في المجال',
				'أعلى معدلات النجاح في الحقن المجهري',
				'خدمة مرضى من مصر وليبيا ودول عربية أخرى',
				'تخرج من جامعة عين شمس - كلية الطب'
			],
			url: 'https://dr-abeer.vercel.app/',
			image: '/Dr.Abeer.png'
		},
		'dr-maghraby': {
			title: 'Prof. Hassan Maghraby',
			subtitle: 'Professor of Obstetrics and Gynecology',
			description: 'Professor Obstetrics and gynecology; Alexandria University Ex chairman of OB/GYN department Fellow Pennsylvania university USA President of Egyptian Foundation of Reproductive medicine and Embryology (EFRE). A distinguished medical professional with extensive experience in reproductive medicine and academic leadership.',
			technologies: ['Vue.js', 'JavaScript', 'CSS3', 'PHP'],
			features: [
				'Academic portfolio and research publications',
				'Reproductive medicine expertise',
				'Medical consultation services',
				'Research and development in embryology',
				'International medical collaboration',
				'Educational content and resources'
			],
			achievements: [
				'Professor at Alexandria University',
				'Ex-chairman of OB/GYN department',
				'Fellow at Pennsylvania University, USA',
				'President of Egyptian Foundation of Reproductive Medicine and Embryology (EFRE)'
			],
			url: 'https://dr-maghraby.vercel.app/',
			image: '/Dr.Hassan-Maghraby.png'
		},
		'cargo': {
			title: 'CQS International',
			subtitle: 'Top Class Cargo Surveying Services',
			description: 'CQS International was founded in 2011. Our primary focus is providing a top class cargo surveying services, with uncompromising standards in order to fulfill our client\'s needs and requirements based on quality, efficiency, accuracy, and dedication.',
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
				'Dedicated to client satisfaction',
				'Efficiency and accuracy focused operations'
			],
			url: 'https://cargoq-serv.com/',
			image: '/cargo.png'
		},
		'legien-message': {
			title: 'مركز لجين سبا للمساج',
			subtitle: 'مؤسسة معتمدة ومرخصة في المملكة العربية السعودية',
			description: 'مؤسسة مركز لجين سبا للمساج - رقم الترخيص: 7039220152. مؤسسة معتمدة ومرخصة في المملكة العربية السعودية لتقديم خدمات المساج الرياضي والاسترخائي والعلاجي. العنوان: جدة - طريق الملك فهد - غرب وشمال دوار الدراجة - الطريق المتفرع من طريق الملك فهد ابن يزيد الربيعي.',
			technologies: ['HTML5', 'CSS3', 'JavaScript', 'Arabic RTL'],
			features: [
				'خدمات المساج الرياضي المتخصصة',
				'جلسات المساج الاسترخائي والعلاجي',
				'نظام حجز المواعيد الإلكتروني',
				'خدمات سبا متكاملة',
				'فريق متخصص ومدرب',
				'بيئة مريحة وآمنة'
			],
			achievements: [
				'مؤسسة معتمدة ومرخصة رسمياً',
				'رقم الترخيص: 7039220152',
				'موقع استراتيجي في جدة',
				'خدمات متنوعة في المساج والسبا'
			],
			url: 'https://legien-message.com/',
			image: '/legien-message.png'
		},
		'clean-max': {
			title: 'كلين ماكس',
			subtitle: 'شركة رائدة في مجال خدمات النظافة الشاملة',
			description: 'كلين ماكس هي شركة رائدة في مجال خدمات النظافة الشاملة، وتتخذ من الجودة والاحترافية مبدأ أساسيا في تقديم خدماتها. تأسست كلين ماكس لتلبية احتياجات العملاء المتنوعة في مجال النظافة، سواء كانت للمنازل، الشركات، المؤسسات، أو الفعاليات الخاصة.',
			technologies: ['HTML5', 'CSS3', 'JavaScript', 'Arabic RTL'],
			features: [
				'خدمات تنظيف المنازل الشاملة',
				'تنظيف الشركات والمؤسسات',
				'خدمات تنظيف الفعاليات الخاصة',
				'فريق عمل مدرب ومتخصص',
				'استخدام أحدث المعدات والتقنيات',
				'خدمة عملاء متميزة على مدار الساعة'
			],
			achievements: [
				'شركة رائدة في مجال النظافة',
				'الجودة والاحترافية كمبدأ أساسي',
				'خدمات متنوعة لجميع القطاعات',
				'سمعة ممتازة في السوق السعودي'
			],
			url: 'https://cleanmax-ksa.com/',
			image: '/clean-max.png'
		},
		'marketing-house': {
			title: 'The Marketing House',
			subtitle: 'Excellence and Quality in Technology Solutions',
			description: 'We are fond of technology and our efforts are dedicated to excellence and quality, which supports our perseverance as well as accuracy on this craft and our reliability towards you. Our flexible management entails meeting up with our clients change of vision at any given moment, obeying a budget, and a punctual time plan.',
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
				'Dedicated to excellence and quality',
				'Proven track record in technology solutions',
				'Flexible management approach',
				'Strong client reliability and trust'
			],
			url: 'https://themarketinghouse.com/',
			image: '/TheMarketinghouse.png'
		}
	};

	// Modal functions
	function openModal(projectKey: keyof typeof projectDetails) {
		selectedProject = projectDetails[projectKey];
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		isModalOpen = false;
		selectedProject = null;
		document.body.style.overflow = 'auto';
	}

	// Close modal on escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isModalOpen) {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
	<title>Abdulrhman Mohamed - Full-Stack Developer | React, Next.js, SvelteKit Expert</title>
	<meta name="description" content="Full-Stack Developer with 5+ years experience. Specializing in React.js, Next.js, SvelteKit, Node.js, and scalable web applications. Available for outsourced development projects." />
	<meta name="keywords" content="Full-Stack Developer, React Developer, Next.js Developer, SvelteKit Developer, Node.js Developer, JavaScript Developer, TypeScript Developer, Web Application Development, Scalable Applications, Outsourced Developer, Technical Partner" />
	<meta name="author" content="Abdulrhman Mohamed" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://abdulrhman-portfolio.vercel.app/" />
	<meta property="og:title" content="Abdulrhman Mohamed - Full-Stack Developer & Technical Partner" />
	<meta property="og:description" content="Full-Stack Developer with 5+ years experience. React.js, Next.js, SvelteKit, Node.js specialist. Available for outsourced development projects." />
	<meta property="og:image" content="https://abdulrhman-portfolio.vercel.app/profile.png" />
	<meta property="og:site_name" content="Abdulrhman Mohamed Portfolio" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://abdulrhman-portfolio.vercel.app/" />
	<meta property="twitter:title" content="Abdulrhman Mohamed - Full-Stack Developer & Technical Partner" />
	<meta property="twitter:description" content="Full-Stack Developer with 5+ years experience. React.js, Next.js, SvelteKit, Node.js specialist. Available for outsourced development projects." />
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
		"jobTitle": "Full-Stack Developer",
		"description": "Full-Stack Developer with 5+ years experience turning ideas into high-performing web applications. Specializing in React.js, Next.js, SvelteKit, and scalable solutions.",
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
			"React.js",
			"Next.js",
			"SvelteKit",
			"Tailwind CSS",
			"DaisyUI",
			"Node.js",
			"Express",
			"NestJS",
			"JavaScript",
			"TypeScript",
			"Full-Stack Development",
			"Web Applications",
			"Scalable Architecture"
		],
		"hasOccupation": {
			"@type": "Occupation",
			"name": "Full-Stack Developer",
			"description": "Full-stack development services including React applications, Next.js projects, SvelteKit solutions, and scalable web platforms."
		}
	}
	</script>
</svelte:head>

<!-- Hero Section -->
<section id="home" class="relative min-h-screen overflow-hidden pt-20">
	<!-- Premium Animated Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900"></div>
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
	
	<!-- Floating Elements -->
	<div class="floating-element absolute top-0 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
	<div class="floating-element absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
	<div class="floating-element absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
	<div class="floating-element absolute top-4 right-1/3 w-12 h-12 bg-indigo-500/15 rounded-full blur-lg"></div>
	
	<div class="relative z-10 min-h-screen flex items-center justify-center">
		<div class="w-full">
			<div class="w-full">
				<!-- Business Card Layout -->
				<div class="bg-white/5 backdrop-blur-lg p-6 md:p-12 shadow-2xl border-y border-white/10">
					<div class="container mx-auto px-4">
						<div class="max-w-7xl mx-auto">
							<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<!-- Left Side - Content -->
						<div class="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
							<!-- Premium Typography -->
							<div>
								<h1 class="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 leading-tight">
									<span class="text-white">Hi, I'm</span>
									<br>
									<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
										Abdulrhman Mohamed
									</span>
								</h1>
								
								<!-- Professional Subtitle -->
								<h2 class="hero-subtitle text-lg sm:text-xl md:text-2xl font-bold text-blue-300 mb-3 lg:mb-4">Full-Stack Developer & Technical Partner</h2>
								<p class="hero-description text-base sm:text-lg text-blue-200 leading-relaxed">
									Welcome to my digital workspace! I'm a passionate developer who transforms complex business ideas into elegant, high-performing web solutions. 
									Whether you're a startup with a bold vision or an established company looking to innovate, I bring your concepts to life with precision and creativity.
								</p>
								<p class="hero-description text-base sm:text-lg text-blue-200 leading-relaxed mt-4">
									I specialize in building modern web applications that don't just look great—they perform exceptionally, scale effortlessly, and deliver real business value. 
									From concept to deployment, I handle every aspect of development with meticulous attention to detail.
								</p>
								<p class="hero-description text-base sm:text-lg text-blue-200 leading-relaxed mt-4">
									Ready to turn your vision into reality? Let's collaborate and create something extraordinary that sets you apart in the digital landscape.
								</p>
							</div>
							
							<!-- Premium CTA Buttons -->
							<div class="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<button 
									class="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base rounded-xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
									onclick={() => scrollToSection('projects')}
								>
									<span class="relative z-10 flex items-center justify-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
										</svg>
										View My Work
									</span>
									<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
								</button>
								
								<button 
									class="group px-6 py-3 border-2 border-blue-400 text-blue-300 font-bold text-base rounded-xl hover:bg-blue-400 hover:text-indigo-900 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
									onclick={() => scrollToSection('contact')}
								>
									<span class="flex items-center justify-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
										Get In Touch
									</span>
								</button>
							</div>
						</div>
						
						<!-- Right Side - Profile Image Card -->
						<div class="flex justify-center order-1 lg:order-2">
							<div class="hero-image relative">
								<!-- Card Background with Shadow -->
								<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20">
									<!-- Profile Image with Enhanced Styling -->
									<div class="relative">
										<div class="w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 relative">
											<!-- Glow Effect -->
											<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-40 animate-pulse"></div>
											<!-- Image Container -->
											<div class="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
												<div class="w-full h-full rounded-xl overflow-hidden">
													<img 
														src="/profile.png" 
														alt="Abdulrhman Mohamed - Full-Stack Developer & Technical Partner" 
														class="w-full h-full object-cover"
													/>
												</div>
											</div>
										</div>
										
										<!-- Floating Badge -->
										<div class="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
											Available for Hire
										</div>
									</div>
								</div>
								
								<!-- Decorative Elements -->
								<div class="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/30 rounded-full blur-sm"></div>
								<div class="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-purple-500/30 rounded-full blur-md"></div>
								<div class="absolute -top-4 -right-1 sm:-top-6 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-500/30 rounded-full blur-sm"></div>
							</div>
						</div>
					</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</div>
	</div>
</section>

<!-- Project Details Modal -->
{#if isModalOpen && selectedProject}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onclick={closeModal}>
		<div class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl" onclick={(e) => e.stopPropagation()}>
			<!-- Modal Header -->
			<div class="sticky top-0 z-10 bg-white/5 backdrop-blur-lg border-b border-white/10 p-6 rounded-t-3xl">
				<div class="flex items-center justify-between">
					<div>
						<h2 class="text-2xl font-bold text-white mb-1">{selectedProject.title}</h2>
						<p class="text-purple-300 text-lg">{selectedProject.subtitle}</p>
					</div>
					<button 
						onclick={closeModal}
						class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 group"
						aria-label="Close modal"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Modal Content -->
			<div class="p-6 space-y-8">
				<!-- Project Image -->
				<div class="relative overflow-hidden rounded-2xl">
					<img 
						src={selectedProject.image} 
						alt={selectedProject.title}
						class="w-full h-64 object-cover"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
				</div>

				<!-- Project Description -->
				<div class="space-y-4">
					<h3 class="text-xl font-semibold text-white">About the Project</h3>
					<p class="text-slate-300 leading-relaxed">{selectedProject.description}</p>
				</div>

				<!-- Technologies Used -->
				<div class="space-y-4">
					<h3 class="text-xl font-semibold text-white">Technologies Used</h3>
					<div class="flex flex-wrap gap-2">
						{#each selectedProject.technologies as tech}
							<span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
								{tech}
							</span>
						{/each}
					</div>
				</div>

				<!-- Key Features -->
				<div class="space-y-4">
					<h3 class="text-xl font-semibold text-white">Key Features</h3>
					<ul class="space-y-2">
						{#each selectedProject.features as feature}
							<li class="flex items-start space-x-3">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-slate-300">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Achievements -->
				<div class="space-y-4">
					<h3 class="text-xl font-semibold text-white">Achievements</h3>
					<ul class="space-y-2">
						{#each selectedProject.achievements as achievement}
							<li class="flex items-start space-x-3">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span class="text-slate-300">{achievement}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Visit Project Button -->
				{#if selectedProject.url}
					<div class="pt-4">
						<a 
							href={selectedProject.url}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
						>
							<span>Visit Project</span>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

<!-- About Section -->
<section id="about" class="py-24 bg-gradient-to-br from-indigo-900 to-indigo-950 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZTI4ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjAgMjBjMC01LjUtNC41LTEwLTEwLTEwcy0xMCA0LjUtMTAgMTAgNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMHptMTAgMGMwLTUuNS00LjUtMTAtMTAtMTBzLTEwIDQuNS0xMCAxMCA0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEweiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div class="space-y-8">
				<div class="about-element">
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
					<p class="about-element text-xl text-blue-200 leading-relaxed">
						My journey into web development began five years ago when I discovered the magic of transforming ideas into interactive digital experiences. 
						What started as curiosity about how websites work has evolved into a deep passion for solving real-world problems through code. 
						I believe that great software isn't just about the technology—it's about understanding people and creating solutions that truly matter.
					</p>
					<p class="about-element text-lg text-blue-200 leading-relaxed">
						Throughout my career, I've had the privilege of collaborating with diverse clients, from ambitious entrepreneurs launching their first startups 
						to established companies reimagining their digital presence. Each project has been a learning experience, teaching me not just about new technologies, 
						but about different industries, unique challenges, and the importance of listening to understand before building to solve.
					</p>
					
					<!-- Technical Expertise Section -->
					<div class="about-element mt-8 p-6 bg-indigo-800/50 rounded-2xl border border-indigo-700/50">
						<div class="flex items-start gap-4">
							<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-bold text-white mb-3">Development Philosophy</h3>
								<p class="text-blue-200 text-sm leading-relaxed">
									I believe in writing code that tells a story—clean, maintainable, and purposeful. My approach combines 
									technical excellence with business understanding, ensuring every line of code serves a greater purpose. 
									I prioritize user experience, performance optimization, and future-proof architecture that grows with your business needs.
								</p>
								<div class="flex flex-wrap gap-2 mt-3">
									<span class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Clean Architecture</span>
									<span class="px-3 py-1 bg-blue-700 text-blue-200 text-xs rounded-full">User-Centric Design</span>
									<span class="px-3 py-1 bg-blue-700 text-blue-200 text-xs rounded-full">Performance First</span>
									<span class="px-3 py-1 bg-blue-700 text-blue-200 text-xs rounded-full">Future-Proof Solutions</span>
									<span class="px-3 py-1 bg-blue-700 text-blue-200 text-xs rounded-full">Business Value</span>
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
				<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10">
					<div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
					<div class="relative z-10 text-center">
						<div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<h3 class="text-2xl font-bold text-white mb-2">Full-Stack Expertise</h3>
						<p class="text-slate-300 mb-6">Modern Web Development & Scalable Solutions</p>
						
						<!-- Stats -->
						<div class="grid grid-cols-2 gap-4">
							<div class="text-center">
								<div class="text-2xl font-bold text-blue-400">6+</div>
								<div class="text-sm text-blue-400">Live Projects</div>
							</div>
							<div class="text-center">
								<div class="text-2xl font-bold text-purple-400">100%</div>
								<div class="text-sm text-blue-400">Client Satisfaction</div>
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
<section id="skills" class="py-24 bg-blue-950 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-20">
			<span class="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6">
				My Expertise
			</span>
			<h2 class="text-5xl font-black text-white mb-6 leading-tight">
				Full-Stack
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
					Technologies
				</span>
			</h2>
			<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
				A comprehensive toolkit of cutting-edge technologies, frameworks, and tools that power today's most innovative web applications
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Frontend Development -->
			<div class="skill-item group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
					<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">Frontend Development</h3>
					<p class="text-slate-300 text-sm leading-relaxed">React.js, Next.js, SvelteKit with responsive design and modern UI/UX</p>
				</div>
			</div>

			<!-- Backend Development -->
			<div class="skill-item group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">Backend Development</h3>
					<p class="text-slate-300 text-sm leading-relaxed">Node.js, Express, NestJS with scalable APIs and database integration</p>
				</div>
			</div>

			<!-- Full-Stack Solutions -->
			<div class="skill-item group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
					<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">Full-Stack Solutions</h3>
					<p class="text-slate-300 text-sm leading-relaxed">Complete web applications with modern architecture and deployment</p>
				</div>
			</div>

			<!-- UI/UX & Styling -->
			<div class="skill-item group relative">
				<div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div class="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
					<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">UI/UX & Styling</h3>
					<p class="text-slate-300 text-sm leading-relaxed">Tailwind CSS, DaisyUI with modern design systems and user experience</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-24 relative overflow-hidden">
	<!-- Premium Animated Background - Matching Hero Section -->
	<div class="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900"></div>
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
	
	<!-- Floating Elements - Matching Hero Section -->
	<div class="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
	<div class="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
	<div class="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
	<div class="absolute top-20 right-1/3 w-12 h-12 bg-indigo-500/15 rounded-full blur-lg animate-pulse delay-500"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<!-- WordPress Projects Grid -->
		<div class="mt-20">
			<div class="text-center mb-16">
				<span class="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6">
					Recent Work
				</span>
				<h3 class="text-4xl font-black text-white mb-6 leading-tight">
					Full-Stack
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
						Projects
					</span>
				</h3>
				<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
					Showcasing my latest web development work and modern solutions for various clients
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Project 1 -->
				<div class="project-card group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col" style="max-height: 600px;">
						<!-- Screenshot -->
						<div class="relative flex-1 min-h-[200px] overflow-hidden">
							<img src="/north-sea.png" alt="North Sea Egypt Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						</div>
						<!-- Content -->
						<div class="p-6 flex-shrink-0">
							<h4 class="text-xl font-bold text-white mb-3">North Sea Egypt</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Maritime services platform built with React.js featuring responsive design and multilingual support</p>
							<button 
								onclick={() => openModal('north-sea')}
								class="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
							>
								View More Details
							</button>
						</div>
					</div>
				</div>

				<!-- Project 2 -->
				<div class="project-card group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col" style="max-height: 600px;">
						<!-- Screenshot -->
						<div class="relative flex-1 min-h-[200px] overflow-hidden">
							<img src="/stone-crew.png" alt="Stone Crew Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Stone Crew</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Construction company platform built with Next.js featuring dynamic galleries and interactive forms</p>
							<button onclick={() => openModal('stone-crew')}
								class="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-purple-500/25"
							>
								View More Details
							</button>
						</div>
					</div>
				</div>

				<!-- Project 3 -->
				<div class="project-card group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col" style="max-height: 600px;">
						<!-- Screenshot -->
						<div class="relative flex-1 min-h-[200px] overflow-hidden">
							<img src="/Dr.Abeer.png" alt="Dr. Abeer Abu Kamar Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Dr. Abeer Abu Kamar</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Medical practice application built with SvelteKit featuring real-time appointment booking system</p>
							<button onclick={() => openModal('dr-abeer')} class="w-full bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
								View More Details
							</button>
						</div>
					</div>
				</div>

				<!-- Project 4 -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col" style="max-height: 600px;">
						<!-- Screenshot -->
						<div class="relative flex-1 min-h-[200px] overflow-hidden">
							<img src="/Dr.Hassan-Maghraby.png" alt="Prof. Hassan Maghraby Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Prof. Hassan Maghraby</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Academic portfolio built with Vue.js showcasing research publications and interactive content</p>
							<button onclick={() => openModal('dr-maghraby')} class="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
								View More Details
							</button>
						</div>
					</div>
				</div>

				<!-- Project 5 -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col" style="max-height: 600px;">
						<!-- Screenshot -->
						<div class="relative flex-1 min-h-[200px] overflow-hidden">
							<img src="/cargo.png" alt="CargoQ Serv Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">CargoQ Serv</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Logistics services platform built with Node.js featuring e-commerce capabilities and real-time tracking</p>
							<button onclick={() => openModal('cargo')} class="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
								View More Details
							</button>
						</div>
					</div>
				</div>

				<!-- Project 6 -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col" style="max-height: 600px;">
						<!-- Screenshot -->
						<div class="relative flex-1 min-h-[200px] overflow-hidden">
							<img src="/TheMarketinghouse.png" alt="Marketing House Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Marketing House</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Creative marketing agency with portfolio showcase</p>
							<button onclick={() => openModal('marketing-house')} class="w-full bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
								View More Details
							</button>
						</div>
					</div>
				</div>

				<!-- Project 7 - CleanMax KSA -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col" style="max-height: 600px;">
						<!-- Screenshot -->
						<div class="relative flex-1 min-h-[200px] overflow-hidden">
							<img src="/clean-max.png" alt="CleanMax KSA Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">CleanMax KSA</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Professional cleaning services website with Arabic/English support and service booking system</p>
							<button onclick={() => openModal('clean-max')} class="w-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
								View More Details
							</button>
						</div>
					</div>
				</div>

				<!-- Project 8 - Stone Traders Egypt -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col" style="max-height: 600px;">
						<!-- Screenshot -->
						<div class="relative flex-1 min-h-[200px] overflow-hidden">
							<img src="/stone-traders.png" alt="Stone Traders Egypt Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Stone Traders Egypt</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Premium engineered stone solutions showcasing marble, quartz & porcelain products</p>
							<button 
								onclick={() => openModal('stone-traders')}
								class="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-amber-500/25"
							>
								View More Details
							</button>
						</div>
					</div>
				</div>

				<!-- Project 9 - Jeddah Massage Center -->
				<div class="group relative">
					<div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div class="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col" style="max-height: 600px;">
						<!-- Screenshot -->
						<div class="relative flex-1 min-h-[200px] overflow-hidden">
							<img src="/legien-message.png" alt="Jeddah Massage Center Website" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

						</div>
						<!-- Content -->
						<div class="p-6">
							<h4 class="text-xl font-bold text-white mb-3">Jeddah Massage Center</h4>
							<p class="text-slate-300 text-sm mb-4 leading-relaxed">Professional massage services website with Arabic interface and booking system</p>
							<button onclick={() => openModal('legien-message')} class="w-full bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
								View More Details
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-24 bg-blue-950 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-20 contact-element">
			<span class="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6 contact-element">
				Get In Touch
			</span>
			<h2 class="text-5xl font-black text-white mb-6 leading-tight contact-element">
				Let's Work
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
					Together
				</span>
			</h2>
			<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed contact-element">
				Ready to start your next project? I'm here to help you build modern, scalable solutions for your business.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- WhatsApp Contact -->
			<div class="contact-element">
				<h3 class="text-2xl font-bold text-white mb-6 contact-element">Get in touch via WhatsApp</h3>
				<p class="text-lg text-slate-300 mb-8 contact-element">
					The fastest way to reach me is through WhatsApp. Click the floating button on the bottom right 
					or use the contact information below to start a conversation about your project.
				</p>
				
				<div class="space-y-6">
					<!-- WhatsApp Button -->
					<a 
						href="https://wa.me/201201392000?text=Hi! I'm interested in discussing a project with you. Can you tell me more about your services and pricing?"
						target="_blank"
						rel="noopener noreferrer"
						class="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full flex items-center justify-center contact-button"
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
			<div class="contact-element">
				<h3 class="text-2xl font-bold text-white mb-6 contact-element">Get in touch</h3>
				<p class="text-lg text-slate-300 mb-8 contact-element">
					I'm always interested in new opportunities and exciting projects. 
					Let's discuss how we can bring your ideas to life.
				</p>
				
				<div class="space-y-8">
					<!-- Email -->
					<div class="flex items-start contact-item">
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
					<div class="flex items-start contact-item">
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
					<div class="flex items-start contact-item">
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
<section class="py-24 bg-gradient-to-br from-indigo-900 to-indigo-950 relative overflow-hidden">
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
					Next Solution
				</span>
			</h2>
			<p class="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
				Ready to transform your business with modern web applications? 
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
					href="https://wa.me/201201392000?text=Hi! I'm interested in discussing a project with you. Can you tell me more about your services and pricing?"
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