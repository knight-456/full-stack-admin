import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from "./routers/clientRouter.js";
import generalRoutes from "./routers/generalRouter.js";
import managementRoutes from "./routers/managementRouter.js";
import salesRoutes from "./routers/salesRouter.js";

// import ProductStat from './models/ProductStat.js';
// import OverallStat from './models/OverallStat.js';
// import AffiliateStat from './models/AffiliateStat.js';

// import { dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } from "./data/index.js";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

// ROUTES
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        // ONLY ADD DATA ONE TIME
        // OverallStat.collection.drop()
        // ProductStat.collection.drop()
        // AffiliateStat.insertMany(dataAffiliateStat)
        // OverallStat.insertMany(dataOverallStat)
        // Transaction.insertMany(dataTransaction)
        // Product.insertMany(dataProduct)
        // ProductStat.insertMany(dataProductStat)
        // User.insertMany(dataUser)

        // to drop a collection for mongo db:
        // AffiliateStat.collection.drop()
    })
    .catch((error) => console.error(`${error}, did not connect`))