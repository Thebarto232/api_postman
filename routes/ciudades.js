import express from "express";
import CIUDADES__control from "../controller/ciudades.js";

const router = express.Router();

router.get("/", CIUDADES__control.getAllCIUDADES);
router.post("/", CIUDADES__control.createCIUDAD);
router.put("/:id", CIUDADES__control.updateCIUDAD);
router.delete("/:id", CIUDADES__control.deleteCIUDAD);

export default router;
