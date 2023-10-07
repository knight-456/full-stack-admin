import { combineReducers } from 'redux';

import { api } from 'apiInstance/apiInstance';

import appThemeSlice from './appTheme/appTheme.slice';
import userSlice from 'redux/user/user.slice';

const rootReducers = combineReducers({
    appTheme: appThemeSlice,
    user: userSlice,

    [api.reducerPath]: api.reducer,
})
export default rootReducers;