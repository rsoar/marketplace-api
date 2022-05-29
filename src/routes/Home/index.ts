import express from "express";
import { HomeController } from "../../controllers/HomeController";

const router = express.Router();
const controller = new HomeController();

router.get("/", controller.index);

export default router;
