type PartyCompositions = {
    adults: number;
    childAges: any;
    infants: number;
}

export type HolidaysRequestPayload = {
    bookingType: string;
    location: string;
    departureDate: string;
    partyCompositions: PartyCompositions[]

}

export type AxiosRequestHeaders = Record<string, string | number | boolean>;