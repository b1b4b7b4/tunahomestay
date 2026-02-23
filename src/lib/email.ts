import { env } from '$env/dynamic/private';
import { createTransport } from 'nodemailer';

export async function sendEmail(subject: string, text: string, html?: string) {
	const to = env.EMAIL_LIST?.split(',').map(email => email.trim()) || [];
	console.log('Sending email:', { to, subject, text, html });


	const transporter = createTransport({
		host: env.SMTP_HOST,
		port: Number(env.SMTP_PORT),
		secure: false,
		auth: {
			user: env.SMTP_USER,
			pass: env.SMTP_PASS,
		},
	});

	await transporter.sendMail({
		from: env.FROM_EMAIL,
		to: to.join(','),
		subject,
		text,
		html,
	});

	return { success: true };
}
