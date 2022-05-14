type PartyCompositions = {
    adults: number;
    childAges: any;
    infants: number;
};

export type HolidaysRequestType = {
    bookingType: string;
    location: string;
    departureDate: string;
    duration: string;
    partyCompositions: PartyCompositions[]

};

