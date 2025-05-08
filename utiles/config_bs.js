import mysql from "mysql2/promise";

const conetion = await mysql.createConnection({
  host: "localhost",
  user: "johan_2894667",
  password: "#Aprendiz2024  ",
  database: "adso_2894667;",
});

export default conetion;