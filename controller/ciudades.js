import { CIUDADES } from "../modelo/ciudades.js"; // Asegúrate de que la ruta sea correcta


const modelo_ciudades = new CIUDADES();

// Obtener todas las ciudades
const getAllCIUDADES = async (req, res) => {
  try {
    const ciudades = await modelo_ciudades.getAll();
    res.json(ciudades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva ciudad
const createCIUDAD = async (req, res) => {
  const { nom_ciudad } = req.body;
  if (!nom_ciudad) {
    return res.status(400).json({ error: "El nombre de la ciudad es requerido" });
  }

  try {
    const nuevaCiudad = await modelo_ciudades.create(nom_ciudad);
    res.status(201).json(nuevaCiudad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una ciudad
const updateCIUDAD = async (req, res) => {
  const { id } = req.params;
  const { nom_ciudad } = req.body;

  if (!nom_ciudad) {
    return res.status(400).json({ error: "El nombre de la ciudad es requerido" });
  }

  try {
    const ciudadActualizada = await modelo_ciudades.update(nom_ciudad, id);
    res.json(ciudadActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una ciudad
const deleteCIUDAD = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await modelo_ciudades.delete(id);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllCIUDADES,
  createCIUDAD,
  updateCIUDAD,
  deleteCIUDAD,
};
