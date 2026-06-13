import type { Actions } from './$types';

export const actions: Actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		console.log('Contact form submission:', { name, email, message });

		return { success: true };
	}
};
