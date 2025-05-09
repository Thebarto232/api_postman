import express from "express";
import USUARIOS_control from "../controllers/usuarios.js";

const router = express.Router();

router.get("/", USUARIOS_control.getAllUSUARIOS);
router.post("/", USUARIOS_control.createUSUARIO);
router.put("/:id", USUARIOS_control.updateUSUARIO);
router.delete("/:id", USUARIOS_control.deleteUSUARIO);

export default router;
