import { createSlice } from "@reduxjs/toolkit";

import { USER_INITIAL_STATE } from "redux/user/user.initialState";

const user = createSlice({
    name: "user",
    initialState: USER_INITIAL_STATE,
    reducers: {
        setUserDetailLoading: (state, { payload }) => {
            state.userDetail.isLoading = payload
        },
        setUserDetailData: (state, { payload }) => {
            state.userDetail.data = payload
            state.userDetail.message = USER_INITIAL_STATE.userDetail.message
        },
        setUserDetailMessage: (state, { payload }) => {
            state.userDetail.message = payload
            state.userDetail.data = USER_INITIAL_STATE.userDetail.data
        },
        resetUserDetail: (state) => {
            state.userDetail = USER_INITIAL_STATE.userDetail
        },
    }
})

export const {
    setUserDetailLoading,
    setUserDetailData,
    setUserDetailMessage,
    resetUserDetail
} = user.actions;

export default user.reducer;