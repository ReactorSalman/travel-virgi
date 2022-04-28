import React from 'react';
import './HotelDetails.css';

function HotelDetails(props){
    const _hotelsData = localStorage.getItem("holidayData");
    const _hotelHolidaysDetails = JSON.parse(_hotelsData)[0].data.holidays;
    const nam = _hotelHolidaysDetails.map((item) => {
        return item.hotel.name;
    });
    console.log(_hotelHolidaysDetails);
    return(
        <section id="page">
            <header>
                <div className="site-header">
                    Travel virgi
                    <span className="register">
                        <button>Register</button>
                    </span>
                    <span className="sign-in">
                        <button>Sign in</button>
                    </span>
                </div>
            </header>
            <span className="filter-container">
                <div className="filter-container-bg">
                    <h2 className="filter-header">Filter by</h2>
                    <div>
                        <h4 className="ratings-header">Star rating</h4>
                        <label class="container">1 star
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">2 stars
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">3 stars
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">4 stars
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <h4>Price per person</h4>
                    <div>
                        <label class="container">Less than $300
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">$300 to $600
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">$600 to $900
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Greater than $900
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <h4>Hotel facilities</h4>
                    <div>
                        <label class="container">Bar
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Restaurant
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Free parking
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Swimming pool
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Safety Deposit Box
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Fitness Centre/Gym
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        
                        <label class="container">Laundry Service
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Games Room
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Internet Access
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Whirlpool
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </span>
            <main>
                {_hotelHolidaysDetails.map(hotelData => (
                <div id="hotel-details-card">
                    <div>
                        <div className="hotel-image">
                            <img src="" 
                                    alt="hotel" width="285" height="260"/>
                        </div>
                    </div>
                    <div>
                        <div className="hotel-name">{hotelData.hotel.name}</div>
                        {/* <div className="hotel-descprition">{hotelData.hotel.content.hotelDescription}</div> */}
                        <div className="see-description">See description</div>
                    </div>
                    <div>
                        <div>
                        <img src={hotelData.hotel.tripAdvisor.ratingImageUrl} alt="ratings"/>
                        </div>
                        <div>{hotelData.hotel.tripAdvisor.numReviews} reviews</div>
                        <div className="price-per-person">Price/Person: $ {hotelData.pricePerPerson}</div>
                    </div>
                </div>))}
            </main>
            {/* <footer>Footer</footer> */}
        </section>
    )
}

export default HotelDetails;