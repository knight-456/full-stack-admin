import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "apiInstance/apiInstance";

import rootReducers from "./rootReducers";

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefault) => getDefault().concat(api.middleware)
});
setupListeners(store.dispatch)

export default store;