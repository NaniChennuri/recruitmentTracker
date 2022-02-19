import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export default function rootStore(initialState, history) {
    const middleware = [thunk];

    const store = createStore(
        rootReducer(history),
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );

    return store;
}
