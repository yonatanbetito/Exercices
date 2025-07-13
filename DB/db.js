import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.DB_host || "localhost",
  user: process.env.DB_user || "root",
  password: "",
  database: "classicmodels",
});
