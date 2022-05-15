import axios from "axios";
import { HolidaysRequestType } from "../interfaces/HomeTypes";

export const getHolidays = (payload: HolidaysRequestType) => {
	const url = "/cjs-search-api/search";
	let response = axios.post(url, payload, {
		headers: {
			'Content-Type': 'application/json',
		}
	});
	return response;
}