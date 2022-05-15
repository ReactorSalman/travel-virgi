import React, { useState, useEffect } from 'react';
import './HotelDetails.css';
import { ratings, pricePerPerson, facilities } from '../../helpers';
import Title from '../common/Title';
import ErrorContainer from '../common/ErrorContainer';
import { HolidayHotelsType, Hotels } from '../../interfaces/HotelDetailsTypes';
import { checkUnCheck, filterBy } from '../utils';

const HotelDetails: React.FC<Hotels> = ({ hotels }: Hotels) => {

	const [selectedStars, setSelectedStars] = useState<string[]>([]);
	const [selectedPricePerPerson, setSelectedPricePerPerson] = useState<string[]>([]);
	const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

	const [filteredHotelDetails, setFilteredHotelDetails] = useState<HolidayHotelsType[]>([]);

	useEffect(() => {
		const filterByStar = filterBy(hotels, { type: 'starRating', value: selectedStars });
		const filterByStarPrice = filterBy(filterByStar, { type: 'pricePerPerson', value: selectedPricePerPerson });
		const filterByStarPriceFacility = filterBy(filterByStarPrice, { type: 'hotelFacilities', value: selectedFacilities });
		setFilteredHotelDetails([...filterByStarPriceFacility]);
	}, [selectedStars, selectedPricePerPerson, selectedFacilities, hotels]);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-3 filter-container mt-3'>
					<div className='mt-2'>
						<h4><Title className='px-3' label='Filter by' /></h4>
						<div className='px-3'>
							<div className='mt-4'>
								<h6><Title className='' label='Star rating' /></h6>
								{ratings.map((option) => (
									<label className='checkbox-container' key={`star${option.value}`}>{option.label}
										<input
											type='checkbox'
											id={option.value}
											checked={selectedStars.includes(option.value)}
											onChange={(e) => { setSelectedStars((prev: string[]) => checkUnCheck(prev, e.target.id)) }}
										/>
										<span className='checkmark'></span>
									</label>
								))}
							</div>
						</div>

						<div className='px-3'>
							<div className='mt-4'>
								<h6><Title className='' label='Price per person' /></h6>
								{pricePerPerson.map((option) => (
									<label className='checkbox-container' key={`price${option.value}`}>{option.label}
										<input
											type='checkbox'
											id={`${option.min}-${option.max}`}
											checked={selectedPricePerPerson.includes(`${option.min}-${option.max}`)}
											onChange={(e) => { setSelectedPricePerPerson((prev: string[]) => checkUnCheck(prev, e.target.id)) }}
										/>
										<span className='checkmark'></span>
									</label>
								))}
							</div>
						</div>

						<div className='px-3'>
							<div className='mt-4'>
								<h6><Title className='' label='Hotel facilities' /></h6>
								{facilities.map((option) => (
									<label className='checkbox-container' key={`facility${option.value}`}>{option.label}
										<input
											type='checkbox'
											id={option.label}
											checked={selectedFacilities.includes(option.label)}
											onChange={(e) => { setSelectedFacilities((prev: string[]) => checkUnCheck(prev, e.target.id)) }}
										/>
										<span className='checkmark'></span>
									</label>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className='col-9'>
					<div className='mt-3 ml-1'>
						{filteredHotelDetails.length > 0 ?
							(<div> {filteredHotelDetails.map((hotelData: HolidayHotelsType, id: number) => (
								<div className='row px-2 mt-1 border rounded' id='' key={id}>
									<div className='col'>
										<div className='hotel-image'>
											{hotelData && hotelData.hotel &&
												hotelData.hotel.content && hotelData.hotel.content.images[0] &&
												hotelData.hotel.content.images[0].RESULTS_CAROUSEL &&
												<img src={hotelData.hotel.content.images[0].RESULTS_CAROUSEL.url}
													alt='hotel' width='285' height='260' />}
										</div>
									</div>
									<div className='col'>
										<Title
											className='hotel-name'
											label={hotelData && hotelData.hotel && hotelData.hotel.name}
										/>
										<div className='hotel-descprition'>{hotelData.hotel.content.hotelDescription}</div>
									</div>
									<div className='col'>
										<div className='px-4'>
											{hotelData && hotelData.hotel && hotelData.hotel.tripAdvisor &&
												<img
													src={hotelData.hotel.tripAdvisor.ratingImageUrl}
													alt='ratings'
												/>
											}
										</div>
										<div className='px-5'>
											<b>{hotelData && hotelData.hotel &&
												hotelData.hotel.tripAdvisor &&
												hotelData.hotel.tripAdvisor.numReviews} </b>
											<label>reviews</label>
										</div>
										{hotelData.hotel.content.starRating &&
											<div className='px-5'>
												<b>{hotelData.hotel.content.starRating} </b>
												<label>star ratings</label>
											</div>}
										<div className='price-align'>
											<b><label>Price/Person:</label></b> $
											{hotelData.pricePerPerson}
										</div>
									</div>
								</div>
							))}
							</div>) : (
								<h4><ErrorContainer label={"No hotels found!"} className='text-danger text-center' /></h4>
							)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HotelDetails;