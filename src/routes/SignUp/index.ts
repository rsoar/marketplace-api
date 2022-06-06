import { Router } from "express";
import { SignUpController } from "../../controllers/SignUpController";

const router = Router();
const controller = new SignUpController();

router.post("/register", controller.store);

export default router;
