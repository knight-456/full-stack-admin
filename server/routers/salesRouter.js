import express from 'express';

import { getSales } from '../controllers/sales.js';

const routers = express.Router()

routers.get("/sales", getSales)

export default routers;