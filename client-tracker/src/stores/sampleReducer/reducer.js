import * as Types from './constant';

const initialState = {
    managers: [],
};

const reducerForm = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case Types.FETCH_MANAGERS:
            return {
                ...state,
                managers: payload
            };
        default:
            return state;
    }
};

export default reducerForm;