// Imports de Express y Routers
import express from "express";
import { router as productsRouter } from "./routers/products.router.js";
import { router as cartsRouter } from "./routers/carts.router.js";

// Se crea el server express
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productsRouter);
app.use("/api", cartsRouter);

app.listen(PORT, () => console.log(`El servidor está trabajando en el puerto ${PORT} ✅`));
