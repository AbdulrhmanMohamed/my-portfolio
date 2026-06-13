<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

<div class="min-h-screen bg-zinc-950 font-sans text-zinc-100 light:bg-zinc-50 light:text-zinc-900">
	<Navbar />
	{@render children?.()}
	<Footer />
	<WhatsAppButton />
</div>
