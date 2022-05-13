import React, {useState, useEffect} from 'react';
import './HotelDetails.css';
import {ratings, pricePerPerson, facilities} from "../../helpers";

function HotelDetails({hotels}){

    const [selectedStars, setSelectedStars] = useState([]);
    const [selectedPricePerPerson, setSelectedPricePerPerson] = useState([]);
    const [selectedFacilities, setSelectedFacilities] = useState([]);


    const checkUnCheck = (prevSelections, currentSelection) => {
        if(prevSelections.includes(currentSelection)) {
            return prevSelections.filter(selection => selection !== currentSelection)
        } else {
            return [...prevSelections, currentSelection]
        }
    };
    
    const filterBy = (data, {type, value}) => {
        if(!value.length) return data;
        const filtered =  data.filter((item) => {
            if(type === "starRating"){
                return value.includes(item.hotel.content.starRating);
            }
            if(type === "pricePerPerson"){
                const minMaxes = value.map(v => v.split('-'));
                return minMaxes.find(([min, max]) => item.pricePerPerson > min && item.pricePerPerson < max)
            }
            if(type === "hotelFacilities"){
                const availableFacilities =  item.hotel.content.hotelFacilities.filter((facility) => value.includes(facility));
                return availableFacilities.length ===  value.length
            }
        })
        return filtered;
    };

    const [filteredHotelDetails, setFilteredHotelDetails] = useState([]);

    useEffect(() => {
        const filterByStar = filterBy(hotels, {type: 'starRating', value: selectedStars});
        const filterByStarPrice = filterBy(filterByStar, {type: 'pricePerPerson', value: selectedPricePerPerson});
        const filterByStarPriceFacility = filterBy(filterByStarPrice, {type: 'hotelFacilities', value: selectedFacilities});
        setFilteredHotelDetails([...filterByStarPriceFacility]);
    }, [selectedStars, selectedPricePerPerson, selectedFacilities]);

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
                                id={option.value}
                                checked={selectedStars.includes(option.value)} 
                                onChange={(e) => {setSelectedStars(prev => checkUnCheck(prev, e.target.id))}}
                            />
                        <span className="checkmark"></span>
                        </label>
                        ))}
                    </div>

                    <div>
                    <h4>Price per person</h4>
                    {pricePerPerson.map((option) => (
                        <label className="container" key={`price${option.value}`}>{option.label}
                            <input
                                type="checkbox" 
                                id={`${option.min}-${option.max}`}
                                checked={selectedPricePerPerson.includes(`${option.min}-${option.max}`)}
                                onChange={(e) => {setSelectedPricePerPerson(prev => checkUnCheck(prev, e.target.id))}}
                            />
                        <span className="checkmark"></span>
                        </label>
                        ))}
                    </div>

                    <div>
                    <h4>Hotel facilities</h4>
                    {facilities.map((option) => (
                        <label className="container" key={`facility${option.value}`}>{option.label}
                            <input
                                type="checkbox" 
                                id={option.label}
                                checked={selectedFacilities.includes(option.label)}
                                onChange={(e) => {setSelectedFacilities(prev => checkUnCheck(prev, e.target.id))}}
                            />
                        <span className="checkmark"></span>
                        </label>
                        ))}
                    </div>
                </div>
            </span>
            <main>
			{filteredHotelDetails.length > 0 ? 
				(<div> {filteredHotelDetails.map((hotelData, id) => (
                    <div id="hotel-details-card" key={id}>
                        <div>
                            <div className="hotel-image">
                                {hotelData && hotelData.hotel && 
                                    hotelData.hotel.content && hotelData.hotel.content.images[0] &&
                                    hotelData.hotel.content.images[0].RESULTS_CAROUSEL &&
                                <img src={hotelData.hotel.content.images[0].RESULTS_CAROUSEL.url} 
                                    alt="hotel" width="285" height="260"/>}
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
                            <div>{`${hotelData.hotel.content.vRating} star ratings`}</div>
                            <div className="price-per-person">Price/Person: $ {hotelData.pricePerPerson}</div>
                        </div>
                    </div>
                ))}
                </div>):(
					<div className="hotel-not-found">No hotels found!</div>
				)}
                </main>
        </section>
    )
}

export default HotelDetails;