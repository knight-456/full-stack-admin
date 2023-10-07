import { appThemeModeEnum } from "./appTheme.const";

export const APP_THEME_MODE_INITIAL_STATE = {
    appThemeMode: {
        isLoading: false,
        mode: appThemeModeEnum.DARK_MODE.value,
        message: null
    },
};