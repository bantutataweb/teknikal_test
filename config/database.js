const { Sequelize } = require('sequelize');

//Persiapan config
const database = "db_tes",
      username = "root",
      password = "",
      host     = "localhost",
      sql      = "mysql"

// Konfigurasi koneksi database
const conn = new Sequelize(database, username, password, {
    host: host, 
    dialect: sql, 
    logging: false,   
});

module.exports = conn;