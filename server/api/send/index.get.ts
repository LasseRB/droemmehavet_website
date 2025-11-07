import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	console.log(query);
	const email: string = query?.email?.toString() ?? "lassebrunt@gmail.com";
	const navn: string = query?.navn?.toString() ?? "lasse";
	try {
		const send = await resend.emails.send({
			from: "Drømmehavet <hej@droemmehavet.dk>",
			to: ["lassebrunt@gmail.com"],
			subject: `Velkommen til ${navn}!`,
			html: `<strong>Ny signup! Email: ${email}, Navn: ${navn}</strong>`,
		});
		if (send?.data?.id) {
			const mail = await resend.emails.get(send.data.id);
			console.log(mail);
		}
		return send;
	} catch (error) {
		return { error };
	}
});
