import axios, {AxiosRequestConfig} from "axios";
import { HolidaysRequestPayload } from "../components/home/HomeTypes";

export const getHolidays = ({ bookingType } : HolidaysRequestPayload) => {
    const url = "/cjs-search-api/search";

    const config: AxiosRequestConfig = {
        method: "POST",
        url: url,
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },
    }

    return axios.create(config);
}