import * as Types from './constant';

const initialState = {
    items: [],
};

const reducerForm = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case Types.EXAMPLE_CONSTANT:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default reducerForm;