import { Router } from "express";
import { CidadeController } from "../controller";
const router = Router();

router.get("/", (req, res) => {
  return res.send("Olá, Diego !");
});

router.post(
  "/cidade",
  CidadeController.createValidation,
  CidadeController.create
);

export { router };
