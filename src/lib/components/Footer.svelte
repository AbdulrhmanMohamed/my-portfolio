<script lang="ts">
	import { profile } from '$lib/data/profile';
</script>

<footer class="border-t border-zinc-800 py-8 light:border-zinc-200">
	<div class="mx-auto max-w-6xl px-6">
		<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
			<p class="text-sm text-zinc-500">
				&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
			</p>
			<div class="flex items-center gap-4">
				<a
					href={profile.social.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-zinc-500 transition-colors hover:text-zinc-300 light:hover:text-zinc-700"
				>
					LinkedIn
				</a>
				<a
					href={`mailto:${profile.email}`}
					class="text-sm text-zinc-500 transition-colors hover:text-zinc-300 light:hover:text-zinc-700"
				>
					Email
				</a>
			</div>
		</div>
	</div>
</footer>
