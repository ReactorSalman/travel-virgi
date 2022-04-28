import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import SearchButton from './SearchButton';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

function Home(){
    const [optionValue, setOptionValue] = useState('');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [holidaysData, setHolidaysData] = useState([]);
    const [error, setError] = useState('');

    const handleOptionChange = (e) => {
        console.log(e.target.value);
        setOptionValue(e.target.value);
    }

    const handleSearch = async () => {
        try{
        const payload = {
            "bookingType": "hotel",
            "location": optionValue,
            "departureDate": checkInDate,
            "duration": "7",
            "partyCompositions": [
                {
                    "adults": 2,
                    "childAges": [],
                    "infants": 0
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
        console.log(err);
        }
    };

    return (
    <div>
        <h2>Search</h2>
        <Dropdown optionValue={optionValue} onChange={handleOptionChange} />
        <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)}/>
        <SearchButton title={"Search"} onClick={handleSearch}/>
    </div>
)}

export default Home;