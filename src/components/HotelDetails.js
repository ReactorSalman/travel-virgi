import React, {useState, useEffect} from 'react';
import './HotelDetails.css';
import ProgressBar from './ProgressBar';
import {ratings, pricePerPersonData, facilitiesData} from "../constants";

function HotelDetails(props){

    const [starArray, setStarArray] = useState([]);

    const [pricePerPersonArray, setPricePerPersonArray] = useState([]);

    const [hotelFacilities, setHotelFacilities] = useState([]);

    const [filterHotelDetails, setFilterHotelDetails] = useState([]);
    
    /** To get data via local storage*/ 
    // const _hotelsData = localStorage.getItem("holidayData");
    // const _hotelHolidaysDetails = JSON.parse(_hotelsData)[0].data.holidays;

    const _hotelHolidaysDetails = props && props.hotelDetailsData[0] && props.hotelDetailsData[0].data &&
                                    props.hotelDetailsData[0].data.holidays;
    
    console.log(_hotelHolidaysDetails);


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
        }
    }

    const filterBy = ({type, value}) => {
        let filterByType = _hotelHolidaysDetails.filter((item) => {
            if(type === "starRating"){
                return value.includes(item.hotel.content.starRating);
            }
            if(type === "pricePerPerson"){
                return value.includes(item.pricePerPerson);
            }
            if(type === "hotelFacilities"){
                return item.hotel.content.hotelFacilities.filter((item) => {
                    return value.includes(item);
                });
            }
        })
    }

    const [filteredArray, setFilteredArray] = useState([]);

    useEffect(() => {
        const filterByStar = filterBy({type: 'starRating', value: starArray});
        const filterByPrice = filterBy({type: 'pricePerPerson', value: pricePerPersonArray});
        const filterByFacility = filterBy({type: 'hotelFacilities', value: hotelFacilities});
        setFilteredArray([...filterByStar, ...filterByPrice, ...filterByFacility]);
    }, [starArray, pricePerPersonArray, hotelFacilities]);

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
        filterHotelDataViaFacility(newFacilityArray);
    }

    const filterHotelDataViaFacility = (newFacilityArray) => {
        let checkedFacilityArray = newFacilityArray.filter((facility) => {
            return facility.isChecked === true
        });

        let facilityDetails;
        console.log(checkedFacilityArray);
        if(checkedFacilityArray){
            let selectedFacility = checkedFacilityArray.filter(el => el = el.label);
            console.log(selectedFacility);
            // let selectedHotels = _hotelHolidaysDetails.filter((hotl) => hotl.hotel.content.hotelFacilities.int));
            // let hotelDetailsFacilityFlat = selectedHotels.flat(); 
            console.log();
            // setFilterHotelDetails(hotelDetailsFlat);
        }
    }

    return(
        <section id="page">
            <span className="filter-container">
                <div className="filter-container-bg">
                    <h2 className="filter-header">Filter by:</h2>
                    <div>
                        <h4 className="ratings-header">Star rating</h4>
                        {ratings.map((option) => (
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
                    {pricePerPersonData.map((option) => (
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
                    {hotelFacilities.map((option) => (
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
                            {hotelData ? 
                            <div className="hotel-image">
                            {hotelData && hotelData.hotel && 
                                hotelData.hotel.content && hotelData.hotel.content.images[0] &&
                                    hotelData.hotel.content.images[0].RESULTS_CAROUSEL &&
                                <img src={hotelData.hotel.content.images[0].RESULTS_CAROUSEL.url} 
                                    alt="hotel" width="285" height="260"/>}
                            </div> :
                            <div>
                                <ProgressBar />
                            </div>
                            }
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
                            {hotelData ? 
                            <div className="hotel-image">
                            {hotelData && hotelData.hotel && 
                                hotelData.hotel.content && hotelData.hotel.content.images[0] &&
                                    hotelData.hotel.content.images[0].RESULTS_CAROUSEL &&
                                <img src={hotelData.hotel.content.images[0].RESULTS_CAROUSEL.url} 
                                    alt="hotel" width="285" height="260"/>}
                            </div> :
                            <div>
                                <ProgressBar />
                            </div>
                            }
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