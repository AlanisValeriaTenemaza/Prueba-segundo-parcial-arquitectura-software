import app from "./app.js";
import pool from "./config/database.js";

const PORT = 3000;

// Probamos conexión a la BD
pool.query("SELECT 1")
  .then(() => {
    console.log("Base de datos conectada (PostgreSQL)");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar BD:", error);
  });
