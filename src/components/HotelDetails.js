import React, {useState} from 'react';
import './HotelDetails.css';

function HotelDetails(props){

    const [starArray, setStarArray] = useState([
        {label: "1 star", value: "1", isChecked: false, name:"star1"},
        {label: "2 stars", value: "2", isChecked: false, name:"star2"}, 
        {label: "3 stars", value: "3", isChecked: false, name:"star3"}, 
        {label: "4 stars", value: "4", isChecked: false, name:"star4"},
        {label: "5 stars", value: "5", isChecked: false, name:"star5"},
    ]);

    const [pricePerPersonArray, setPricePerPersonArray] = useState([
        {label: "Less than $300", value: "1", isChecked: false, name:"price1", min:0, max:300},
        {label: "$300 to $600", value: "2", isChecked: false, name:"price2", min:300, max:600}, 
        {label: "$600 to $900", value: "3", isChecked: false, name:"price3", min:600, max:900}, 
        {label: "Greater than $900", value: "4", isChecked: false, name:"price4", min:900, max: 100000},
    ]);

    const [hotelFacilities, setHotelFacilities] = useState([
        {label: "Bar", value: "1", isChecked: false, name:"facility1"},
        {label: "Restaurant", value: "2", isChecked: false, name:"facility2"}, 
        {label: "Free parking", value: "3", isChecked: false, name:"facility3"}, 
        {label: "Swimming pool", value: "4", isChecked: false, name:"facility4"},
        {label: "Safety Deposit Box", value: "5", isChecked: false, name:"facility5"},
        {label: "Fitness Centre/Gym", value: "6", isChecked: false, name:"facility6"},
        {label: "Laundry Service", value: "7", isChecked: false, name:"facility7"}, 
        {label: "Games Room", value: "8", isChecked: false, name:"facility8"}, 
        {label: "Internet Access", value: "9", isChecked: false, name:"facility9"},
        {label: "Whirlpool", value: "10", isChecked: false, name:"facility10"},
    ]);

    const [filterHotelDetails, setFilterHotelDetails] = useState([]);
    
    /** To get data via local storage*/ 
    // const _hotelsData = localStorage.getItem("holidayData");
    // const _hotelHolidaysDetails = JSON.parse(_hotelsData)[0].data.holidays;

    const _hotelHolidaysDetails = props && props.hotelDetailsData[0] && props.hotelDetailsData[0].data &&
                                    props.hotelDetailsData[0].data.holidays;


    const handleStarChange = (e) => {
        let newStarArray = [];
        newStarArray = starArray.map((star) => {
            if(star.name == e.target.id){
                return {
                    ...star,
                    isChecked: !star.isChecked
                }
            }else {
                return star;
            }
        });
        setStarArray(newStarArray);
        filterHotelsByRatings(newStarArray);
    }


    const filterHotelsByRatings = (newStarArray) => {
        let checkedStarArray = newStarArray.filter((star) => {
            return star.isChecked === true
        });

        let hotelDetails;

        if(checkedStarArray){
            let selectedStars = checkedStarArray.map(el => el = Number(el.value));
            let selectedHotels = selectedStars.map((st) => _hotelHolidaysDetails.filter((hotel) => hotel.hotel.content.starRating == st));
            let hotelDetailsFlat = selectedHotels.flat(); 
            setFilterHotelDetails(hotelDetailsFlat);
            console.log("hotelDetails",hotelDetailsFlat);
        }
    }

    const handlePricePerPersonChange = (e) => {
        let newPricePersonArray = [];
        newPricePersonArray = pricePerPersonArray.map((price) => {
            if(price.name == e.target.id){
                return {
                    ...price,
                    isChecked: !price.isChecked
                }
            }else {
                return price;
            }
        });
        setPricePerPersonArray(newPricePersonArray);
        filterPricePerPerson(newPricePersonArray);
    }

    const filterPricePerPerson = (newPricePersonArray) => {
        let pricePerPerson = newPricePersonArray.filter((price) => {
            return price.isChecked === true
        });
        console.log("pricePerPerson",pricePerPerson);
        let min = Math.min(...pricePerPerson.map((pp) => pp.min));
        let max = Math.max(...pricePerPerson.map((pp) => pp.max));
        let filterPricePerCategory = _hotelHolidaysDetails.filter(price => price.pricePerPerson > min && price.pricePerPerson < max);
        setFilterHotelDetails(filterPricePerCategory);
        console.log("filterPricePerCategory", filterPricePerCategory);
    }

    const handleFacilityChange = (e) => {
        let newFacilityArray = [];
        newFacilityArray = hotelFacilities.map((facility) => {
            if(facility.name == e.target.id){
                return {
                    ...facility,
                    isChecked: !facility.isChecked
                }
            }else {
                return facility;
            }
        });
        setHotelFacilities(newFacilityArray);
    }

    return(
        <section id="page">
            <span className="filter-container">
                <div className="filter-container-bg">
                    <h2 className="filter-header">Filter by:</h2>
                    <div>
                        <h4 className="ratings-header">Star rating</h4>
                        {starArray.map((option) => (
                        <label className="container" key={`star${option.value}`}>{option.label}
                            <input
                                type="checkbox" 
                                id={`star${option.value}`}
                                checked={Boolean(option.isChecked)} 
                                onChange={(e) => {handleStarChange(e)}}
                            />
                        <span className="checkmark"></span>
                        </label>
                        ))}
                    </div>

                    <div>
                    <h4>Price per person</h4>
                    { pricePerPersonArray && pricePerPersonArray.map((option) => (
                        <label className="container" key={`price${option.value}`}>{option.label}
                            <input
                                type="checkbox" 
                                id={`price${option.value}`}
                                checked={Boolean(option.isChecked)} 
                                onChange={(e) => {handlePricePerPersonChange(e)}}
                            />
                        <span className="checkmark"></span>
                        </label>
                        ))}
                    </div>

                    <div>
                    <h4>Hotel facilities</h4>
                    {hotelFacilities && hotelFacilities.map((option) => (
                        <label className="container" key={`facility${option.value}`}>{option.label}
                            <input
                                type="checkbox" 
                                id={`facility${option.value}`}
                                checked={Boolean(option.isChecked)} 
                                onChange={(e) => {handleFacilityChange(e)}}
                            />
                        <span className="checkmark"></span>
                        </label>
                        ))}
                    </div>
                </div>
            </span>
            <main>
                {filterHotelDetails.length >= 1 
                ? (<div> {filterHotelDetails.map((hotelData, id) => (
                    <div id="hotel-details-card" key={id}>
                        <div>
                            <div className="hotel-image">
                                <img src="//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/748545/748545-1-results_carousel.jpg?version=26" 
                                        alt="hotel" width="285" height="260"/>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div>
                            <div className="hotel-name">{hotelData && hotelData.hotel && hotelData.hotel.name}</div>
                            <div className="hotel-descprition">{hotelData.hotel.content.hotelDescription}</div>
                        </div>
                        <div>
                            <div>
                            {hotelData && hotelData.hotel && hotelData.hotel.tripAdvisor &&
                            <img src={hotelData.hotel.tripAdvisor.ratingImageUrl} alt="ratings"/>}
                            </div>
                            <div>{hotelData && hotelData.hotel && hotelData.hotel.tripAdvisor &&
                                    hotelData.hotel.tripAdvisor.numReviews} reviews</div>
                            {/* <div>{`${hotelData.hotel.content.vRating} star ratings`}</div> */}
                            <div className="price-per-person">Price/Person: $ {hotelData.pricePerPerson}</div>
                        </div>
                    </div>
                ))}
                </div>) 
                : (
                    <div> 
                        {_hotelHolidaysDetails.length >= 1 && _hotelHolidaysDetails.map((hotelData, id) => (
                        <div id="hotel-details-card" key={id}>
                            <div>
                                <div className="hotel-image">
                                    <img src={hotelData.hotel.content.images[0].RESULTS_CAROUSEL.url} 
                                            alt="hotel" width="285" height="260"/>
                                </div>
                            </div>
                            <div>
                                <div className="hotel-name">
                                    {hotelData && hotelData.hotel && hotelData.hotel.name}
                                </div>
                                <div className="hotel-descprition">{hotelData.hotel.content.hotelDescription}</div>
                            </div>
                            <div className="hotel-review-price-details">
                                <div>
                                {hotelData && hotelData.hotel && hotelData.hotel.tripAdvisor &&
                                <img src={hotelData.hotel.tripAdvisor.ratingImageUrl} alt="ratings"/>}
                                </div>
                                <div>
                                    {hotelData && hotelData.hotel && hotelData.hotel.tripAdvisor &&
                                    hotelData.hotel.tripAdvisor.numReviews} reviews
                                </div>
                                {/* <div>{`${hotelData.hotel.content.vRating} star ratings`}</div> */}
                                <div>
                                    Price/Person: $ {hotelData && hotelData.pricePerPerson}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    )}
                </main>
            {/* <footer>Footer</footer> */}
        </section>
    )
}

export default HotelDetails;