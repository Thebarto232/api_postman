import { LENGUAJES } from "../modelo/lenguajes.js";

const modelo_lenguajes = new LENGUAJES();

const getAllLENGUAJES = async (req, res) => {
  try {
    const lenguajes = await modelo_lenguajes.getAll();
    res.json(lenguajes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLENGUAJE = async (req, res) => {
  const { nom_lenguaje } = req.body;
  if (!nom_lenguaje) {
    return res.status(400).json({ error: "El nombre del lenguaje es requerido" });
  }

  try {
    const nuevoLenguaje = await modelo_lenguajes.create(nom_lenguaje);
    res.status(201).json(nuevoLenguaje);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLENGUAJE = async (req, res) => {
  const { id } = req.params;
  const { nom_lenguaje } = req.body;

  if (!nom_lenguaje) {
    return res.status(400).json({ error: "El nombre del lenguaje es requerido" });
  }

  try {
    const lenguajeActualizado = await modelo_lenguajes.update(nom_lenguaje, id);
    res.json(lenguajeActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLENGUAJE = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await modelo_lenguajes.delete(id);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllLENGUAJES,
  createLENGUAJE,
  updateLENGUAJE,
  deleteLENGUAJE,
};
