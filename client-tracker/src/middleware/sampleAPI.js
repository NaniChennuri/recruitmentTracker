import apiRequest from "../utilities/services";
import { API_ENDPOINTS } from '../utilities/url';

export const fetchHiringManagers = (payload) => async (dispatch) => {
    try {
        await apiRequest({
            method: "GET",
            url: API_ENDPOINTS.FETCH_HIRING_MANAGER, 
        });
    } catch (err) {
        console.log("Error", err);
    }
};