import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import format from "string-format";

import { userUrl } from "redux/user/user.const";
import { productUrl } from "redux/product/product.const";
import { customerUrl } from "redux/customer/customer.const";
import { transactionUrl } from "redux/transaction/transaction.const";
import { geographyUrl } from "redux/geography/geography.const";
import { overallStatsUrl } from "redux/overallStat/overallStat.const";
import { managementUrl } from "redux/management/management.const";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Customers", "Transactions", "Geography", "Sales", "Admins", "Performance", "Dashboard"],
    endpoints: (build) => ({

        // get user detail
        getUser: build.query({
            query: (id) => format(userUrl.GET_USER_DETAIL, { id: id }),
            providesTags: ["User"],
        }),

        // get product list
        getProducts: build.query({
            query: () => productUrl.GET_PRODUCT_LIST,
            providesTags: ["Products"],
        }),

        // get customers list
        getCustomers: build.query({
            query: () => customerUrl.GET_CUSTOMER_LIST,
            providesTags: ["Customers"]
        }),

        // get transaction list
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: transactionUrl.GET_TRANSACTION_LIST,
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"]
        }),

        // get geographical detail
        getGeography: build.query({
            query: () => geographyUrl.GET_GEOGRAPHY_LIST,
            providesTags: ["Geography"]
        }),

        // get overall stat
        getSales: build.query({
            query: () => overallStatsUrl.GET_SALES_LIST,
            providesTags: ["Sales"]
        }),

        // get admin users
        getAdmins: build.query({
            query: () => managementUrl.GET_ADMIN_USER_LIST,
            providesTags: ['Admins']
        }),

        // get user performance
        getUserPerformance: build.query({
            query: (id) => format(managementUrl.GET_USER_PERFORMANCE, { id: id }),
            providesTags: ["performance"]
        }),

        // get dashboard data
        getDashboard: build.query({
            query: () => "general/dashboard",
            providesTags: ["Dashboard"]
        })
    }),
});

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery,
    useGetUserPerformanceQuery,
    useGetDashboardQuery
} = api;