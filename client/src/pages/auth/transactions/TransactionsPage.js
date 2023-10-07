import { useState } from "react";

import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import PageHeader from "components/pageHeader/PageHeader";
import DataGridCustomToolbar from "components/dataGridCustomToolbar/DataGridCustomToolbar";

import { useGetTransactionsQuery } from "apiInstance/apiInstance";

import { tableColumns } from "./transaction.data";


const TransactionsPage = () => {

    const theme = useTheme()

    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(20)
    const [sort, setSort] = useState({})
    const [search, setSearch] = useState("")

    const [searchInput, setSearchInput] = useState("")

    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search
    })

    return (
        <Box m={"1.5rem 2.5rem"}>
            <PageHeader title={"TRANSACTIONS"} subtitle={"See your list of transactions."} />
            <Box
                mt={"40px"}
                height={"80vh"}
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
                    rows={(data && data.transactions) || []}
                    columns={tableColumns}
                    rowCount={(data && data.total) || 0}
                    pagination
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: pageSize,
                                page: page
                            }
                        }
                    }}
                    page={page}
                    pageSize={pageSize}
                    paginationMode="server"
                    sortingMode="server"
                    onPageChange={(newPage) => setPage(newPage)}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    onSortModelChange={(newSortModel) => setSort(...newSortModel)}
                    // components={{ Toolbar: DataGridCustomToolbar }}
                    slots={{ toolbar: DataGridCustomToolbar }}
                    // componentsProps={{
                    //     toolbar: { searchInput, setSearchInput, setSearch }
                    // }}
                    slotProps={{
                        toolbar: { searchInput, setSearchInput, setSearch }
                    }}
                />
            </Box>
        </Box>
    )
}

export default TransactionsPage;