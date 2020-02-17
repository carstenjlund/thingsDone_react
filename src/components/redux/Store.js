import { createStore } from "redux";

import { thingsReducer } from './thingsReducer.js'

export const store = createStore(
    thingsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)