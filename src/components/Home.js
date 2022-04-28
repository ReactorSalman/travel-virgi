import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import SearchButton from './SearchButton';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';
import './Home.css';

function Home(){
    const [locationValue, setLocationValue] = useState('');
    const [boardingValue, setBoardingValue] = useState('');
    const [adultsValue, setAdultsValue] = useState('');
    const [infantsValue, setInfantsValue] = useState('');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [holidaysData, setHolidaysData] = useState([]);
    const [error, setError] = useState('');

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

    const handleSearch = async () => {
        try{
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
    
        const response = await axios.post(url, payload, {headers: headers});
        let responseData;
        if(response && response.status === "200"){
            responseData = setHolidaysData(response);
        }else{
            responseData = setError('No data found');
        }
        return responseData;
    }catch(err){
        console.log(err.message);
        }
    };

    return (
    <div className="Select-container">
        <h2>Search</h2>
        <Dropdown title={"Boarding Type"} onChange={handleBoardingChange} allOption={boardingOptions}/>
        <Dropdown title={"Location"} onChange={handleLocationChange} allOption={locationOptions}/>
        <Dropdown title={"Adults"} onChange={handleAdultsChange} allOption={adultsOptions}/>
        <Dropdown title={"Infants"} onChange={handleInfantsChange} allOption={infantsOptions}/>
        <h4>Checkin date</h4>
        <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)}/>
        
        <SearchButton title={"Search"} onClick={handleSearch}/>
    </div>
)}

export default Home;