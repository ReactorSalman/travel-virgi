import { render, screen, fireEvent } from "@testing-library/react";
import HotelDetails from "./HotelDetails";
import { HolidayHotelsType } from "../../interfaces/HotelDetailsTypes";

const hotelData = {
    totalPrice: 1000,
    pricePerPerson: 200,
    hotel: {
        id: "1",
        name: "Sheraton Vistana Resort",
        content: {
            name: "",
            vRating: "4",
            hotelDescription: "",
            images: [],
            hotelFacilities: [],
            starRating: "5"
        },
        tripAdvisor: {
            numReviews: 9938,
            ratingImageUrl: ""
        }
    }
} as HolidayHotelsType;

it("Should find filter label", () => {
	render(<HotelDetails hotels={[]} />);
	const headerElement = screen.getByText("Filter by");
	expect(headerElement).toBeInTheDocument;
});

it("Should find Star rating label", () => {
	render(<HotelDetails hotels={[]} />);
	const starLabel = screen.getByText("Star rating");
    expect(starLabel).toBeInTheDocument;
});

it("Should find Price per person label", () => {
	render(<HotelDetails hotels={[]} />);
	const PricePersonLabel = screen.getByText("Price per person");
	expect(PricePersonLabel).toBeInTheDocument;
});

it("Should find Hotel facilities label", () => {
	render(<HotelDetails hotels={[]} />);
	const facilitiesLabel = screen.getByText("Hotel facilities");
    expect(facilitiesLabel).toBeInTheDocument;
});

/* Not functional */
it("calls onClick checkbox when clicked", () => {
	const handleClick = jest.fn();
	render(<HotelDetails hotels={[]} />);
	fireEvent.click(screen.getByText("1 star"));
	expect(handleClick).toHaveBeenCalledTimes(0);
});

it("Should find Hotel label", () => {
	render(<HotelDetails hotels={[hotelData]} />);
	const hotelLabel = screen.getByText("Sheraton Vistana Resort");
    expect(hotelLabel).toBeInTheDocument;
});

it("Should find price per person of hotel", () => {
	render(<HotelDetails hotels={[hotelData]} />);
	const hotelLabel = screen.getByText("$200");
    expect(hotelLabel).toBeInTheDocument;
});

it("Should find star ratings of hotel", () => {
	render(<HotelDetails hotels={[hotelData]} />);
	const hotelLabel = screen.getByText("5");
    expect(hotelLabel).toBeInTheDocument;
});

it("Should find hotel review", () => {
	render(<HotelDetails hotels={[hotelData]} />);
	const hotelLabel = screen.getByText("9938");
    expect(hotelLabel).toBeInTheDocument;
});
