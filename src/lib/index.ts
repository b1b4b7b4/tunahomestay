export function calculatePrice(adults: any, nights: any, pricePerNight: number = 200_000) {
	adults = parseInt(adults);
	nights = parseInt(nights);
	if (isNaN(adults) || isNaN(nights)) {
		return 0;
	}
	return adults * nights * pricePerNight;
}
