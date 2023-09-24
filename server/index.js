import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
//import Product from "./models/Product.js";
// import KPI from "./models/KPI.js";
// import { kpis } from "./data/data.js";
// import { products } from "./data/data.js";
import { transactions } from "./data/data.js";
import Transaction from "./models/Transaction.js";

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
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

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
      //KPI.insertMany(kpis);
      //Product.insertMany(products);
      // Transaction.insertMany(transactions);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
