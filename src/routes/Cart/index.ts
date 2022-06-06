import { Router } from "express";
import { Auth } from "../../middlewares/Auth";
import { CartController } from "../../controllers/CartController";

const router = Router();
const cartController = new CartController();
const auth = new Auth();

router.get("/auth/cart", auth.validate, cartController.index);

export default router;
