import { GENEROS } from "../modelo/generos.js";
const modelo_generos = new GENEROS();

const getAllGENEROS = async (req, res) => {
  try {
    const generos = await modelo_generos.getAll();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createGENERO = async (req, res) => {
  const { nom_genero } = req.body;
  if (!nom_genero) {
    return res.status(400).json({ error: "El nombre del género es requerido" });
  }

  try {
    const nuevoGenero = await modelo_generos.create(nom_genero);
    res.status(201).json(nuevoGenero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateGENERO = async (req, res) => {
  const { id } = req.params;
  const { nom_genero } = req.body;

  if (!nom_genero) {
    return res.status(400).json({ error: "El nombre del género es requerido" });
  }

  try {
    const generoActualizado = await modelo_generos.update(nom_genero, id);
    res.json(generoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteGENERO = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await modelo_generos.delete(id);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllGENEROS,
  createGENERO,
  updateGENERO,
  deleteGENERO,
};
