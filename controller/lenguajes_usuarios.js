import { LENGUAJES_USUARIOS } from "../models/lenguajes_usuarios.js";

const modelo_lenguajes_usuarios = new LENGUAJES_USUARIOS();

const getAllLENGUAJES_USUARIOS = async (req, res) => {
  try {
    const datos = await modelo_lenguajes_usuarios.getAll();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLENGUAJE_USUARIO = async (req, res) => {
  const { id_usuario, id_lenguaje } = req.body;
  if (!id_usuario || !id_lenguaje) {
    return res.status(400).json({ error: "Faltan datos necesarios (id_usuario, id_lenguaje)" });
  }

  try {
    const nuevoRegistro = await modelo_lenguajes_usuarios.create(id_usuario, id_lenguaje);
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLENGUAJE_USUARIO = async (req, res) => {
  const { id } = req.params;
  const { id_usuario, id_lenguaje } = req.body;

  if (!id_usuario || !id_lenguaje) {
    return res.status(400).json({ error: "Faltan datos necesarios (id_usuario, id_lenguaje)" });
  }

  try {
    const registroActualizado = await modelo_lenguajes_usuarios.update(id_usuario, id_lenguaje, id);
    res.json(registroActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLENGUAJE_USUARIO = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await modelo_lenguajes_usuarios.delete(id);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllLENGUAJES_USUARIOS,
  createLENGUAJE_USUARIO,
  updateLENGUAJE_USUARIO,
  deleteLENGUAJE_USUARIO,
};
