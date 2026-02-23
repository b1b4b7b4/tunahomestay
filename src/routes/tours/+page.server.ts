import { fail } from '@sveltejs/kit';
import { sendEmail } from '$lib/email';

export const actions = {
	reserve: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;

		const emailMessage = `
			New tour reservation request:
			Name: ${name}
			Email: ${email}
			Message: ${message}
		`;

		try {
			await sendEmail('New Tour Reservation', emailMessage);
			return { success: true };
		} catch (error) {
			console.error('Email send error:', error);
			return fail(500, { error: 'Failed to send email' });
		}
	}
};