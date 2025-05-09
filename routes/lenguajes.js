import express from "express";
import LENGUAJES_control from "../controllers/lenguajes.js";

const router = express.Router();

router.get("/", LENGUAJES_control.getAllLENGUAJES);
router.post("/", LENGUAJES_control.createLENGUAJE);
router.put("/:id", LENGUAJES_control.updateLENGUAJE);
router.delete("/:id", LENGUAJES_control.deleteLENGUAJE);

export default router;
