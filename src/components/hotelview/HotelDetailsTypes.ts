type ResultCarousel = {
	url: string;
};

type Images = {
	RESULTS_CAROUSEL: ResultCarousel;
};

type Content = {
	name: string;
	vRating: string;
	hotelDescription: string;
	images: Images[];
	hotelFacilities: string[];
	starRating: string;
};

type TripAdvisor = {
	numReviews: number;
	ratingImageUrl: string;
};

type Hotel = {
	id: string;
	name: string;
	content: Content;
	tripAdvisor: TripAdvisor;
};

export type HolidayHotelsType = {
	totalPrice: number;
	pricePerPerson: number;
	hotel: Hotel;
};

export type Hotels = {
	hotels: HolidayHotelsType[];
};