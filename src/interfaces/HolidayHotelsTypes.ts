type ResultCarousel = {
    url: string;
};

type Images = {
    RESULTS_CAROUSEL: ResultCarousel
};

type Content = {
    name: string;
    vRating: string;
    hotelDescription: string;
    images: Images;
    hotelFacilities: string[];
    starRating: string | number;
};

export type Hotel = {
    id: string;
    name: string;
    content: Content;
};

type TripAdvisor = {
    numReviews: number;
    ratingImageUrl: string;
};

export type HolidayHotelsType = {
    totalPrice: number;
    pricePerPerson: number;
    hotel: Hotel;
    tripAdvisor: TripAdvisor;
};

export interface Hotels {
    hotels: HolidayHotelsType;
}

// {
//     "totalPrice": 3054.3,
//     "pricePerPerson": 3054.3,
//     "depositPerPerson": 3054.3,
//     "webDiscount": 0,
//     "deposit": 3054.3,
//     "hotel": {
//         "id": "HSMNYCMQ",
//         "name": "Marriott Marquis New York",
//         "boardBasis": "Room Only",
//         "content": {
//             "name": "Marriott Marquis New York",
//             "virginView": "Bright lights, the city that never sleeps, and the most iconic skyline in the world. When you stay at the Marriott Marquis, you&#x2019;re just steps away from it all. With New York&#x2019;s only revolving restaurant, you can sip on a cocktail and watch the world go by below. Grab some food on the go from Starbucks&#xae; before heading out into the city. And when you need to get some down time from the urban jungle, head to your room or family suite for some rest and relaxation.",
//             "telephoneBookableOnly": false,
//             "vRating": "4+",
//             "hotelDescription": "Bright lights, the city that never sleeps, and the most iconic skyline in the world. When you stay at the Marriott Marquis, you&#x2019;re just steps away from it all.",
//             "atAGlance": [
//                 "In New York's Times Square area",
//                 "NYC's only revolving restaurant and bar",
//                 "24-hour fitness centre",
//                 "Family rooms and suites"
//             ],
//             "location": {
//                 "lat": 40.758595,
//                 "lon": -73.985825
//             },
//             "parentLocation": "Midtown, New York",
//             "images": [
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-1-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-1-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-2-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-2-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-3-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-3-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-4-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-4-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-5-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-5-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-6-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-6-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-7-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-7-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-8-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-8-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-9-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-9-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-10-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-10-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-11-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-11-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-12-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-12-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-13-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-13-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-14-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-14-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-15-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-15-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-16-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-16-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-17-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-17-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-18-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-18-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-19-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-19-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 },
//                 {
//                     "RESULTS_CAROUSEL": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-20-results_carousel.jpg?version=6"
//                     },
//                     "MOBILE_MAIN": {
//                         "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1241536/1241536-20-mobile_main.jpg?version=6"
//                     },
//                     "IMAGE_DESCRIPTION": ""
//                 }
//             ],
//             "keyFeatures": [
//                 {
//                     "description": "Restaurant",
//                     "name": "restaurant"
//                 },
//                 {
//                     "description": "Bar",
//                     "name": "bar"
//                 },
//                 {
//                     "description": "Fitness Centre/Gym",
//                     "name": "fitness-centre-gym"
//                 },
//                 {
//                     "description": "Room Service",
//                     "name": "room-service"
//                 },
//                 {
//                     "description": "Close to City Centre",
//                     "name": "close-to-city-centre"
//                 },
//                 {
//                     "description": "Valet parking",
//                     "name": "valet-parking"
//                 }
//             ],
//             "urlName": "marriott-marquis-new-york",
//             "url": "/usa/new-york/midtown/marriott-marquis-new-york",
//             "parentUrlName": "midtown",
//             "holidayType": [
//                 "City Break"
//             ],
//             "boardBasis": [],
//             "hotelLocation": [
//                 "Close to City Centre"
//             ],
//             "accommodationType": [
//                 "Family Room or Suite"
//             ],
//             "hotelFacilities": [
//                 "Restaurant",
//                 "Bar",
//                 "Room Service",
//                 "Valet parking",
//                 "Fitness Centre/Gym"
//             ],
//             "familyKids": [],
//             "activities": [],
//             "features": [],
//             "starRating": "4",
//             "resortFees": false,
//             "promoSticker": {
//                 "id": "new",
//                 "value": "New"
//             },
//             "salesMessages": [],
//             "propertyType": "Hotel",
//             "hotelEdits": []
//         },
//         "tripAdvisor": {
//             "numReviews": 13253,
//             "ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11619-5.svg"
//         }
//     },
//     "locationWidened": false,
//     "flyingClubMiles": 6109,
//     "virginPoints": 6109,
//     "tierPoints": 120,
//     "departureDate": "2022-05-16",
//     "selectedDate": "2022-05-16"
// }