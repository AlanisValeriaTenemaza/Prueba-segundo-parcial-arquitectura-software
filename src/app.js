import express from "express";
import { listarUsuarios } from "./controllers/UsuarioController.js";

const app = express();
app.use(express.json());

app.get("/usuarios", listarUsuarios);

export default app;