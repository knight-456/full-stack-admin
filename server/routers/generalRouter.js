import express from 'express';

import { getUser, getDashboardStats } from "../controllers/general.js";

const routers = express.Router();

routers.get("/user/:id", getUser);
routers.get("/dashboard", getDashboardStats);

export default routers;