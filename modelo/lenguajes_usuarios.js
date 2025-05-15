import conetion from "../utiles/config_bs.js"; // 

export class LENGUAJES_USUARIOS {
  async getAll() {
    try {
      const [rows] = await conetion.query("SELECT * FROM LENGUAJES_USUARIOS;");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener lenguajes de usuarios");
    }
  }

  async create(id_user, id_leng) {
    try {
      const [result] = await conetion.query(
        "INSERT INTO LENGUAJES_USUARIOS(id_user, id_leng) VALUES (?, ?);",
        [id_user, id_leng]
      );
      return {
        id_user,
        id_leng,
      };
    } catch (error) {
      throw new Error("Error al asignar lenguaje a usuario");
    }
  }

  async delete(id_user, id_leng) {
    try {
      const [result] = await conetion.query(
        "DELETE FROM LENGUAJES_USUARIOS WHERE id_user = ? AND id_leng = ?;",
        [id_user, id_leng]
      );
      if (result.affectedRows === 0) {
        throw new Error("Relación no encontrada");
      }
      return { mensaje: "Relación eliminada correctamente" };
    } catch (error) {
      throw new Error("Error al eliminar relación");
    }
  }
}
