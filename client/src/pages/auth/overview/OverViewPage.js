import { useState } from "react";

import { Box, FormControl, InputLabel, MenuItem, Select, useTheme } from "@mui/material";

import { useGetSalesQuery } from "apiInstance/apiInstance";

import PageHeader from "components/pageHeader/PageHeader";
import OverviewChart from "components/chart/OverviewChart";

const OverViewPage = () => {
    const [view, setView] = useState("units")

    const theme = useTheme()

    const { data, isLoading } = useGetSalesQuery()

    return (
        <Box m={"1.5rem 2.5rem"}>
            <PageHeader
                title={"OVERVIEW"}
                subtitle={"Overview of general revenue and profit"}
            />
            <Box height={"75vh"}>
                <FormControl sx={{ mt: "1rem" }}>
                    <InputLabel>
                        {"View"}
                    </InputLabel>
                    <Select
                        value={view}
                        label={"View"}
                        onChange={(e) => setView(e.target.value)}
                    >
                        <MenuItem value={"sales"}>
                            {"Sales"}
                        </MenuItem>
                        <MenuItem value={"units"}>
                            {"Units"}
                        </MenuItem>

                    </Select>

                </FormControl>
                <OverviewChart view={view} />
            </Box>
        </Box>
    )
}

export default OverViewPage