import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import PageHeader from "components/pageHeader/PageHeader";
import DataGridCustomColumnMenu  from "components/dataGrid/DataGridCustomColumnMenu";

import { adminTableColumns } from "./data";

import { useGetAdminsQuery } from "apiInstance/apiInstance";

const AdminsPage = () => {

    const theme = useTheme()

    const { data, isLoading } = useGetAdminsQuery()

    return (
        <Box m={"1.5rem 2.5rem"}>
            <PageHeader
                title={"ADMINS"}
                subtitle={"Managing admins and list of admins."}
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
                    rows={data || []}
                    columns={adminTableColumns}
                    slots={{
                        ColumnMenu: DataGridCustomColumnMenu
                    }}
                />
            </Box>
        </Box>
    )
}

export default AdminsPage