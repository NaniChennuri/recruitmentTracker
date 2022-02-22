import * as Types from './constant';

const initialState = {
    managers: [],
    skills: [],
};

const reducerForm = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case Types.FETCH_MANAGERS:
            return {
                ...state,
                managers: payload
            };
        case Types.FETCH_SKILLS:
            return {
                ...state,
                skills: payload
            };
        default:
            return state;
    }
};

export default reducerForm;