import React, { useState } from 'react';
import Dropdown from './common/Dropdown';
import Button from './common/Button';
import Input from './common/Input';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';
import './Home.css';
import {locationOptions, boardingOptions, adultsOptions, infantsOptions} from "../constants";
const HotelDetails = React.lazy(() => import("./HotelDetails"));


function Home(){
    let date = new Date();
    date.setDate(date.getDate() + 1);
    const [locationValue, setLocationValue] = useState('');
    const [boardingValue, setBoardingValue] = useState('hotel');
    const [adultsValue, setAdultsValue] = useState('');
    const [infantsValue, setInfantsValue] = useState('');
    const [checkInDate, setCheckInDate] = useState(date);
    const [holidaysData, setHolidaysData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleLocationChange = (e) => {
        setLocationValue(e.target.value);
    }

    const handleAdultsChange = (e) => {
        setAdultsValue(e.target.value);
    }

    const handleInfantsChange = (e) => {
        setInfantsValue(e.target.value);
    }

    const handleSearch = () => {
        setLoading(true);
        const dateWrapper = moment.utc(checkInDate).format('DD-MM-YYYY');
        const adultsValueToNumber = Number(adultsValue);
        const infantValueToNumber = Number(infantsValue);
        const payload = {
            "bookingType": boardingValue,
            "location": locationValue,
            "departureDate": dateWrapper,
            "duration": "7",
            "partyCompositions": [
                {
                    "adults": adultsValueToNumber,
                    "childAges": [],
                    "infants": infantValueToNumber
                }
            ]
        }
        
        const url = "/cjs-search-api/search";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
    
        axios.post(url, payload, {headers: headers})
        .then((response) => {
            setLoading(false);
            const holidaysList = response['data']['holidays'];
            return setHolidaysData([holidaysList]);
        })
        .catch((err) => {
            setLoading(false);
            setError(err.message);
        });
    };

    return (
    <div>
        <div className="home-site-header-bg">
                <div className="home-site-header">
                    <strong>Travel veerji</strong>
                </div>
        </div>
        <div className="home-container">
            <div className="home-select-container">
                <div>
                    <Input 
                    id="hotel_input_id" 
                    value={boardingValue} 
                    title={"Boarding Type"} 
                    disabled="disabled"
                    />
                </div>
                <div>
                    <Dropdown 
                    className="home-location-width" 
                    title={"Location"} 
                    onChange={handleLocationChange} 
                    allOption={locationOptions}
                    />
                </div>
                    <Dropdown 
                    title={"Adults"} 
                    onChange={handleAdultsChange} 
                    allOption={adultsOptions}
                    />
                    <Dropdown 
                    title={"Infants"} 
                    onChange={handleInfantsChange} 
                    allOption={infantsOptions}
                    />
                <div>
                    <span><h3>Checkin date</h3></span>
                    <DatePicker 
                    className="home-datePicker" 
                    selected={checkInDate} 
                    onChange={(date) => setCheckInDate(date)}
                    minDate={moment().toDate()}
                    popperPlacement="left"
                    />
                </div>
                <div className="home-search-margin">
                    <Button title={"Search"} onClick={handleSearch}/>
                </div>
            </div>
        </div>
            {loading ? (
                <>
                <div className="home-loader"></div>
                </>
            ): (
                    <div>
                        {holidaysData.length >= 1
                            ? (
                                <HotelDetails hotels={holidaysData[0] || []} />
                            )
                            :
                            <>{error && <div className="home-error-message">{`${error}, Please fill all details to proceed!`}</div>}</>
                        }
                    </div>
            )}
    </div>
)}

export default Home;