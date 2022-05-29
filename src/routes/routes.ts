import express from "express";
import { InsertProduct, IProduct } from "../interfaces/IProduct";
import { ProductRepository } from "../repository/ProductRepository";
import { BaseCrudService } from "../service/BaseCrudService";

const router = express.Router();

router.get("/produtos", async (req, res) => {
  const service = new BaseCrudService(new ProductRepository());
  service.insertItem({
    name: "Headset Razer Kraken 7.1",
    description: "Lorem ipsum dolor sit amet.",
    price: 1299,
    seller: "Amazon",
    count: 1,
  } as InsertProduct);

  return res.send("Produto adicionado :)");
});

export default router;
