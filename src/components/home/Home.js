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

    useEffect(() => {
        console.log(locationValue)
        console.log(adultsValue);
        console.log(infantsValue);
        if(locationValue.length > 0 && adultsValue.length > 0 && infantsValue.length > 0){
            setIsDisabled(false);
        }else{
            setIsDisabled(true);
        };
    }, [locationValue, adultsValue, infantsValue]);

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
                    onChange={(e) => setLocationValue(e.target.value)} 
                    allOption={locationOptions}
                    required={true}
                    />
                <div>{locationInputError && <ErrorContainer error={locationInputError}/>}</div>
                </div>
                    <Dropdown 
                    id="adults_dropdown"
                    title={"Adults"} 
                    onChange={(e) => setAdultsValue(e.target.value)} 
                    allOption={adultsOptions}
                    required={true}
                    />
                    <Dropdown 
                    id="infants_dropdown"
                    title={"Infants"} 
                    onChange={(e) => setInfantsValue(e.target.value)} 
                    allOption={infantsOptions}
                    required={true}
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