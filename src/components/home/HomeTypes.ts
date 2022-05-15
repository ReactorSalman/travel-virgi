type PartyCompositions = {
	adults: number;
	childAges: [];
	infants: number;
};

export type HolidaysRequestType = {
	bookingType: string;
	location: string;
	departureDate: string;
	duration: string;
	partyCompositions: PartyCompositions[]

};

