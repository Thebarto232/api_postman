import conetion from "../utiles/config_bs.js"; // Asegúrate de tener esta ruta bien configurada

export class USUARIOS {
  async getAll() {
    try {
      const [rows] = await conetion.query("SELECT * FROM USUARIOS;");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener usuarios");
    }
  }

  async create(usuario, nombre, apellido, telefono, documento, contrasena, id_genero, id_ciudad) {
    try {
      const [result] = await conetion.query(
        "INSERT INTO USUARIOS(usuario, nombre, apellido, telefono, documento, contrasena, id_genero, id_ciudad) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
        [usuario, nombre, apellido, telefono, documento, contrasena, id_genero, id_ciudad]
      );
      return {
        id_user: result.insertId,
        usuario,
        nombre,
        apellido,
        telefono,
        documento,
        contrasena,
        id_genero,
        id_ciudad
      };
    } catch (error) {
      throw new Error("Error al crear usuario");
    }
  }

  async update(id_user, usuario, nombre, apellido, telefono, documento, contrasena, id_genero, id_ciudad) {
    try {
      const [result] = await conetion.query(
        "UPDATE USUARIOS SET usuario = ?, nombre = ?, apellido = ?, telefono = ?, documento = ?, contrasena = ?, id_genero = ?, id_ciudad = ? WHERE id_user = ?;",
        [usuario, nombre, apellido, telefono, documento, contrasena, id_genero, id_ciudad, id_user]
      );
      if (result.affectedRows === 0) {
        throw new Error("Usuario no encontrado");
      }
      return { id_user, usuario, nombre, apellido, telefono, documento, contrasena, id_genero, id_ciudad };
    } catch (error) {
      throw new Error("Error al actualizar usuario");
    }
  }

  async delete(id_user) {
    try {
      const [result] = await conetion.query(
        "DELETE FROM USUARIOS WHERE id_user = ?;",
        [id_user]
      );
      if (result.affectedRows === 0) {
        throw new Error("Usuario no encontrado");
      }
      return { mensaje: "Usuario eliminado correctamente" };
    } catch (error) {
      throw new Error("Error al eliminar usuario");
    }
  }
}
