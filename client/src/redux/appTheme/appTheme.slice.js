import { createSlice } from "@reduxjs/toolkit";

import { APP_THEME_MODE_INITIAL_STATE } from "./appTheme.initialState";

const appThemeMode = createSlice({
    name: "appThemeMode",
    initialState: APP_THEME_MODE_INITIAL_STATE,
    reducers: {
        setAppThemeModeLoading: (state, { payload }) => {
            state.appThemeMode.isLoading = payload
        },
        setAppThemeMode: (state, { payload }) => {
            state.appThemeMode.mode = payload
        },
        setAppThemeModeMessage: (state, { payload }) => {
            state.appThemeMode.message = payload
            state.appThemeMode.data = APP_THEME_MODE_INITIAL_STATE.appThemeMode.mode
        },
        resetAppThemeMode: (state) => {
            state.appThemeMode = APP_THEME_MODE_INITIAL_STATE.appThemeMode
        },
    }
})

export const {
    setAppThemeModeLoading,
    setAppThemeMode,
    setAppThemeModeMessage,
    resetAppThemeMode
} = appThemeMode.actions

export default appThemeMode.reducer;