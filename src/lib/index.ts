export function calculatePrice(adults: any, nights: any) {
	adults = parseInt(adults);
	nights = parseInt(nights);
	if (isNaN(adults) || isNaN(nights)) {
		return 0;
	}
	return adults * nights * 200_000;
}
