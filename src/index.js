import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import studentRoutes from "./route/studentRoutes.js";

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json());

// Connection to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cscorner")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));



app.use(studentRoutes);

// Listening to port
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
