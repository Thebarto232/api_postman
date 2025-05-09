import conetion from "../utiles/config_bs.js"; // Asegúrate de tener esta ruta bien configurada

export class GENEROS {
  async getAll() {
    try {
      const [rows] = await conetion.query("SELECT * FROM GENEROS;");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener géneros");
    }
  }

  async create(nom_genero) {
    try {
      const [result] = await conetion.query(
        "INSERT INTO GENEROS(nom_genero) VALUES (?);",
        [nom_genero]
      );
      return {
        id_genero: result.insertId,
        nom_genero,
      };
    } catch (error) {
      throw new Error("Error al crear género");
    }
  }

  async update(nom_genero, id_genero) {
    try {
      const [result] = await conetion.query(
        "UPDATE GENEROS SET nom_genero = ? WHERE id_genero = ?;",
        [nom_genero, id_genero]
      );
      if (result.affectedRows === 0) {
        throw new Error("Género no encontrado");
      }
      return { id_genero, nom_genero };
    } catch (error) {
      throw new Error("Error al actualizar género");
    }
  }

  async delete(id_genero) {
    try {
      const [result] = await conetion.query(
        "DELETE FROM GENEROS WHERE id_genero = ?;",
        [id_genero]
      );
      if (result.affectedRows === 0) {
        throw new Error("Género no encontrado");
      }
      return { mensaje: "Género eliminado correctamente" };
    } catch (error) {
      throw new Error("Error al eliminar género");
    }
  }
}
    