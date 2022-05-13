import React, { useEffect, useState } from 'react';
import Dropdown from '../common/Dropdown';
import Button from '../common/Button';
import InputField from '../common/InputField';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';
import './Home.css';
import {locationOptions, adultsOptions, infantsOptions} from "../../helpers";
import ErrorContainer from '../common/ErrorContainer';
const HotelDetails = React.lazy(() => import("../hotelview/HotelDetails"));


const Home = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    const [locationValue, setLocationValue] = useState('');
    const [locationInputError, setLocationInputError] = useState('');
    const [boardingValue, setBoardingValue] = useState('hotel');
    const [adultsValue, setAdultsValue] = useState('');
    const [adultsInputError, setAdultsInputError] = useState('');
    const [infantsValue, setInfantsValue] = useState('');
    const [checkInDate, setCheckInDate] = useState(date);
    const [holidaysData, setHolidaysData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);


    // const handleChange = (e) => {
    //     if(e.target.id === "location_dropdown"){
    //         setLocationValue(e.target.value);
    //     }

    //     if(e.target.id === "adults_dropdown"){
    //         setAdultsValue(e.target.value);
    //     }

    //     if(e.target.id === "infants_dropdown"){
    //         setInfantsValue(e.target.value);
    //     }

    //     if(locationValue.length > 0 && adultsValue.length > 0 && infantsValue.length > 0){
    //         setIsDisabled(false);
    //     }else{
    //         setIsDisabled(true);
    //     }
    // }

    const handleLocationChange = (e) => {
        setLocationValue(e.target.value);
        if(e.target.value.length > 0){
            setIsDisabled(false);
            setLocationInputError('')
        }else{
            setIsDisabled(true);
            setLocationInputError('Please select location.')
        }
    }

    const handleAdultsChange = (e) => {
        setAdultsValue(e.target.value);
        if(e.target.value.length > 0){
            setIsDisabled(false);
            setAdultsInputError('')
        }else{
            setIsDisabled(true);
            setAdultsInputError('Please select Adults.')
        }
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
                    <InputField 
                    id="hotel_input_id" 
                    value={boardingValue} 
                    title={"Boarding Type"} 
                    disabled={true}
                    />
                </div>
                <div> 
                    <Dropdown
                    id="location_dropdown"  
                    title={"Location"} 
                    onChange={(e) => handleLocationChange(e)} 
                    allOption={locationOptions}
                    />
                <div>{locationInputError && <ErrorContainer error={locationInputError}/>}</div>
                </div>
                    <Dropdown 
                    id="adults_dropdown"
                    title={"Adults"} 
                    onChange={handleAdultsChange} 
                    allOption={adultsOptions}
                    />
                    <Dropdown 
                    id="infants_dropdown"
                    title={"Infants"} 
                    onChange={handleInfantsChange} 
                    allOption={infantsOptions}
                    />
                    <div>{adultsInputError && <ErrorContainer error={adultsInputError}/>}</div>
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
                    <Button id="home_button" title={"Search"} onClick={handleSearch} disabled={isDisabled}/>
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