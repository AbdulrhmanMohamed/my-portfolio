<script lang="ts">
	import { enhance } from '$app/forms';

	let submitted = $state(false);

	function handleSubmit() {
		submitted = true;
	}
</script>

<div class="space-y-6">
	<h3 class="text-lg font-semibold text-zinc-100 light:text-zinc-900">Get a free website demo</h3>
	<p class="text-sm leading-relaxed text-zinc-400 light:text-zinc-500">
		Tell me about your business and I will build a working demo tailored to you — no commitment, no cost.
	</p>

	{#if submitted}
		<div class="rounded-xl border border-teal-500/20 bg-teal-500/10 px-5 py-4">
			<p class="text-sm text-teal-400">Thanks! I will get back to you within 24 hours to discuss your business and start on your demo.</p>
		</div>
	{:else}
		<form method="POST" action="?/contact" use:enhance={handleSubmit} class="space-y-4">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<label for="name" class="mb-1.5 block text-sm font-medium text-zinc-400 light:text-zinc-500">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						class="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-700 focus:outline-none focus:ring-0 light:border-zinc-200 light:bg-white light:text-zinc-900 light:placeholder-zinc-400 light:focus:border-zinc-300"
						placeholder="Your name"
					/>
				</div>
				<div>
					<label for="email" class="mb-1.5 block text-sm font-medium text-zinc-400 light:text-zinc-500">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						class="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-700 focus:outline-none focus:ring-0 light:border-zinc-200 light:bg-white light:text-zinc-900 light:placeholder-zinc-400 light:focus:border-zinc-300"
						placeholder="you@example.com"
					/>
				</div>
			</div>
			<div>
				<label for="business" class="mb-1.5 block text-sm font-medium text-zinc-400 light:text-zinc-500">Your Business</label>
				<input
					type="text"
					id="business"
					name="business"
					required
					class="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-700 focus:outline-none focus:ring-0 light:border-zinc-200 light:bg-white light:text-zinc-900 light:placeholder-zinc-400 light:focus:border-zinc-300"
					placeholder="e.g., HVAC company in Austin"
				/>
			</div>
			<div>
				<label for="message" class="mb-1.5 block text-sm font-medium text-zinc-400 light:text-zinc-500">What do you need?</label>
				<textarea
					id="message"
					name="message"
					rows={3}
					class="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-700 focus:outline-none focus:ring-0 light:border-zinc-200 light:bg-white light:text-zinc-900 light:placeholder-zinc-400 light:focus:border-zinc-300"
					placeholder="Tell me about your business and what you are looking for..."
				></textarea>
			</div>
			<button
				type="submit"
				class="rounded-xl bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 light:bg-zinc-900 light:text-zinc-100 light:hover:bg-zinc-800"
			>
				Get my free demo
			</button>
		</form>
	{/if}
</div>
