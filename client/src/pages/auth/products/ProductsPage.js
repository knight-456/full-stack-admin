import React from 'react';

import { Box, useMediaQuery } from "@mui/material";

import { useGetProductsQuery } from 'apiInstance/apiInstance';

import PageHeader from "components/pageHeader/PageHeader";
import ProductCard from 'components/card/ProductCard';

const ProductsPage = () => {
    const { data, isLoading } = useGetProductsQuery();

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box m={"1.5rem 2.5rem"}>
            <PageHeader title={"PRODUCTS"} subtitle={"See your list of products."} />
            {(data || !isLoading) ? (
                <Box
                    mt={"20px"}
                    display={"grid"}
                    gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
                    justifyContent={"space-between"}
                    rowGap={"20px"}
                    columnGap={"1.33%"}
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                    }}
                >
                    {data?.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </Box>
            ) : (
                <>Loading...</>
            )}
        </Box>
    )
}

export default ProductsPage;