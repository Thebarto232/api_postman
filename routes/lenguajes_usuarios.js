import express from "express";
import LENGUAJES_USUARIOS_control from "../controllers/lenguajes_usuarios.js";

const router = express.Router();

router.get("/", LENGUAJES_USUARIOS_control.getAllLENGUAJES_USUARIOS);
router.post("/", LENGUAJES_USUARIOS_control.createLENGUAJE_USUARIO);
router.put("/:id", LENGUAJES_USUARIOS_control.updateLENGUAJE_USUARIO);
router.delete("/:id", LENGUAJES_USUARIOS_control.deleteLENGUAJE_USUARIO);

export default router;
