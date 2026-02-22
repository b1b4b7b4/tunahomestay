export function calculatePrice(adults: any, nights: any) {
	adults = parseInt(adults);
	nights = parseInt(nights);
	if (isNaN(adults) || isNaN(nights)) {
		return 0;
	}
	return adults * nights * 200_000;
}

export const differetTypes = [
	{
		title: "All",
		href: "/near",
	},
	{
		title: "05 min",
		href: "/near/5m",
	},
	{
		title: "10 min",
		href: "/near/10m",
	},
	{
		title: "15 min",
		href: "/near/15m",
	},
	{
		title: "20 min",
		href: "/near/20m",
	},
	{
		title: "30 min",
		href: "/near/30m",
	},
];
