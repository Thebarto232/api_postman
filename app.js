import express from "express";
import generosRoutes from "./routes/generos.js";
import lenguajesRoutes from "./routes/lenguajes.js";
import usuariosRoutes from "./routes/usuarios.js";
import lenguajesUsuariosRoutes from "./routes/lenguajes_usuarios.js";
// import ciudadesRoutes from "./routes/ciudades.js"; // Asegúrate de que CIUDADES también esté

const app = express();
app.use(express.json());

// Rutas
app.use("/generos", generosRoutes);
app.use("/lenguajes", lenguajesRoutes);
app.use("/usuarios", usuariosRoutes); 
app.use("/lenguajes_usuarios", lenguajesUsuariosRoutes); 
// app.use("/ciudades", ciudadesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
