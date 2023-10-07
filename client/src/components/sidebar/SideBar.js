import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FlexBetween } from 'components/styledComponents';
import profileImage from "assets/profile.jpeg";

import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";

import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlineOutlined
} from "@mui/icons-material";
import { sidebarNavLinks } from './sidebar.data';

const SideBar = ({
    user,
    drawerWidth,
    isSideBarOpen,
    setIsSideBarOpen,
    isNonMobile
}) => {

    const navigate = useNavigate()
    const theme = useTheme()
    const { pathname } = useLocation()

    const [active, setActive] = useState("")

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

    return (
        <Box component={"nav"}>
            {isSideBarOpen && (
                <Drawer
                    open={isSideBarOpen}
                    onClose={() => setIsSideBarOpen(false)}
                    variant={'persistent'}
                    anchor={"left"}
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width={"100%"}>
                        <Box m={"1.5rem 2rem 2rem 3rem"}>
                            <FlexBetween
                                color={theme.palette.secondary.main}
                            >
                                <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                                    <Typography variant={"h4"} fontWeight={"bold"}>
                                        {"ECOMVISION"}
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {sidebarNavLinks?.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <>
                                            <Divider />
                                            <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                                {text}
                                            </Typography>
                                        </>
                                    )
                                }
                                const lcText = text.toLowerCase();

                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            sx={{
                                                backgroundColor: (active === lcText)
                                                    ? theme.palette.secondary[300]
                                                    : "transparent",
                                                color: (active === lcText)
                                                    ? theme.palette.primary[600]
                                                    : theme.palette.secondary[100]

                                            }}
                                            onClick={() => {
                                                navigate(`/${lcText}`)
                                                setActive(lcText);
                                            }}
                                        >
                                            <ListItemIcon sx={{
                                                ml: "2rem",
                                                gap: 1,
                                                alignItems: "center",
                                                color: (active === lcText)
                                                    ? theme.palette.primary[600]
                                                    : theme.palette.secondary[200]
                                            }}>
                                                {icon}
                                                <ListItemText primary={text} />
                                                {(active === lcText) && (
                                                    <ChevronRightOutlined sx={{ ml: "auto" }} />
                                                )}
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                    <Box width={"100%"} position={"absolute"} bottom={"2rem"}>
                        <Divider />
                        <FlexBetween textTransform={"none"} gap={"1rem"} m={"1.5rem 2rem 0 3rem"}>
                            <Box
                                component={"image"}
                                alt={"profile"}
                                src={profileImage}
                                height={"40px"}
                                width={"40px"}
                                borderRadius={"50%"}
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign={"left"}>
                                <Typography
                                    fontWeight={"bold"}
                                    fontSize={"0.9rem"}
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    fontSize={"0.8rem"}
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user.occupation}
                                </Typography>
                            </Box>
                            <SettingsOutlined
                                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                            />
                        </FlexBetween>
                    </Box>
                </Drawer>
            )}

        </Box>
    )
}

export default SideBar;