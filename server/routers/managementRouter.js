import express from 'express';

import { getAdmins, getUserPerformance } from "../controllers/management.js";

const routers = express.Router()

routers.get("/admins", getAdmins)
routers.get("/performance/:id", getUserPerformance)

export default routers;