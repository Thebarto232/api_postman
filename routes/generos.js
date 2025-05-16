import express from "express";
import generosControl from "../controller/generos.js";
const router = express.Router();

router.get("/", generosControl.getAllGENEROS);
router.post("/", generosControl.createGENERO);
router.put("/:id", generosControl.updateGENERO);
router.delete("/:id", generosControl.deleteGENERO);

export default router;
