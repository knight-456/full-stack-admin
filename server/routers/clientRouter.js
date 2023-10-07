import express from 'express';

import { getProducts, getCustomers, getTransactions, getGeography } from "../controllers/client.js";

const routers = express.Router()

routers.get("/products", getProducts)
routers.get("/customers", getCustomers)
routers.get("/transactions", getTransactions)
routers.get("/geography", getGeography)

export default routers;