import express from "express";

const server = express();

let teste = "";

server.get("/", (req, res) => {
  res.send("Olá, Diego !");
});

export { server };
