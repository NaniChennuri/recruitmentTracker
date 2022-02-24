import * as Types from './constant';

const initialState = {
    managers: [],
    skills: [],
    isLoading: false,
    reviewData: [],
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
        case Types.POST_SKILLS:
            return {
                ...state,
                isLoading: true
            };
        case Types.POST_SKILLS_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case Types.REVIEW_SKILLS:
            return {
                ...state,
                reviewData: payload
            };
        default:
            return state;
    }
};

export default reducerForm;