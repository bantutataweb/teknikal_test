const { DataTypes } = require('sequelize');
const conn = require('../config/database');

const Product = conn.define('Product', {
    name: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    category_id: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'tb_products',
    timestamps: false
})

module.exports = Product;