import axios from "axios";
import querystring from "querystring";
import * as URL from './url';

export const instance = axios.create({
    baseURL: URL.baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: (p) => {
        const params = {...p};
        return querystring.stringify(params, "&", "=", { arrayFormat: "repeat" });
    }
});

const apiRequest = (options, skip = false) => {
    options.headers = {
        ...options.headers,
    }

    const onSuccess = (response) => {
        return response
    };

    const onError = (error) => {
        if(error.response) {
            if(error.response.status === 401) {
                return {};
            }
        } else {
            console.log("Error Message:", error.message);
        }
        return Promise.reject(error.response || error.message);
    };

    instance.defaults.timeout = 980000;

    return instance({...options})
        .then(onSuccess)
        .catch(onError);
};

export default apiRequest;