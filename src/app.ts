import express from "express";
import cors from "cors";
import { database } from "./config/database";
import homeRoutes from "./routes/Home";
import signRoutes from "./routes/SignUp";
import signInRoute from "./routes/SignIn";
import cartRoute from "./routes/Cart";

export const app = express();

(async () => {
  try {
    await database.connect();
  } catch (err) {
    console.error("Failed to connect database");
  } finally {
    app.emit("db connected");
  }
})();

app.use(express.json()); // middleware to format the body request in JSON format
app.use(cors()); // open ports for application

// routes
app.use("/api", homeRoutes);
app.use("/", signRoutes);
app.use(cartRoute);
app.use("/", signInRoute);
