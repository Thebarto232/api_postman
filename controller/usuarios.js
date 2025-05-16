import { USUARIOS } from "../modelo/usuarios.js";

const modelo_usuarios = new USUARIOS();

const getAllUSUARIOS = async (req, res) => {
  try {
    const usuarios = await modelo_usuarios.getAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUSUARIO = async (req, res) => {
  const { nom_usuario } = req.body;
  if (!nom_usuario) {
    return res.status(400).json({ error: "El nombre del usuario es requerido" });
  }

  try {
    const nuevoUsuario = await modelo_usuarios.create(nom_usuario);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUSUARIO = async (req, res) => {
  const { id } = req.params;
  const { nom_usuario } = req.body;

  if (!nom_usuario) {
    return res.status(400).json({ error: "El nombre del usuario es requerido" });
  }

  try {
    const usuarioActualizado = await modelo_usuarios.update(nom_usuario, id);
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUSUARIO = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await modelo_usuarios.delete(id);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllUSUARIOS,
  createUSUARIO,
  updateUSUARIO,
  deleteUSUARIO,
};
