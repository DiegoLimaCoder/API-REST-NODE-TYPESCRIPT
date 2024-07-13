import express from "express";

const server = express();

let teste = "awdw";
console.log(teste);

server.get("/", (req, res) => {
  res.send("Olá, Diego !");
});

export { server };
