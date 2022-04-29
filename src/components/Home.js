import React, { useState } from 'react';
import Dropdown from './Dropdown';
import SearchButton from './SearchButton';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';
import Carousel from './Carousel';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import HotelDetails from "./HotelDetails";

function Home(){
    let date = new Date();
    date.setDate(date.getDate() + 1);
    const [locationValue, setLocationValue] = useState('');
    const [boardingValue, setBoardingValue] = useState('');
    const [adultsValue, setAdultsValue] = useState('');
    const [infantsValue, setInfantsValue] = useState('');
    const [checkInDate, setCheckInDate] = useState(date);
    const [holidaysData, setHolidaysData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLocationChange = (e) => {
        setLocationValue(e.target.value);
    }

    const handleBoardingChange = (e) => {
        setBoardingValue(e.target.value);
    }

    const handleAdultsChange = (e) => {
        setAdultsValue(e.target.value);
    }

    const handleInfantsChange = (e) => {
        setInfantsValue(e.target.value);
    }

    const locationOptions = [
        {label: "new-york", value: "new-york"},
        {label: "orlando", value: "orlando"}, 
        {label: "barbados", value: "barbados"}, 
        {label: "toronto", value: "toronto"},
    ];

    const boardingOptions = [{label: "hotel", value: "hotel"},];

    const adultsOptions = [
        {label: "1", value: "1"}, 
        {label: "2", value: "2"}, 
        {label: "3", value: "3"},
    ];

    const infantsOptions = [
        {label: "0", value: "0"}, 
        {label: "1", value: "1"}, 
        {label: "2", value: "2"},
    ];

    const yesterday = moment().subtract(1, 'day');
    const disablePastDate = current => {
        return current.isArray(yesterday);
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
        const url = "https://evening-ridge-73218.herokuapp.com/https://www.virginholidays.co.uk/cjs-search-api/search";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','*');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    
        axios.post(url, payload, {headers: headers})
        .then((response) => {
            setLoading(false);
            return setHolidaysData([response])
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
                    <Dropdown title={"Boarding Type"} onChange={handleBoardingChange} allOption={boardingOptions}/>
                </div>
                <div>
                    <Dropdown title={"Location"} onChange={handleLocationChange} allOption={locationOptions}/>
                </div>
                    <Dropdown title={"Adults"} onChange={handleAdultsChange} allOption={adultsOptions}/>
                    <Dropdown title={"Infants"} onChange={handleInfantsChange} allOption={infantsOptions}/>
                <div>
                    <span><h4>Checkin date</h4></span>
                    <DatePicker className="home-datePicker" 
                                selected={checkInDate} 
                                onChange={(date) => setCheckInDate(date)}
                                minDate={moment().toDate()}
                    />
                </div>
                <div className="home-search-margin">
                    <SearchButton title={"Search"} onClick={handleSearch}/>
                </div>
            </div>
        </div>
            {loading ? (
                <div className="home-loader"></div>
            ): (
                <div>
                    {holidaysData.length >= 1 
                    ? (
                        <HotelDetails hotelDetailsData={holidaysData} />
                        )
                    : 
                    <div className="home-error-message">{error}</div>
                    }
                </div>
            )}
    </div>
)}

export default Home;