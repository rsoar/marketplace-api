import { Router } from "express";
import { SignInController } from "../../controllers/SignInController";

const router = Router();
const controller = new SignInController();

router.post("/login", controller.store);

export default router;
