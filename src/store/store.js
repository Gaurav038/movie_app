import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice.js";

export const Store = configureStore({
    reducer: {
        home: homeSlice,
    },
});