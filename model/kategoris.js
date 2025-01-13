const { DataTypes } = require('sequelize');
const conn = require('../config/database');

const Kategori = conn.define('Kategori', {
    name: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'tb_categories',
    timestamps: false
})

module.exports = Kategori;