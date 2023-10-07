import { useState } from "react";
import { useCallback } from "react";

import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, useTheme } from "@mui/material";

import profileImage from "assets/profile.jpeg";

import { FlexBetween } from "components/styledComponents";

import { useAppDispatcher, useAppState } from "hooks/useStore";
import { setAppThemeMode } from "redux/appTheme/appTheme.slice";
import { appThemeModeEnum } from "redux/appTheme/appTheme.const";

const NavBar = ({
    user,
    isSideBarOpen,
    setIsSideBarOpen
}) => {
    const { appThemeMode } = useAppState((state) => state.appTheme)

    const dispatcher = useAppDispatcher()
    const theme = useTheme()

    const [anchorEl, setAnchorEl] = useState(null)
    const isOpen = Boolean(anchorEl)

    const onHandleChangeAppTheme = useCallback(() => {
        if (appThemeMode?.mode === appThemeModeEnum.LIGHT_MODE.value) {
            dispatcher(setAppThemeMode(appThemeModeEnum.DARK_MODE.value))
        }
        if (appThemeMode?.mode === appThemeModeEnum.DARK_MODE.value) {
            dispatcher(setAppThemeMode(appThemeModeEnum.LIGHT_MODE.value))
        }
    }, [appThemeMode?.mode])

    const onHandleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget)
    }, [anchorEl, setAnchorEl])

    const onHandleClose = () => setAnchorEl(null)

    return (
        <AppBar sx={{
            position: "static",
            background: "none",
            boxShadow: "none"
        }}>
            <Toolbar sx={{
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                {/* lEFT SIDE */}
                <FlexBetween>
                    <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius={"9px"}
                        gap={"3rem"}
                        p={"0.1rem 1.5rem"}
                    >
                        <InputBase placeholder={"Search..."} />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>

                {/* RIGHT SIDE */}
                <FlexBetween
                    gap={"1.5rem"}
                >
                    <IconButton onClick={onHandleChangeAppTheme}>
                        {(theme.palette.mode === appThemeModeEnum.DARK_MODE.value) ? (
                            <DarkModeOutlined sx={{ fontSize: "25px" }} />
                        ) : (
                            <LightModeOutlined sx={{ fontSize: "25px" }} />
                        )}
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined sx={{ fontSize: "25px" }} />
                    </IconButton>

                    <FlexBetween flexDirection={"row"}>
                        <Button
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "1rem",
                                textTransform: "none"
                            }}
                            onClick={onHandleClick}
                        >
                            <Box
                                component={"image"}
                                alt={"profile"}
                                src={profileImage}
                                height={"32px"}
                                width={"32px"}
                                borderRadius={"50%"}
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign={"left"}>
                                <Typography
                                    fontWeight={"bold"}
                                    fontSize={"0.85rem"}
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    fontSize={"0.75rem"}
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user.occupation}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined sx={{ color: theme.palette.secondary[300], fontSize: "25px" }} />
                        </Button>
                        <Menu anchorEl={anchorEl} open={isOpen} onClose={onHandleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                            <MenuItem onClick={onHandleClose}>
                                {"Log Out"}
                            </MenuItem>
                        </Menu>
                    </FlexBetween>
                </FlexBetween>

                {/* RIGHT SIDE */}
            </Toolbar>

        </AppBar>
    )
}

export default NavBar