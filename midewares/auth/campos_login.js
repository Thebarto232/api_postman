import { ResponseProvider } from "../../providers/ResponseProvider.js";

// Definir los campos a validar para el login
const campos = [
  {
    name: "usuario", // en lugar de "email"
    required: true,
    minLength: 4,
    maxLength: 30,
  },
  {
    name: "contrasena", // en lugar de "password"
    required: true,
    minLength: 4,
    maxLength: 30,
  },
];

// Middleware de validación
export const camposLogin = (req, res, next) => {
  const errors = [];

  for (const campo of campos) {
    const { name, required, minLength, maxLength } = campo;
    const value = req.body[name];

    if (required && (!value || value.trim() === "")) {
      errors.push({
        campo: name,
        message: `El campo ${name} es obligatorio.`,
      });
      continue;
    }

    if (value.length < minLength || value.length > maxLength) {
      errors.push({
        campo: name,
        message: `El campo ${name} debe tener entre ${minLength} y ${maxLength} caracteres.`,
      });
    }
  }

  if (errors.length > 0) {
    return ResponseProvider.error(res, "Campos inválidos", 400, errors);
  }

  next();
};
