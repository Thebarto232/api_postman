import express from "express";
import generosRoutes from "./routes/generos.js";
import lenguajesRoutes from "./routes/lenguajes.js";
import usuariosRoutes from "./routes/usuarios.js";
import lenguajesUsuariosRoutes from "./routes/lenguajes_usuarios.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import ciudadesRoutes from "./routes/ciudades.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/generos", generosRoutes);
app.use("/lenguajes", lenguajesRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/lenguajes_usuarios", lenguajesUsuariosRoutes);
app.use("/ciudades", ciudadesRoutes);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
