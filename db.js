const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
});
pool.getConnection()
  .then((connection) => {
    console.log('Connected to the database!');
    connection.release();
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });


module.exports = pool;