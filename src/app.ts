import express from "express";
import cors from "cors";
import router from "./routes/routes";
import { database } from "./database/config";

export const app = express();

const connect = async () => {
  try {
    await database.connect();
  } catch (err) {
    console.error("Failed to connect database");
  } finally {
    app.emit("db connected");
  }
};
connect();

app.use(express.json()); // middleware to format the body request in JSON format
app.use(cors()); // open ports for application

// routes
app.use("/api", router);
