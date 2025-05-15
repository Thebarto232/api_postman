import conetion from "../utiles/config_bs.js"; 

export class LENGUAJES {
  async getAll() {
    try {
      const [rows] = await conetion.query("SELECT * FROM LENGUAJES;");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener lenguajes");
    }
  }

  async create(nom_lenguaje) {
    try {
      const [result] = await conetion.query(
        "INSERT INTO LENGUAJES(nom_lenguaje) VALUES (?);",
        [nom_lenguaje]
      );
      return {
        id_leng: result.insertId,
        nom_lenguaje,
      };
    } catch (error) {
      throw new Error("Error al crear lenguaje");
    }
  }

  async update(nom_lenguaje, id_leng) {
    try {
      const [result] = await conetion.query(
        "UPDATE LENGUAJES SET nom_lenguaje = ? WHERE id_leng = ?;",
        [nom_lenguaje, id_leng]
      );
      if (result.affectedRows === 0) {
        throw new Error("Lenguaje no encontrado");
      }
      return { id_leng, nom_lenguaje };
    } catch (error) {
      throw new Error("Error al actualizar lenguaje");
    }
  }

  async delete(id_leng) {
    try {
      const [result] = await conetion.query(
        "DELETE FROM LENGUAJES WHERE id_leng = ?;",
        [id_leng]
      );
      if (result.affectedRows === 0) {
        throw new Error("Lenguaje no encontrado");
      }
      return { mensaje: "Lenguaje eliminado correctamente" };
    } catch (error) {
      throw new Error("Error al eliminar lenguaje");
    }
  }
}
