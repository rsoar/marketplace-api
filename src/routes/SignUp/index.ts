import { Router } from "express";
import { SignUpController } from "../../controllers/SignUpController";

const router = Router();
const controller = new SignUpController();

router.get("/teste", controller.index);
router.post("/signup", controller.store);

export default router;
