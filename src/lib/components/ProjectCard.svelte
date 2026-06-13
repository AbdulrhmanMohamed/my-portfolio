<script lang="ts">
	import type { Project } from '$lib/data/projects';

	let { project, onclick }: { project: Project; onclick: () => void } = $props();
</script>

<button
	onclick={onclick}
	class="group cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900/50 p-0 text-left transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 light:border-zinc-200 light:bg-white light:hover:border-zinc-300 light:hover:bg-zinc-50"
>
	<div class="aspect-[16/10] overflow-hidden rounded-t-xl bg-zinc-800 light:bg-zinc-100">
		<img
			src={project.image}
			alt={project.title}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			loading="lazy"
		/>
	</div>
	<div class="space-y-3 p-5">
		<div class="flex flex-wrap gap-1.5">
			{#each project.technologies.slice(0, 3) as tech}
				<span class="rounded-md bg-teal-500/10 px-2 py-0.5 text-[11px] font-medium text-teal-400 light:text-teal-600">{tech}</span>
			{/each}
			{#if project.technologies.length > 3}
				<span class="rounded-md bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-500 light:bg-zinc-100 light:text-zinc-400">+{project.technologies.length - 3}</span>
			{/if}
		</div>
		<h3 class="text-base font-semibold text-zinc-100 light:text-zinc-900">{project.title}</h3>
		<p class="text-sm leading-relaxed text-zinc-400 light:text-zinc-500">{project.subtitle}</p>
	</div>
</button>
