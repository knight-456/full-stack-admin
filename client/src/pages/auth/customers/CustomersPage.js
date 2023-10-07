import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useGetCustomersQuery } from 'apiInstance/apiInstance';

import PageHeader from 'components/pageHeader/PageHeader';

import { tableColumns } from './data';

const CustomersPage = () => {
    const { data, isLoading } = useGetCustomersQuery()

    const theme = useTheme()

    return (
        <Box m={"1.5rem 2.5rem"}>
            <PageHeader title={"Customers"} subtitle={"See your list of customers."} />
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
                    columns={tableColumns}
                />
            </Box>
        </Box>
    )
}

export default CustomersPage;