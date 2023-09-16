import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js";
// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//mongoose config
const PORT = process.env.PORT || 9000;

//Routes
app.use("/kpi", kpiRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true, // Add this option to avoid deprecation warnings
    useUnifiedTopology: true, // Add this option to avoid deprecation warnings
  })
  .then(async () => {
    app.listen(PORT, async () => {
      console.log(`Server connected Port : ${PORT}`);

      //added one time
      // await mongoose.connection.db.dropDatabase();
      // KPI.insertMany(kpis);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
