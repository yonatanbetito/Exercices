import { pool } from "../DB/db";

export const getDatabyCountry = async (req, res) => {
  const [rows] = await pool.query(
    `SELECT * FROM customers WHERE country = 'France';`
  );
  res.json(rows);
};

export const fullNameByNumReport = async (req, res) => {
  const [names] = await pool.query(
    `SELECT firstName,lastName FROM employees WHERE reportsTo = 1143;`
  );
  res.json(names);
};

export const sumOfProductsByCategory = async (req, res) => {
  const [sum] = await pool.query(`SELECT SUM(quantityInStock)
FROM products
WHERE productLine = 'Classic Cars';`);
  res.json(sum);
};
