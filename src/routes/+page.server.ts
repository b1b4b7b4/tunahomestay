import { fail } from '@sveltejs/kit';
import { sendEmail } from '$lib/email';

export const actions = {
	book: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const phone = data.get('phone') as string;
		const date = data.get('date') as string;
		const roomType = data.get('roomType') as string;
		const adults = data.get('adults') as string;
		const nights = data.get('nights') as string;

		const message = `
			New booking request:
			Name: ${name}
			Email: ${email}
			Phone: ${phone}
			Date: ${date}
			Room Type: ${roomType}
			Adults: ${adults}
			Nights: ${nights}
		`;

		try {
			await sendEmail('New Booking Request', message);
			return { success: true };
		} catch (error) {
			console.error('Email send error:', error);
			return fail(500, { error: 'Failed to send email' });
		}
	}
};