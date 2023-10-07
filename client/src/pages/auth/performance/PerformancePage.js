import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import PageHeader from "components/pageHeader/PageHeader";
import DataGridCustomColumnMenu from "components/dataGrid/DataGridCustomColumnMenu";

import { performanceTableColumns } from "./data";

import { userIdEnum } from "redux/user/user.const";

import { useGetUserPerformanceQuery } from "apiInstance/apiInstance";

const PerformancePage = () => {

    const theme = useTheme()

    const { data, isLoading } = useGetUserPerformanceQuery(userIdEnum)

    return (
        <Box m={"1.5rem 2.5rem"}>
            <PageHeader
                title={"PERFORMANCE"}
                subtitle={"Track your Affiliate Sales Performance Here."}
            />
            <Box
                mt={"40px"}
                height={"75vh"}
                sx={{
                    '& .MuiDataGrid-root': {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme.palette.primary.light,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.secondary[100],
                        borderTop: "none"
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.secondary[100]} !important`
                    }
                }}
            >
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={(data && data.sales) || []}
                    columns={performanceTableColumns}
                    slots={{
                        ColumnMenu: DataGridCustomColumnMenu
                    }}
                />
            </Box>
        </Box>
    )
}

export default PerformancePage;