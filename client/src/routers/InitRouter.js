import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DashboardPage from 'pages/auth/dashboard/DashboardPage';
import ProductsPage from 'pages/auth/products/ProductsPage';
import CustomersPage from 'pages/auth/customers/CustomersPage';
import TransactionsPage from 'pages/auth/transactions/TransactionsPage';
import GeographyPage from 'pages/auth/geography/GeographyPage';
import OverViewPage from 'pages/auth/overview/OverViewPage';
import AdminsPage from 'pages/auth/admins/AdminsPage';
import PerformancePage from 'pages/auth/performance/PerformancePage';

const InitRouter = () => {

    return (
        <Routes>

            {/* private routes */}
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/customers' element={<CustomersPage />} />
            <Route path='/transactions' element={<TransactionsPage />} />
            <Route path='/geography' element={<GeographyPage />} />
            <Route path='/overview' element={<OverViewPage />} />
            <Route path='/admin' element={<AdminsPage />} />
            <Route path='/performance' element={<PerformancePage />} />
        </Routes>
    )
}

export default InitRouter;