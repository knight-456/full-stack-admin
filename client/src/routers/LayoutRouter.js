import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box, useMediaQuery } from '@mui/material';

import NavBar from 'components/navbar/NavBar';
import SideBar from 'components/sidebar/SideBar';

import { userIdEnum } from 'redux/user/user.const';

import { useGetUserQuery } from 'apiInstance/apiInstance';

function LayoutRouter() {
  // const { userDetail } = useAppState((state) => state.user)

  const { data } = useGetUserQuery(userIdEnum)

  const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box width={"100%"} height={"100%"} sx={{ display: isNonMobile ? "flex" : "block" }}>
      <SideBar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth={"250px"}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box flexGrow={1} width={"100%"}>
        <NavBar
          user={data || {}}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default LayoutRouter;