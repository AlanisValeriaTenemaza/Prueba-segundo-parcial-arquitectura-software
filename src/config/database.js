import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "admin",
  password: "admin",
  database: "andesfin",
});

pool.on("connect", () => {
  console.log("Conectado a PostgreSQL");
});

export default pool;
