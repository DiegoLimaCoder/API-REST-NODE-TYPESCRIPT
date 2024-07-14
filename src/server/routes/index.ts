import { Router } from "express";
import { StatusCodes } from "http-status-codes";
const router = Router();

router.get("/", (req, res) => {
  return res.send("Olá, Oi !");
});

router.post("/users", (req, res) => {
  return res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };
