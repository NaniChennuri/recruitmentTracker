import apiRequest from "../utilities/services";
import { API_ENDPOINTS } from '../utilities/url';
import { getManagersAction } from '../stores/sampleReducer/action';

const onSuccessManagers = (managers, dispatch) => {
    let options = [];
    for(var manager of managers) {
        let managers = {};
        managers.id = manager.id;
        managers.label = manager.name;
        managers.email = manager.mail;
        managers.value = manager.name.replace(/ /g, "_");
        options.push(managers);
    }
    dispatch(getManagersAction(options));
}

export const fetchHiringManagers = (payload) => async (dispatch) => {
    try {
        const res = await apiRequest({
            method: "GET",
            url: API_ENDPOINTS.FETCH_HIRING_MANAGER, 
        });
        await onSuccessManagers(res.data.data, dispatch);
    } catch (err) {
        console.log("Error", err);
    }
};