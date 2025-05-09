import conetion from "../utiles/config_bs.js"; // Asegúrate de que esto esté bien escrito

export class CIUDADES {
  async getAll() {
    try {
      const [rows] = await conetion.query("SELECT * FROM CIUDADES;");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener ciudades");
    }
  }

  async create(nom_ciudad) {
    try {
      const [result] = await conetion.query(
        "INSERT INTO CIUDADES(nom_ciudad) VALUES (?);",
        [nom_ciudad]
      );
      return {
        id_ciudad: result.insertId,
        nom_ciudad,
      };
    } catch (error) {
      throw new Error("Error al crear ciudad");
    }
  }

  async update(nom_ciudad, id_ciudad) {
    try {
      const [result] = await conetion.query(
        "UPDATE CIUDADES SET nom_ciudad = ? WHERE id_ciudad = ?;",
        [nom_ciudad, id_ciudad]
      );
      if (result.affectedRows === 0) {
        throw new Error("Ciudad no encontrada");
      }
      return { id_ciudad, nom_ciudad };
    } catch (error) {
      throw new Error("Error al actualizar ciudad");
    }
  }

  async delete(id_ciudad) {
    try {
      const [result] = await conetion.query(
        "DELETE FROM CIUDADES WHERE id_ciudad = ?;",
        [id_ciudad]
      );
      if (result.affectedRows === 0) {
        throw new Error("Ciudad no encontrada");
      }
      return { mensaje: "Ciudad eliminada correctamente" };
    } catch (error) {
      throw new Error("Error al eliminar ciudad");
    }
  }
}
