import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const stored = browser ? (localStorage.getItem('theme') ?? 'dark') : 'dark';

export const theme = writable<'dark' | 'light'>(stored as 'dark' | 'light');

if (browser) {
	theme.subscribe((val) => {
		localStorage.setItem('theme', val);
		document.documentElement.setAttribute('data-theme', val);
	});
}
