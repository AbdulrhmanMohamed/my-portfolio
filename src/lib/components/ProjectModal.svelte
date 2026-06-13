<script lang="ts">
	import type { Project } from '$lib/data/projects';

	let { project, onclose }: { project: Project | null; onclose: () => void } = $props();

	let open = $derived(project !== null);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onclose();
	}

	function handleOverlayClick(e: MouseEvent) {
		if (e.target === e.currentTarget) onclose();
	}

	function handleOverlayKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') onclose();
	}

	$effect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
			window.addEventListener('keydown', handleKeydown);
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{#if project}
	<div
		class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 pt-24 light:bg-zinc-200/60"
		onclick={handleOverlayClick}
		onkeydown={handleOverlayKeydown}
		role="dialog"
		aria-modal="true"
		aria-label={project.title}
		tabindex="-1"
	>
		<div
			class="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl light:border-zinc-200 light:bg-white"
			role="document"
		>
			<div class="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-6 py-4 rounded-t-2xl light:border-zinc-200 light:bg-white">
				<div>
					<h2 class="text-lg font-semibold text-zinc-100 light:text-zinc-900">{project.title}</h2>
					<p class="text-sm text-zinc-500 light:text-zinc-400">{project.subtitle}</p>
				</div>
				<button
					onclick={onclose}
					class="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-300 light:hover:bg-zinc-100 light:hover:text-zinc-600"
					aria-label="Close"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<div class="space-y-6 p-6">
				<div class="aspect-[16/9] overflow-hidden rounded-xl bg-zinc-800 light:bg-zinc-100">
					<img src={project.image} alt={project.title} class="h-full w-full object-cover" />
				</div>

				<div>
					<h3 class="mb-2 text-sm font-semibold text-zinc-100 light:text-zinc-900">The Project</h3>
					<p class="text-sm leading-relaxed text-zinc-400 light:text-zinc-500">{project.description}</p>
				</div>

				<div>
					<h3 class="mb-3 text-sm font-semibold text-zinc-100 light:text-zinc-900">What Was Delivered</h3>
					<ul class="space-y-2">
						{#each project.features as feature}
							<li class="flex items-start gap-3 text-sm text-zinc-400 light:text-zinc-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				{#if project.url}
					<div class="pt-2">
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-xl bg-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-700 light:bg-zinc-100 light:text-zinc-900 light:hover:bg-zinc-200"
						>
							Visit the site
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
