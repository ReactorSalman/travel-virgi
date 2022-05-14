import React, { useEffect, useState } from 'react';
import Dropdown from '../common/Dropdown';
import Button from '../common/Button';
import InputField from '../common/InputField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './Home.css';
import { locationOptions, adultsOptions, infantsOptions } from '../../helpers';
import ErrorContainer from '../common/ErrorContainer';
import Title from '../common/Title';
import Header from '../common/Header';
import {getHolidays} from "../../services";
import { HolidaysRequestType } from "./HomeTypes";
const HotelDetails = React.lazy(() => import('../hotelview/HotelDetails'));


function Home() {
	let date = new Date();
	date.setDate(date.getDate() + 1);
	const [locationValue, setLocationValue] = useState('');
	const [bookingValue, setBookingValue] = useState('hotel');
	const [adultsValue, setAdultsValue] = useState('');
	const [infantsValue, setInfantsValue] = useState('');
	const [checkInDate, setCheckInDate] = useState(date);
	const [holidaysData, setHolidaysData] = useState<any>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect(() => {
		if (locationValue.length > 0 && adultsValue.length > 0 && infantsValue.length > 0) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		};
	}, [locationValue, adultsValue, infantsValue]);

	const handleSearch = () => {
		setLoading(true);
		const dateWrapper = moment.utc(checkInDate).format('DD-MM-YYYY');
		const adultsValueToNumber = Number(adultsValue);
		const infantValueToNumber = Number(infantsValue);
		const payload: HolidaysRequestType = {
			'bookingType': bookingValue,
			'location': locationValue,
			'departureDate': dateWrapper,
			'duration': '7',
			'partyCompositions': [
				{
					'adults': adultsValueToNumber,
					'childAges': [],
					'infants': infantValueToNumber
				}
			]
		};

		getHolidays(payload)
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
			<Header header='Travel Veergi' className='navbar navbar-expand-lg navbar-light px-3 header-container' />
			<div className='px-5'>
				<div className='home-select-container border rounded mt-3'>
					<div className='row mx-auto'>
						<div className='col-sm'>
							<Title title='Booking Type' className='form-label text-dark' />
							<InputField
								id='hotel_input_id'
								className='form-control form-control-sm mt-1'
								value={bookingValue}
								disabled={true}
							/>
						</div>
						<div className='col-sm'>
							<Title title='Location' className='form-label text-dark' />
							<span className='text-danger'>*</span>
							<Dropdown
								id='location_dropdown'
								className='dropdown-select mt-1'
								onChange={(e) => setLocationValue(e.target.value)}
								allOption={locationOptions}
							/>
						</div>
						<div className='col-sm'>
							<Title title='Adults' className='form-label text-dark' />
							<span className='text-danger'>*</span>
							<Dropdown
								id='adults_dropdown'
								className='dropdown-select mt-1'
								onChange={(e) => setAdultsValue(e.target.value)}
								allOption={adultsOptions}
							/>
						</div>
						<div className='col-sm'>
							<Title title='Infants' className='form-label text-dark' />
							<span className='text-danger'>*</span>
							<Dropdown
								id='infants_dropdown'
								className='dropdown-select mt-1'
								onChange={(e) => setInfantsValue(e.target.value)}
								allOption={infantsOptions}
							/>
						</div>
						<div className='col-sm'>
							<Title title='Checkin date' className='form-label text-dark' />
							<span className='text-danger'>*</span>
							<DatePicker
								className='form-control form-control-sm mt-1'
								selected={checkInDate}
								onChange={(date: Date) => setCheckInDate(date)}
								minDate={moment().toDate()}
								dateFormat="dd/MM/yyyy"
								popperPlacement='left'
							/>
						</div>
						<div className='col-sm'>
							<Button id='home_button' className="btn btn-outline-light" onClick={handleSearch} disabled={isDisabled} />
						</div>
					</div>
				</div>
			</div>
			{loading ? (
				<>
					<div className='home-loader'></div>
				</>
			) : (
				<div className=''>
					{holidaysData.length >= 1
						? (
							<HotelDetails hotels={holidaysData[0] || []} />
						)
						:
						<h4>{error && <ErrorContainer error={error} className='text-danger text-center' />}</h4>
					}
				</div>
			)}
		</div>
	)
}

export default Home;