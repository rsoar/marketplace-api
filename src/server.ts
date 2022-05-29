require("dotenv").config();
import { app } from "./app";

const startServer = () => {
  app.listen(process.env.PORT, () => {
    console.log("server is running on port " + process.env.PORT);
  });
};

app.on("db connected", startServer);
